import { Category } from '@domain/category/entities/category';
import { CategoryRepository } from '@domain/category/ports/category.repository';
import { RetrieveCategoriesUseCase } from '@domain/category/usecases/retrieve-categories/retrieve-categories.usecase';

describe('RetrieveCategoriesUseCase', () => {

  test('Should return categories', async () => {
    // Given
    const expectedCategories: Category[] = [
      { id: 'en:plant-based-foods-and-beverages', name: 'Aliments et boissons à base de végétaux' },
      { id: 'en:fishes', name: 'Poissons' }
    ];
    const repository: CategoryRepository = {
      getCategories: () => Promise.resolve(expectedCategories)
    };
    const useCase = new RetrieveCategoriesUseCase(repository);

    // When
    const categories = await useCase.execute();

    // Then
    expect(categories).toEqual(expectedCategories);
  });

});
