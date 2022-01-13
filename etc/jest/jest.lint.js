const { rootDir } = require('./jest.common');

module.exports = {
  displayName: 'lint',
  rootDir,
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/**/src/**/*.(js)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/dist/',
    '/public/',
    '/etc/',
    '/.cache/',
  ],
};
