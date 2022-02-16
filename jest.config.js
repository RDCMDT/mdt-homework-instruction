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
  }
};

module.exports = config;

// Or async function
// module.exports = async () => {
//   return {
//     verbose: true,
//   };
// };