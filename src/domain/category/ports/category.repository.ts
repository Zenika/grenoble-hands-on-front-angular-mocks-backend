import { Category } from '@domain/category/entities/category';

export interface CategoryRepository {
  getCategories(): Promise<Category[]>;
}
