const { dependencies } = require('./package.json');

module.exports = {
  name: 'uiKit',
  exposes: {
    './Header': './src/components/Header/Header',
  },
  filename: 'uiKitRemoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
