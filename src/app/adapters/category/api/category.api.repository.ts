import { CategoryRepository } from '@domain/category/ports/category.repository';
import { Category } from '@domain/category/entities/category';
import { HttpClient } from '@adapters/http-client';
import { RetrieveCategoriesResponseDto } from '@adapters/category/api/http-responses/retrieve-categories.response.dto';
import { CategoryMapper } from '@adapters/category/api/mappers/category.mapper';
import { environment } from '@env/environment';

export class CategoryApiRepository implements CategoryRepository {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getCategories(): Promise<Category[]> {
    return this.httpClient.get<RetrieveCategoriesResponseDto>(`${environment.serverUrl}/categories.json`)
      .then(CategoryMapper.toCategories);
  }

}
