module.exports = {
  root: true,
  env: { // Added environment configuration
    browser: true,
    es2017: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [ // Added overrides for .d.ts files
    {
      files: ['*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};