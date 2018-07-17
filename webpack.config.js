const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
 mode: 'development',
 entry: './src/index.js',
 output: {
   path: path.resolve(__dirname, './public/dist'),
   filename: 'bundle.js'
 },
 module: {
   rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
   new VueLoaderPlugin()
 ],
 devServer: {
   historyApiFallback: true,
   noInfo: true,
   overlay: true,
   port: 3000,
   contentBase: path.resolve('public')
 },
 watch: true
};
