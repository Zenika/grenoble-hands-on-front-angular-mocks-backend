import { AllergenRepository } from '@domain/allergen/ports/allergen.repository';
import { Allergen } from '@domain/allergen/entities/allergen';

export class RetrieveAllergensUseCase {

  constructor(
    private readonly allergenRepository: AllergenRepository
  ) {
  }

  execute(): Promise<Allergen[]> {
    return this.allergenRepository.getAllergens();
  }

}
