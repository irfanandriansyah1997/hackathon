module.exports = {
  ...require('./etc/jest/jest.common'),
  collectCoverageFrom: [
    '!src/*.svg',
    '!src/*.scss',
    '!src/*.less',
    '!**/__mocks__/*.{js}',
    'src/**/*.{js}',
    '!src/**/*.mock.{js}',
    '!src/**/*.constant.{js}',
  ],
  projects: ['./etc/jest/jest.lint.js', './etc/jest/jest.client.js'],
};
