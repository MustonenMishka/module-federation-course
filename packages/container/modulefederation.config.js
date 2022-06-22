const { dependencies } = require('./package.json');

module.exports = {
  name: 'container',
  remotes: {
    uiKit: 'uiKit@http://localhost:3001/uiKitRemoteEntry.js',
    postsPage: 'postsPage@http://localhost:3002/postsPageRemoteEntry.js',
    profilePage: 'profilePage@http://localhost:3003/profilePageRemoteEntry.js',
    authService: 'authService@http://localhost:3004/authServiceRemoteEntry.js',
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
