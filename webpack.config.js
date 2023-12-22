const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      main: {
        import: "index.jsx",
      },
    },
    resolve: {
      extensions: [".js", ".jsx"],
      mainFields: ["browser", "main", "module"],
      modules: ["node_modules", "src"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    devServer: {
      static: "./dist",
      hot: true,
      port: 3000,
      historyApiFallback: true,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
    },
    target: "web",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        chunks: ["main"],
        publicPath: env.WEBPACK_SERVE === true ? "/" : "/react-sidenav/",
        template: "assets/index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
};
