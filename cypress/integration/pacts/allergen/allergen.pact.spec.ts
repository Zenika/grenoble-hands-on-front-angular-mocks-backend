import { Matchers } from "@pact-foundation/pact-web";
import { RetrieveAllergensResponseDto } from '@adapters/allergen/api/http-responses/retrieve-allergens.response.dto';
const { like } = Matchers;

let server: any;

const expectedAllergens: RetrieveAllergensResponseDto = {
  count: 2,
  tags: [
    { "id": "en:milk", "known": 1, "name": "Lait", "products": 203069, "url": "https://world.openfoodfacts.org/allergen/milk" },
    { "id": "en:gluten", "known": 1, "name": "Gluten", "products": 174565, "sameAs": ["https://www.wikidata.org/wiki/Q188251"], "url": "https://world.openfoodfacts.org/allergen/gluten" },
  ]
};

describe("Allergens", () => {
  before(() => {
    cy.mockServer({
      consumer: "front-pact",
      provider: 'allergen-service',
    }).then(opts => {
      server = opts
    })
  });

  it("create allergen pact", () => {
    cy.addMockRoute({
      server,
      as: 'allergen',
      state: "allergens",
      uponReceiving: "a request to get all allergens",
      withRequest: {
        method: "GET",
        path: "/allergens.json",
      },
      willRespondWith: {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: like(expectedAllergens),
      },
    });

    cy.visit('/allergen');
  });
});
