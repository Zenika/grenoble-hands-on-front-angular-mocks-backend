import { Allergen } from '@domain/allergen/entities/allergen';
import { AllergenRepository } from '@domain/allergen/ports/allergen.repository';
import { RetrieveAllergensUseCase } from '@domain/allergen/usecases/retrieve-allergens/retrieve-allergens.usecase';

describe('RetrieveAllergensUseCase', () => {

  test('Should return allergens', async () => {
    // Given
    const expectedAllergens: Allergen[] = [
      { id: 'en:milk', name: 'Lait' },
      { id: 'en:gluten', name: 'Gluten' }
    ];
    const repository: AllergenRepository = {
      getAllergens: () => Promise.resolve(expectedAllergens)
    };
    const useCase = new RetrieveAllergensUseCase(repository);

    // When
    const allergens = await useCase.execute();

    // Then
    expect(allergens).toEqual(expectedAllergens);
  });

});
