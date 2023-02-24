module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: false,

  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3003,
  },
  output: {
    publicPath: "http://localhost:3003/",
    library: {
      name: "counter",
      type: "umd",
    },
  },
};

/*
module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: path.join(__dirname, 'dist'),
    port: 9002,
  },
  output: {
    publicPath: 'http://localhost:9002/',
    library: {
      type: "umd",
      name: "app2"
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm']
  },
  externals: {react: "react"},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

*/
