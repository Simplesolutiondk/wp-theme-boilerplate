const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './assets/js/app.jsx',
    output: {
        // Defines the name of the compiled file and where to output it. 
        filename: 'build.script.js',
        path: path.join(__dirname, 'dist/'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Defines the name of the compiled file and uses the "webpackOptions.output" to place the file.
            filename: 'build.style.css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.build.style\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
    ],
    module: {
        rules: [
            {
                // Converts all ES6, ES7, ES8, ES9 to ES5 for browser compatibility.
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings.
                    'style-loader',
                    // Extracts all CSS from the compiled .js file to .css.
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS.
                    'css-loader',
                    // Compiles SASS to CSS.
                    'sass-loader',
                ],
            }
        ]
    },
    mode: 'development'
}