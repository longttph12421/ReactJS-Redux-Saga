module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      semi: ['error', 'always'],
    },
  };