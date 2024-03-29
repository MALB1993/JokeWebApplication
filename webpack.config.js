//=================================================> define const path
const path = require('path');
//=================================================> define const html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : {
        bundle : path.resolve(__dirname, 'src/index.js')
    },

    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name][contenthash].js',
        clean : true,
        assetModuleFilename: '[name][ext]'
    },
    devtool : 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "assets/"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : "Joke WebApplication",
            filename : 'index.html',
            template : 'src/template.html'
        })
    ],
    devServer : {
        static : {
            directory : path.resolve(__dirname, 'dist')
        },
        port : 3000,
        open : true,
        hot : true, 
        compress : true,
        historyApiFallback : true
    },
};