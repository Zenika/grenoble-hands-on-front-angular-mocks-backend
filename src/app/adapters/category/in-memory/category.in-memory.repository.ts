import { CategoryRepository } from '@domain/category/ports/category.repository';
import { Category } from '@domain/category/entities/category';

export class CategoryInMemoryRepository implements CategoryRepository {
  private categories: Category[] = [
    { id: 'en:plant-based-foods-and-beverages', name: 'Aliments et boissons à base de végétaux' },
    { id: 'en:meats', name: 'Viandes' },
    { id: 'en:meals', name: 'Plats préparés' },
    { id: 'en:fruits-based-foods', name: 'Fruits et produits dérivés' }
  ]

  getCategories(): Promise<Category[]> {
    return Promise.resolve(this.categories);
  }

}
