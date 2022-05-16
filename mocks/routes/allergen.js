// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// allergens data
const allergensDto = {
  "count": 5293,
  "tags": [
    {
      "id": "en:milk",
      "known": 1,
      "name": "Milk",
      "products": 203069,
      "url": "https://world.openfoodfacts.org/allergen/milk"
    },
    {
      "id": "en:gluten",
      "known": 1,
      "name": "Gluten",
      "products": 174565,
      "sameAs": ["https://www.wikidata.org/wiki/Q188251"],
      "url": "https://world.openfoodfacts.org/allergen/gluten"
    },
    {
      "id": "en:soybeans",
      "known": 1,
      "name": "Soybeans",
      "products": 118030,
      "url": "https://world.openfoodfacts.org/allergen/soybeans"
    },
    {
      "id": "en:eggs",
      "known": 1,
      "name": "Eggs",
      "products": 66105,
      "sameAs": ["https://www.wikidata.org/wiki/Q93189"],
      "url": "https://world.openfoodfacts.org/allergen/eggs"
    },
    {
      "id": "en:nuts",
      "known": 1,
      "name": "Nuts",
      "products": 48219,
      "url": "https://world.openfoodfacts.org/allergen/nuts"
    },
    {
      "id": "en:celery",
      "known": 1,
      "name": "Celery",
      "products": 18702,
      "sameAs": ["https://www.wikidata.org/wiki/Q28298"],
      "url": "https://world.openfoodfacts.org/allergen/celery"
    }
  ]
};

module.exports = [
  {
    id: "get-allergens", // id of the route
    url: "/allergens.json", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: allergensDto, // body to send
        }
      }
    ]
  }
];
