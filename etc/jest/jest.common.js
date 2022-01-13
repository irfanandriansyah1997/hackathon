const path = require('path');

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/etc', '/__test__/'],
  moduleDirectories: ['node_modules', path.join(__dirname, '../../src'), path.join(__dirname)],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [],
  rootDir: path.join(__dirname, '../..'),
  setupFilesAfterEnv: ['<rootDir>/etc/jest/setup-jest.js'],
  transform: {
    '^.+\\.(js|jsx)$': `<rootDir>/etc/jest/jest-preprocess.js`,
  },
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-runner-eslint/watch-fix',
    'jest-watch-select-projects',
  ],
};
