import { Allergen } from '@domain/allergen/entities/allergen';
import { RetrieveAllergensResponseDto } from '@adapters/allergen/api/http-responses/retrieve-allergens.response.dto';
import { AllergenMapper } from '@adapters/allergen/api/mappers/allergen.mapper';

describe(`AllergenMapper`, () => {

  it('Should map allergens response dto to allergens', () => {
    // Given
    const expectedAllergens: Allergen[] = [
      { id: 'en:milk', name: 'Lait' },
      { id: 'en:gluten', name: 'Gluten' }
    ];
    const retrieveAllergensResponseDto: RetrieveAllergensResponseDto = {
      count: 2,
      tags: [
        { "id": "en:milk", "known": 1, "name": "Lait", "products": 203069, "url": "https://world.openfoodfacts.org/allergen/milk" },
        { "id": "en:gluten", "known": 1, "name": "Gluten", "products": 174565, "sameAs": ["https://www.wikidata.org/wiki/Q188251"], "url": "https://world.openfoodfacts.org/allergen/gluten" },
      ]
    } as RetrieveAllergensResponseDto;

    // When
    const allergens: Allergen[] = AllergenMapper.toAllergens(retrieveAllergensResponseDto);

    // Then
    expect(allergens).toEqual(expectedAllergens);
  });

});
