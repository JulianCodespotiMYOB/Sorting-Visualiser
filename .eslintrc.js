module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'max-len': [0],
    'no-param-reassign': [0],
    'linebreak-style': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
