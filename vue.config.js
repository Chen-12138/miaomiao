module.exports = {
    publicPath : '/miaomiao',
    devServer : {
        proxy : {
            '/ajax' : {
                target : 'http://m.maoyan.com',
                changeOrign : true
            }
        }
    }
}