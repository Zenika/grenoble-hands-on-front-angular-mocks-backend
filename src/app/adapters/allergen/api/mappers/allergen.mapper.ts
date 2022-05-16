import { Category } from '@domain/category/entities/category';
import { RetrieveAllergensResponseDto } from '@adapters/allergen/api/http-responses/retrieve-allergens.response.dto';
import { Allergen } from '@domain/allergen/entities/allergen';
import { AllergenResponseDto } from '@adapters/allergen/api/http-responses/allergen.response.dto';

export class AllergenMapper {

  static toAllergens(retrieveAllergensResponseDto: RetrieveAllergensResponseDto): Allergen[] {
    return retrieveAllergensResponseDto.tags.map(AllergenMapper.toAllergen);
  }

  static toAllergen(allergenResponseDto: AllergenResponseDto): Category {
    return {
      id: allergenResponseDto.id,
      name: allergenResponseDto.name
    }
  }

}
