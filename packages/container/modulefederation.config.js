const { dependencies } = require('./package.json');

module.exports = {
  name: 'container',
  remotes: {
    uiKit: 'uiKit@http://localhost:3001/uiKitRemoteEntry.js',
  },
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
