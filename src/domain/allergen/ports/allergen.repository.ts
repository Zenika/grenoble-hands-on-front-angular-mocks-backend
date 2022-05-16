import { Allergen } from '@domain/allergen/entities/allergen';

export interface AllergenRepository {
  getAllergens(): Promise<Allergen[]>;
}
