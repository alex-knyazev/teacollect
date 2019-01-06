module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'const/prefer-default-export': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'max-len': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'arrow-body-style': 'off',
  },
};
