module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    camelcase: [0],
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/extensions': [0],
    'import/order': ['error', {
      groups: [
        ['external', 'builtin'],
        ['internal', 'index', 'sibling', 'parent'],
      ],
      'newlines-between': 'always',
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/no-v-html': [0],
    'vue/multi-word-component-names': ['error', {
      ignores: ['Zendesk'],
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
