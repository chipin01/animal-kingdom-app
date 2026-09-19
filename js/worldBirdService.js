// World Bird Service
// Provides dynamic lookup for ANY bird species on Earth via Wikipedia / Wikimedia APIs
// Plus quick access to US State Birds, World Country Birds, and Iconic Avifauna

(function() {
  var cache = {};

  var POPULAR_WORLD_BIRDS = [
    { name: "Japanese Snow Fairy (Shima Enaga)", query: "Japanese Snow Fairy (Shima Enaga)" },
    { name: "Shoebill", query: "Shoebill" },
    { name: "Kakapo", query: "Kakapo" },
    { name: "Resplendent Quetzal", query: "Resplendent quetzal" },
    { name: "Superb Bird-of-Paradise", query: "Greater lophorina" },
    { name: "Hoatzin", query: "Hoatzin" },
    { name: "Secretarybird", query: "Secretarybird" },
    { name: "Sword-Billed Hummingbird", query: "Sword-billed hummingbird" },
    { name: "Southern Cassowary", query: "Southern cassowary" },
    { name: "Kagu", query: "Kagu" },
    { name: "Blue-Footed Booby", query: "Blue-footed booby" },
    { name: "Atlantic Puffin", query: "Atlantic puffin" },
    { name: "Oilbird", query: "Oilbird" },
    { name: "Tawny Frogmouth", query: "Tawny frogmouth" },
    { name: "Spix's Macaw", query: "Spix's macaw" },
    { name: "California Condor", query: "California condor" },
    { name: "Great Hornbill", query: "Great hornbill" },
    { name: "Snowy Owl", query: "Snowy owl" },
    { name: "Andean Cock-of-the-Rock", query: "Andean cock-of-the-rock" },
    { name: "Marabou Stork", query: "Marabou stork" },
    { name: "King Vulture", query: "King vulture" },
    { name: "Ruby-Throated Hummingbird", query: "Ruby-throated hummingbird" },
    { name: "Barn Owl", query: "Barn owl" }
  ];

  function cleanSpeciesQuery(query) {
    if (!query) return "";
    return query.trim().replace(/[<>]/g, "");
  }

  function getProxiedImage(originalUrl) {
    if (!originalUrl) {
      return "https://images.weserv.nl/?url=" + encodeURIComponent("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Red-tailed_Hawk_%2845812546121%29.jpg/500px-Red-tailed_Hawk_%2845812546121%29.jpg") + "&w=500&output=jpg";
    }
    // Clean up Wikimedia thumbnail path to standard 500px size
    var cleanUrl = originalUrl;
    if (cleanUrl.indexOf("/thumb/") !== -1) {
      cleanUrl = cleanUrl.replace(/\/\d+px-/, "/500px-");
    }
    return "https://images.weserv.nl/?url=" + encodeURIComponent(cleanUrl) + "&w=500&output=jpg";
  }

  // Lookup in local datasets first (States, Countries, Base Birds)
  function findLocalBird(query) {
    if (!query) return null;
    var q = query.toLowerCase().trim();

    // Check for Snow Fairy aliases directly
    if (q.includes("snow fairy") || q.includes("shima enaga") || q.includes("shima-enaga") || q.includes("shimaenaga")) {
      if (window.BIRDS_DATA) {
        var fairy = window.BIRDS_DATA.find(function(b) { return b.id === "bird-shima-enaga"; });
        if (fairy) return fairy;
      }
    }

    // Check US State Birds
    if (window.US_STATE_BIRDS) {
      for (var i = 0; i < window.US_STATE_BIRDS.length; i++) {
        var sb = window.US_STATE_BIRDS[i];
        if (sb.name.toLowerCase() === q ||
            sb.jurisdiction.toLowerCase() === q ||
            sb.scientific.toLowerCase() === q ||
            (sb.stateCode && sb.stateCode.toLowerCase() === q)) {
          return sb;
        }
      }
    }

    // Check World Country Birds
    if (window.WORLD_COUNTRY_BIRDS) {
      for (var j = 0; j < window.WORLD_COUNTRY_BIRDS.length; j++) {
        var cb = window.WORLD_COUNTRY_BIRDS[j];
        if (cb.name.toLowerCase() === q ||
            cb.jurisdiction.toLowerCase() === q ||
            cb.scientific.toLowerCase() === q) {
          return cb;
        }
      }
    }

    // Check Base Birds
    if (window.BIRDS_DATA) {
      for (var k = 0; k < window.BIRDS_DATA.length; k++) {
        var b = window.BIRDS_DATA[k];
        if (b.name.toLowerCase() === q || b.scientific.toLowerCase() === q || b.name.toLowerCase().includes(q)) {
          return b;
        }
      }
    }

    return null;
  }

  // Live lookup from Wikipedia API
  function fetchWorldBirdLive(query, callback) {
    var cleaned = cleanSpeciesQuery(query);
    if (!cleaned) {
      callback(new Error("Please enter a bird name to search!"));
      return;
    }

    // Check in-memory cache
    var cacheKey = cleaned.toLowerCase();
    if (cache[cacheKey]) {
      callback(null, cache[cacheKey]);
      return;
    }

    // Check if matching local bird first
    var localMatch = findLocalBird(cleaned);
    if (localMatch) {
      cache[cacheKey] = localMatch;
      callback(null, localMatch);
      return;
    }

    // Call Wikipedia REST API
    var summaryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(cleaned);

    fetch(summaryUrl)
      .then(function(res) {
        if (!res.ok) {
          // If direct summary fails, try search endpoint
          return searchWikipediaBird(cleaned);
        }
        return res.json();
      })
      .then(function(data) {
        if (!data || data.type === "disambiguation" || !data.title) {
          return searchWikipediaBird(cleaned);
        }
        return data;
      })
      .then(function(pageData) {
        if (!pageData || !pageData.title) {
          throw new Error("No bird species found matching '" + cleaned + "'. Please check spelling or try another species name!");
        }

        var imageUrl = null;
        if (pageData.originalimage && pageData.originalimage.source) {
          imageUrl = pageData.originalimage.source;
        } else if (pageData.thumbnail && pageData.thumbnail.source) {
          imageUrl = pageData.thumbnail.source;
        }

        var description = pageData.extract || "An extraordinary bird species known from avian science and biodiversity records.";
        // Clean description for kids
        if (description.length > 320) {
          description = description.substring(0, 317) + "...";
        }

        var birdObj = {
          id: "world-live-" + encodeURIComponent(pageData.title.toLowerCase().replace(/\s+/g, "-")),
          name: pageData.title,
          scientific: pageData.description || "Aves",
          category: "birds",
          isWorldBird: true,
          badgeText: "🌐 World Species Explorer",
          tagline: "Wild avian species explored from global wildlife archives",
          description: description,
          habitat: "Native regions and habitats worldwide (see full encyclopedia description)",
          diet: "Seeds, berries, insects, or small aquatic life depending on specialized beak ecology",
          endangered: "Global Species",
          predators: "Birds of prey and native regional predators",
          funFact: "Part of the extraordinary class Aves, containing over 10,000 unique species living across all seven continents!",
          image: getProxiedImage(imageUrl),
          emoji: "🦅"
        };

        cache[cacheKey] = birdObj;
        callback(null, birdObj);
      })
      .catch(function(err) {
        callback(err);
      });
  }

  function searchWikipediaBird(query) {
    var searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      encodeURIComponent(query + " bird") + "&limit=5&namespace=0&format=json&origin=*";

    return fetch(searchUrl)
      .then(function(res) { return res.json(); })
      .then(function(results) {
        if (results && results[1] && results[1].length > 0) {
          var firstResult = results[1][0];
          return fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(firstResult))
            .then(function(r) { return r.json(); });
        }
        return null;
      });
  }

  window.WorldBirdService = {
    fetchWorldBirdLive: fetchWorldBirdLive,
    findLocalBird: findLocalBird,
    getPopularBirds: function() { return POPULAR_WORLD_BIRDS; }
  };
})();
