module.exports = (wallaby) => ({
  files: [
    'src/**/*.js?(x)',
    'src/**/*.ts?(x)',
    'spec/jest/**/*.snap',
    { pattern: 'spec/jest/**/!(*-spec)', instrument: false, load: true },
    { pattern: 'package.json', instrument: false, load: true },
    { pattern: 'tsconfig.json', instrument: false, load: true }
  ],

  tests: [
    'spec/jest/**/*-spec.ts?(x)'
  ],

  env: {
    type: 'node',
    runner: 'node'
  },

  testFramework: 'jest',

  compilers: {
    '**/*.ts?(x)': wallaby.compilers.typeScript()
  },

  debug: true
});