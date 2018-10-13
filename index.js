module.exports = {
  plugins: ['prettier', 'better-styled-components'],
  extends: ['airbnb', 'prettier'],
  globals: {
    document: true,
    describe: true,
    window: true,
    expect: true,
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
    'react/jsx-filename-extension': false,
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': false,
    'no-nested-ternary': 0,
    'comma-dangle': [2, 'always-multiline'],
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
