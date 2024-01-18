// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  transpileDependencies: true,
  assetsDir: "assets",
  lintOnSave: false,
  publicPath: "/demo/df_vue",
  outputDir: "demo/df_vue",
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin({
  //       patterns: [
  //         {
  //           from: "src/assets",
  //           to: "./",  // 修改目标文件夹，这里是根目录
  //           globOptions: {
  //             ignore: ["**/*.js", "**/*.css"]  // 排除js和css文件，避免被webpack处理
  //           },
  //         },
  //       ],
  //     }),
  //   ],
  // },
};
