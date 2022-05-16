import { CategoryRepository } from '@domain/category/ports/category.repository';
import { Category } from '@domain/category/entities/category';

export class RetrieveCategoriesUseCase {

  constructor(
    private readonly categoryRepository: CategoryRepository
  ) {
  }

  execute(): Promise<Category[]> {
    return this.categoryRepository.getCategories();
  }

}
