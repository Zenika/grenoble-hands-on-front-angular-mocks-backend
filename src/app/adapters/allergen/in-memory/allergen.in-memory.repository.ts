import { AllergenRepository } from '@domain/allergen/ports/allergen.repository';
import { Allergen } from '@domain/allergen/entities/allergen';

export class AllergenInMemoryRepository implements AllergenRepository {
  allergens: Allergen[] = [
    { id: 'en:milk', name: 'Lait' },
    { id: 'en:gluten', name: 'Gluten' }
  ];

  getAllergens(): Promise<Allergen[]> {
    return Promise.resolve(this.allergens);
  }

}
