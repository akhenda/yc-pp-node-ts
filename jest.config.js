const { join } = require('node:path');
const { pathsToModuleNameMapper } = require('ts-jest');

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/jest.config.js',
    '!**/jest.config.ts',
    '!**/jest.setup.js',
    '!**/jest.setup.ts',
    '!**/.eslintrc.js',
    '!**/.prettierrc.js',
    '!**/changelog.config.js',
    '!**/commitlint.config.js',
    '!**/.history/**',
  ],
  setupFilesAfterEnv: ['jest-extended/all'],

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  coverageReporters: ['json-summary', 'text', 'lcov', 'json', 'html', 'text-summary'],
  coverageThreshold: {
    global: {
      lines: 10,
    },
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
};

module.exports = config;
