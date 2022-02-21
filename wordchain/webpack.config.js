module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    inline: false,
    contentBase: './dist',
  },

  entry: {
    app: ['/client'],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'app.js',
  }, // 출력
};
