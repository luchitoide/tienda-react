const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtact = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    mode: 'development',
    resolve:{
        extensions: ['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            
        }
    },
    module:{
        rules:[
            { 
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
          // Creates `style` nodes from JS strings
                "style-loader",
          // Translates CSS into CommonJS
                "css-loader",
          // Compiles Sass to CSS
                "sass-loader",
        ],
            },
            {
                test: /\.(png|svg|webp|jp(e*)g|gif)$/,
                type:   'asset'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtact({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
}