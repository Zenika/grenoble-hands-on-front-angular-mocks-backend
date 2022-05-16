import { Matchers } from "@pact-foundation/pact-web";
const { like } = Matchers;

let server: any;

const expectedCategories = {
  count: 2,
  tags: [
    { "id": "en:plant-based-foods-and-beverages", "known": 1, "name":"Aliments et boissons à base de végétaux", "products": 297048, "url": "https://world.openfoodfacts.org/category/plant-based-foods-and-beverages" },
    { "id": "en:fishes", "known": 1, "name":"Poissons", "products": "259040", "url": "https://world.openfoodfacts.org/category/fishes" }
  ]
};

describe("Categories", () => {
  before(() => {
    cy.mockServer({
      consumer: "front-pact",
      provider: 'category-service',
    }).then(opts => {
      server = opts
    })
  });

  it("create category pact", () => {
    cy.addMockRoute({
      server,
      as: 'category',
      state: "categories",
      uponReceiving: "a request to get all categories",
      withRequest: {
        method: "GET",
        path: "/categories.json",
      },
      willRespondWith: {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: like(expectedCategories),
      },
    });

    cy.visit('/category');
  });
});
