import { InjectionToken, NgModule } from '@angular/core';
import { HttpClient } from '@adapters/http-client';
import { HttpClient as AngularHttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';
import { CategoryRepository } from '@domain/category/ports/category.repository';
import { RetrieveCategoriesUseCase } from '@domain/category/usecases/retrieve-categories/retrieve-categories.usecase';
import { CategoryApiRepository } from '@adapters/category/api/category.api.repository';
import { environment } from '@env/environment';
import { RepositoriesConfiguration } from '@env/repositories-configuration';
import { CategoryInMemoryRepository } from '@adapters/category/in-memory/category.in-memory.repository';
import { AllergenRepository } from '@domain/allergen/ports/allergen.repository';
import { AllergenInMemoryRepository } from '@adapters/allergen/in-memory/allergen.in-memory.repository';
import { RetrieveAllergensUseCase } from '@domain/allergen/usecases/retrieve-allergens/retrieve-allergens.usecase';

export const IHttpClient = new InjectionToken<HttpClient>('HttpClient');
export const ICategoryRepository = new InjectionToken<CategoryRepository>('CategoryRepository');
export const IAllergenRepository = new InjectionToken<AllergenRepository>('AllergenRepository');

@NgModule({
  providers: [
    {
      provide: IHttpClient,
      deps: [AngularHttpClient],
      useFactory: (httpClient: AngularHttpClient): HttpClient => ({
        get<T>(url: string): Promise<T> {
          return firstValueFrom(httpClient.get<T>(url));
        }
      })
    },
    {
      provide: ICategoryRepository,
      deps: [IHttpClient],
      useFactory: (httpClient: HttpClient) => {
        switch (environment.categoryRepositoryConfig) {
          case RepositoriesConfiguration.HTTP:
            return new CategoryApiRepository(httpClient);
          case RepositoriesConfiguration.LOCAL:
            return new CategoryInMemoryRepository();
          default:
            throw new Error(`Unknown value for the repository configuration "${environment.categoryRepositoryConfig}"`);
        }
      }
    },
    {
      provide: RetrieveCategoriesUseCase,
      deps: [ICategoryRepository],
      useFactory: (categoryRepository: CategoryRepository) => {
        return new RetrieveCategoriesUseCase(categoryRepository)
      }
    },
    {
      provide: IAllergenRepository,
      useFactory: () => {
        return new AllergenInMemoryRepository();
      }
    },
    {
      provide: RetrieveAllergensUseCase,
      deps: [IAllergenRepository],
      useFactory: (allergenRepository: AllergenRepository) => {
        return new RetrieveAllergensUseCase(allergenRepository);
      }
    }
  ]
})
export class CoreModule {
}
