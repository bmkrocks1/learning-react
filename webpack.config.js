const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/asset'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader?presets[]=env,presets[]=stage-0,presets[]=react']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     warnings: false,
        //     mangle: true
        // }),
        // Generates dist/index.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            inject: 'body'
        })
    ],

    devServer: {
        port: 9000
    }
};