const { join } = require('path');

module.exports = {
  rules: {
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tests/**/*.{js,jsx}', 'tools/**/*.{js,jsx}'],
        packageDir: [__dirname, join(__dirname, '../')],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['onClick', 'routerProps'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jest/prefer-expect-assertions': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe'],
      },
    ],
  },
};
