module.exports = {
  "package-specs": {
    module: "es6",
  },
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,jsx,tsx,ts}", "!**/node_modules/**"],
};
