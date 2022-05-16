import { RepositoriesConfiguration } from '@env/repositories-configuration';

export const environment = {
  production: true,
  serverUrl: 'https://fr.openfoodfacts.org',
  categoryRepositoryConfig: RepositoriesConfiguration.HTTP
};
