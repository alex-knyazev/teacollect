module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: '',
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
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
  },
};
