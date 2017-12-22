// Const
const Uglify = require('uglifyjs-webpack-plugin');

// Exporting
module.exports = {
    entry: './index.js',
    output: {filename: 'xp-crypt.js', path: `${__dirname}/dist`},
    plugins: [new Uglify({uglifyOptions: {output: {comments: /^$/}}})],
    externals: {
        'expandjs': 'XP'
    }
};
