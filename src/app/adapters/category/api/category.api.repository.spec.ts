import { Category } from '@domain/category/entities/category';
import { HttpClient } from '@adapters/http-client';
import { RetrieveCategoriesResponseDto } from '@adapters/category/api/http-responses/retrieve-categories.response.dto';
import { CategoryApiRepository } from '@adapters/category/api/category.api.repository';

describe('CategoryApiRepository', () => {

  it('Should get categories', async () => {
    // Given
    const expectedCategories: Category[] = [
      { id: 'en:plant-based-foods-and-beverages', name: 'Aliments et boissons à base de végétaux' },
      { id: 'en:fishes', name: 'Poissons' }
    ];
    const httpClient: HttpClient = {
      get(url: string): Promise<RetrieveCategoriesResponseDto> {
        expect(url).toBe(`/categories.json`)
        const response: RetrieveCategoriesResponseDto = {
          count: 2,
          tags: [
            { "id": "en:plant-based-foods-and-beverages", "known": 1, "name":"Aliments et boissons à base de végétaux", "products": 297048, "url": "https://world.openfoodfacts.org/category/plant-based-foods-and-beverages" },
            { "id": "en:fishes", "known": 1, "name":"Poissons", "products": 259040, "url": "https://world.openfoodfacts.org/category/fishes" }
          ]
        }
        return Promise.resolve(response)
      }
    } as HttpClient;
    const repository = new CategoryApiRepository(httpClient);

    // When
    const categories = await repository.getCategories();

    // Then
    expect(expectedCategories).toEqual(categories);
  });

});
