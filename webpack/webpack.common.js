const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  resolve: {
        extensions: ['.js', '.jsx'],
    },
  module: {
    rules: [
         {
         // should use babel-loader for all ts js tsx and jsx files
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                 loader: 'babel-loader',
               },
            ],
         },
         {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpg|jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
      }
    ],
  },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: '[name].[chunkhash].js',
    },
plugins: [
   new HtmlWebpackPlugin({
     template: path.resolve(__dirname, "..", "./src/index.html")
   })
 ],

}