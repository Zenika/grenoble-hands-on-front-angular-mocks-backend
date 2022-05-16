import { AllergenRepository } from '@domain/allergen/ports/allergen.repository';
import { HttpClient } from '@adapters/http-client';
import { environment } from '@env/environment';
import { Allergen } from '@domain/allergen/entities/allergen';
import { RetrieveAllergensResponseDto } from '@adapters/allergen/api/http-responses/retrieve-allergens.response.dto';
import { AllergenMapper } from '@adapters/allergen/api/mappers/allergen.mapper';

export class AllergenApiRepository implements AllergenRepository {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getAllergens(): Promise<Allergen[]> {
    return this.httpClient.get<RetrieveAllergensResponseDto>(`${environment.serverUrl}/allergens.json`)
      .then(AllergenMapper.toAllergens);
  }

}
