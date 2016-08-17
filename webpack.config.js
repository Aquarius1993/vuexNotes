module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  // 服务器配置相关  自动刷新
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
          test: /\.(png|jsp|gif)$/,
          loader: 'url-loader?limit=8192'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
