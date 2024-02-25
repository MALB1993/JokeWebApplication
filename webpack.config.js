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
        clean : true
    },
    module : {
        rules: [
            {
                test: /\.scss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : "Joke WebApplication",
            filename : 'index.html',
            template : 'src/template.html'
        })
    ]
};