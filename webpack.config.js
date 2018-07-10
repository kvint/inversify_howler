const path = require("path");
const webpack = require("webpack");
const tsLoader = 'awesome-typescript-loader';
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "none",
    entry: `${__dirname}/src/index.ts`,
    output: {
        path: path.resolve(__dirname, "bin/"),
        publicPath: "/",
        filename: `[name].js`
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new WebpackOnBuildFinishPlugin((stats) => {
            const { errors } = stats.compilation;
            console.log(errors);
        }),
        new CopyWebpackPlugin([
            {from: `template/`}
        ])
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
                exclude: /node_modules\/reflect-metadata/
            },
            {
                test: /\.ts$/,
                loader: tsLoader,                
                exclude: /node_modules/
            }
        ]
    }
};


function WebpackOnBuildFinishPlugin(callback) {
    this.callback = callback;
}

WebpackOnBuildFinishPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', this.callback);
};