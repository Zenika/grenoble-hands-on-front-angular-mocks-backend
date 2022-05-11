// Jest configuration file, see link for more information
// https://thymikee.github.io/jest-preset-angular/docs/

module.exports = {
  preset: 'jest-preset-angular',
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
  moduleNameMapper: {
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@adapters/(.*)$": "<rootDir>/src/app/adapters/$1",
    "^@core/(.*)$": "<rootDir>/src/app/core/$1",
    "^@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "^@views/(.*)$": "<rootDir>/src/app/views/$1",
    "^@env/(.*)$": "<rootDir>/src/environments/$1"
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.module.ts',
    '!<rootDir>/src/environments/**'
  ]
};
