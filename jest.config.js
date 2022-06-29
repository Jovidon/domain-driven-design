module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
