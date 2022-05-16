import { RepositoriesConfiguration } from '@env/repositories-configuration';

export const environment = {
  production: false,
  serverUrl: 'http://localhost:3100',
  categoryRepositoryConfig: RepositoriesConfiguration.LOCAL
};
