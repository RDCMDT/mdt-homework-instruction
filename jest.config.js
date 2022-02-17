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
  ]
};

module.exports = config;

// Or async function
// module.exports = async () => {
//   return {
//     verbose: true,
//   };
// };