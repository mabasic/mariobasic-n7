const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    start: { import: './resources/js/Start.fs.js', filename: '[name].js' },
    main: { import: './resources/js/Main.fs.js', filename: '[name].js' },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.eot|.svg|.ttf|.woff|.woff2/,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"]
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
}
