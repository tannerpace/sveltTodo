module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['svelte3', 'simple-import-sort'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  ignorePatterns: [".eslintrc.js", "vite.config.js"],
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    'prettier/prettier': 'error',
    'svelte3/no-unknown-event-handlers': 'error',
    'svelte3/no-unknown-interfaces': 'error',
    'svelte3/no-unknown-lifecycle-hooks': 'error',
    'svelte3/no-unknown-slot-attributes': 'error',
    'svelte3/no-unknown-slot-scopes': 'error',
    'svelte3/no-unknown-slot-bindings': 'error',
    'svelte3/no-unknown-slot-bindings-scope': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value-value-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value-value-value-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value-value-value-value-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value-value-value-value-value-value': 'error',
    'svelte3/no-unknown-slot-bindings-scope-attribute-value-value-value-value-value-value-value-value': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-import': {
        'configs': {
          'babel-preset-svelte3': {
            'svelte3': true
          },
          'babel-preset-react': {
            'react': true
          },
        },
      },
    },
  }
}
