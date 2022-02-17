// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  // transform: {
  //   "^.+\\.svg$": "jest-svg-transformer"
  // },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    // '^.+\\.(css|less|scss)$': '<rootDir>/config/CSSStub.js',
    '\\.(css|less|scss)$': '<rootDir>/test/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/fileMock.js',
  },
  collectCoverage: true,
  roots: [
    "<rootDir>/test",
    "<rootDir>/src"
  ],
  testRegex: "((\\.|/*.)(test))\\.js?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverageFrom: [
    "src/pages/**",
    "src/components/**",
    "src/App.js",
  ],
};

module.exports = config;

// Or async function
// module.exports = async () => {
//   return {
//     verbose: true,
//   };
// };