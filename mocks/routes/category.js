// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// categories data
const categoriesDto = {
  "count": 8,
  "tags": [
    { "id": "en:plant-based-foods-and-beverages", "known": 1, "name": "Aliments et boissons à base de végétaux", "products": 123626, "url": "https://fr.openfoodfacts.org/categorie/aliments-et-boissons-a-base-de-vegetaux" },
    {"id":"en:plant-based-foods","known":1,"name":"Aliments d'origine végétale","products":107112,"url":"https://fr.openfoodfacts.org/categorie/aliments-d-origine-vegetale"},
    {"id":"en:snacks","known":1,"name":"Snacks","products":61723,"sameAs":["https://www.wikidata.org/wiki/Q749316"],"url":"https://fr.openfoodfacts.org/categorie/snacks"},
    {"id":"en:meats","known":1,"name":"Viandes","products":53463,"url":"https://fr.openfoodfacts.org/categorie/viandes"},
    {"id":"en:sweet-snacks","known":1,"name":"Snacks sucrés","products":51868,"url":"https://fr.openfoodfacts.org/categorie/snacks-sucres"},
    {"id":"en:beverages","known":1,"name":"Boissons","products":51342,"sameAs":["https://www.wikidata.org/wiki/Q40050"],"url":"https://fr.openfoodfacts.org/categorie/boissons"},
    {"id":"en:dairies","known":1,"name":"Produits laitiers","products":41962,"sameAs":["https://www.wikidata.org/wiki/Q185217"],"url":"https://fr.openfoodfacts.org/categorie/produits-laitiers"},
    {"id":"en:fruits-and-vegetables-based-foods","known":1,"name":"Aliments à base de fruits et de légumes","products":35817,"url":"https://fr.openfoodfacts.org/categorie/aliments-a-base-de-fruits-et-de-legumes"}
  ]
};

module.exports = [
  {
    id: "get-categories", // id of the route
    url: "/categories.json", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: categoriesDto, // body to send
        }
      }
    ]
  }
];
