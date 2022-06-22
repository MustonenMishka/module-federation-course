const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require('./package.json');

module.exports = {
    output: {
        publicPath: "http://localhost:3004/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    devServer: {
        port: 3004,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
        },
    },
    entry: './src/index',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "authService",
            filename: "authServiceRemoteEntry.js",
            remotes: {},
            exposes: {
                "./store": "./src/store/store",
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        })
    ],
};