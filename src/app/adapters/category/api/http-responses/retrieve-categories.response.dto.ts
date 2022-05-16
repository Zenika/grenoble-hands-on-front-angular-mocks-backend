import { CategoryResponseDto } from '@adapters/category/api/http-responses/category.response.dto';

export interface RetrieveCategoriesResponseDto {
  count: number;
  tags: CategoryResponseDto[];
}

