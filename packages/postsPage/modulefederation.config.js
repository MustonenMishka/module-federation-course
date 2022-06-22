const { dependencies } = require('./package.json');

module.exports = {
  name: 'postsPage',
  exposes: {
    './PostsPage': './src/pages/PostsPage/PostsPage',
  },
  filename: 'postsPageRemoteEntry.js',
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
