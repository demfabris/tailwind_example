module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  moduleNameMapper: {
    '^components$': '<rootDir>/components',
    '^hooks$': '<rootDir>/hooks',
    '^store$': '<rootDir>/store',
    '^services$': '<rootDir>/services',
    '^styles$': '<rootDir>/styles'
  },
  modulePathIgnorePatterns: ['<rootDir>/__tests__/setupTests.tsx'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json'
    }
  }
}
