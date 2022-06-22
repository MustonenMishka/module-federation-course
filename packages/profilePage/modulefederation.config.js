const { dependencies } = require('./package.json');

module.exports = {
  name: 'profilePage',
  exposes: {
    './ProfilePage': './src/pages/ProfilePage/ProfilePage',
  },
  filename: 'profilePageRemoteEntry.js',
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
