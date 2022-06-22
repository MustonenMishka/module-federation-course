module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    window: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'linebreak-style': 'off',
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['default'],
        format: ['camelCase'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
      },
      {
        selector: ['variable'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        suffix: ['T'],
      },
      {
        selector: ['enum'],
        format: ['PascalCase'],
        suffix: ['Enum'],
      },
    ],
    'react/jsx-pascal-case': 'error',
    'react/destructuring-assignment': 'error',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'off',
    'import/no-default-export': 'warn',
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
