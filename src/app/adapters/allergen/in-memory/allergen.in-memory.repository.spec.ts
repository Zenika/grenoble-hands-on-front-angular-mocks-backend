import { Allergen } from '@domain/allergen/entities/allergen';
import { AllergenInMemoryRepository } from '@adapters/allergen/in-memory/allergen.in-memory.repository';

describe('AllergenInMemoryRepository', () => {

  it('Should get allergens', async () => {
    // Given
    const expectedAllergens: Allergen[] = [
      { id: 'en:milk', name: 'Lait' },
      { id: 'en:gluten', name: 'Gluten' }
    ];
    const repository = new AllergenInMemoryRepository();

    // When
    const allergens = await repository.getAllergens();

    // Then
    expect(allergens).toEqual(expectedAllergens);
  });

});
