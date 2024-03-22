const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), // Ścieżka do katalogu docelowego dla plików wynikowych
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Rozszerzenia obsługiwanych plików graficznych
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Nazwa wynikowego pliku - oryginalna nazwa z rozszerzeniem
              outputPath: 'img/', // Ścieżka do katalogu docelowego dla plików wynikowych
              publicPath: 'img/' // Ścieżka publiczna dla plików wynikowych
            }
          }
        ]   
    },
    {
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'video/',
            publicPath: 'video/'
          }
        }
      ]
    }

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'src'),
      },
    compress: true,
    port: 9000,
    open: true,
  },
};
