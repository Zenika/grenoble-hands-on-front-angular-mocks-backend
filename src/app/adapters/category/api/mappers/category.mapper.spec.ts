import { Category } from '@domain/category/entities/category';
import { RetrieveCategoriesResponseDto } from '@adapters/category/api/http-responses/retrieve-categories.response.dto';
import { CategoryMapper } from '@adapters/category/api/mappers/category.mapper';

describe(`CountryMapper`, () => {

  it('Should map categories response dto to categories', () => {
    const expectedCategories: Category[] = [
      { id: 'en:plant-based-foods-and-beverages', name: 'Aliments et boissons à base de végétaux' },
      { id: 'en:fishes', name: 'Poissons' }
    ];
    const retrieveCategoriesResponseDto: RetrieveCategoriesResponseDto = {
      count: 2,
      tags: [
        { "id": "en:plant-based-foods-and-beverages", "known": 1, "name":"Aliments et boissons à base de végétaux", "products": 297048, "url": "https://world.openfoodfacts.org/category/plant-based-foods-and-beverages" },
        { "id": "en:fishes", "known": 1, "name":"Poissons", "products": 259040, "url": "https://world.openfoodfacts.org/category/fishes" }
      ]
    } as RetrieveCategoriesResponseDto;

    const categories: Category[] = CategoryMapper.toCategories(retrieveCategoriesResponseDto);

    expect(categories).toEqual(expectedCategories);
  });

});
