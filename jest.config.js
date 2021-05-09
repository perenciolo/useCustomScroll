const { defaults } = require("jest-config");

const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
  ],
  setupFiles: ["<rootDir>/config/setupTests.js"],
  testRegex: "((\\.|/*.)(spec|test))\\.[tj]sx?$",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  collectCoverage: true,
  coverageReporters: ["cobertura", "html", "lcov", "text-summary", "text"],
  collectCoverageFrom: [
    "<rootDir>/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/dist/**",
    "!<rootDir>/src/index.tsx",
  ],
  clearMocks: true,
  coverageDirectory: "coverage",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        outputDirectory: "./coverage/",
        outputName: "junit.xml",
        classNameTemplate: "{classname} - {title}",
        titleTemplate: "{classname} - {title}",
        ancestorSeparator: " > ",
        usePathForSuiteName: "true",
      },
    ],
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
};

module.exports = config;
