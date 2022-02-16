module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    resolve: { extensions: ['', '.js', '.jsx','.css'],//add '.css' "root": __dirname }
    // test: /\.css$/, loader: "style-loader!css-loader"
}