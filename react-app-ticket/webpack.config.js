const path  = require('path');
module.exports = {
    entry:"./src/main.js",
    output:{
        filename:'bundle.js',
        publicPath:'xuni'
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[path.resolve(__dirname,"./src")],
                exclude:[path.resolve(__dirname,"./node_modules")],
                loader:"babel-loader",
                options:{
                    presets:['react','env'],
                    plugins:['transform-object-rest-spread','transform-runtime']
                }
            },
            {
                test: /\.svg$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                     {
                        loader: 'url-loader',
                        options: {
                        limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
}