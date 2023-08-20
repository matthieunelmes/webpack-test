module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                additionalData: "$env-color: " + process.env.ENV_COlOR + ";",
              },
            },
          ],
        },
      ],
    },
  };