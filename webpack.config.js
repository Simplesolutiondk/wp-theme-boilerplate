const path = require('path');
module.exports = {
    entry: './assets/js/app.js',
    output: {
        filename: 'build.scripts.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    mode: 'development'
}