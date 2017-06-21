module.exports = {
    entry: [
        './public/scripts/search.js'
    ],
    output:{
        path:__dirname,
        filename:'blob.js'
    },
    module: {
        loader:[{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};