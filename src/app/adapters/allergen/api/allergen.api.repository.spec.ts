import { HttpClient } from '@adapters/http-client';
import { Allergen } from '@domain/allergen/entities/allergen';
import { RetrieveAllergensResponseDto } from '@adapters/allergen/api/http-responses/retrieve-allergens.response.dto';
import { AllergenApiRepository } from '@adapters/allergen/api/allergen.api.repository';

describe('AllergenApiRepository', () => {

  it('Should get allergens', async () => {
    // Given
    const expectedAllergens: Allergen[] = [
      { id: 'en:milk', name: 'Lait' },
      { id: 'en:gluten', name: 'Gluten' }
    ];
    const httpClient: HttpClient = {
      get(url: string): Promise<RetrieveAllergensResponseDto> {
        expect(url).toBe(`/allergens.json`)
        const response: RetrieveAllergensResponseDto = {
          count: 2,
          tags: [
            { "id": "en:milk", "known": 1, "name": "Lait", "products": 203069, "url": "https://world.openfoodfacts.org/allergen/milk" },
            { "id": "en:gluten", "known": 1, "name": "Gluten", "products": 174565, "sameAs": ["https://www.wikidata.org/wiki/Q188251"], "url": "https://world.openfoodfacts.org/allergen/gluten" },
          ]
        }
        return Promise.resolve(response)
      }
    } as HttpClient;
    const repository = new AllergenApiRepository(httpClient);

    // When
    const allergens = await repository.getAllergens();

    // Then
    expect(allergens).toEqual(expectedAllergens);
  });

});
