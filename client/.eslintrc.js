const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'no-unused-vars': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  // plugins: ['react', 'import', 'jsx-a11y'],
  globals: {
    /* Объекты окружения в браузере */
    window: true,
    browser: true,
    document: true,
    fetch: true,
    serviceworker: true,
  },
  settings: {
    // поддержка aliases
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/webpack.config.js'),
      },
    },
  },
  plugins: ['graphql'],
};
