module.exports = {
  extends: ["airbnb-typescript"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-mutable-exports': 0,
    quotes: ['error', 'single']
  },
  env: {
    "browser": true,
  },
  globals: {
    __DEV__: true,
  }
}
