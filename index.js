module.exports = {
  plugins: ['prettier', 'better-styled-components'],
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  globals: {
    document: true,
    describe: true,
    window: true,
    expect: true,
    render: true,
    React: true,
    test: true,
    it: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 2,
    'react/jsx-filename-extension': 0,
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'comma-dangle': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
    'max-len': [
      'error',
      {
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
        comments: 100,
        code: 80,
      },
    ],
  },
};
