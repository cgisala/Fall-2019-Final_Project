module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:4000',
        overlay: {
            warnings: false,
            errors: false
        }
    }
}