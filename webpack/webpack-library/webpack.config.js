var path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'webapck-numbers.js',
        library:'yyztest-library',
    },
    externals:{
        lodash:{
            commonjs:'loadsh',
            commonjs2:'loadsh',
            amd:'lodash',
            root:'_'
        }
    }
}