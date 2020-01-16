module.exports = {
  extends: [
    'plugin:unicorn/recommended',
    'standard',
    'prettier',
    'prettier/standard',
    'prettier/unicorn'
  ],
  plugins: [
    'unicorn',
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false
      }
    ],
    'unicorn/catch-error-name': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/number-literal-case': 'off'
  }
}
