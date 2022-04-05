const path = require("path")

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["sass-loader", "css-loader", "style-loader"],
                include: path.resolve(__dirname, "../")
            }
        ]
    }
}
