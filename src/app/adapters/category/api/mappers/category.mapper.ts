import { Category } from '@domain/category/entities/category';
import { RetrieveCategoriesResponseDto } from '@adapters/category/api/http-responses/retrieve-categories.response.dto';
import { CategoryResponseDto } from '@adapters/category/api/http-responses/category.response.dto';

export class CategoryMapper {

  static toCategories(retrieveCategoriesResponseDto: RetrieveCategoriesResponseDto): Category[] {
    return retrieveCategoriesResponseDto.tags.map(CategoryMapper.toCategory);
  }

  static toCategory(categoryResponseDto: CategoryResponseDto): Category {
    return {
      id: categoryResponseDto.id,
      name: categoryResponseDto.name
    }
  }

}
