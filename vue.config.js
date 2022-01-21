/*
    https://medium.com/js-dojo/how-to-solve-vue-js-prod-build-assets-relative-path-problem-71f91138dd79

    '/vuevote' es el directorio relativo en IIS -> http://localhost/vuevote
    Hay que añadir el web.config
*/

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/vuevote/' : '/',
    assetsDir:'content',

    // css:{
    //     extract: {
    //         filename: '[name].fdo.css',
    //         chunkFilename: 'main-[name].fdo.css',
    //     },
    // }
    productionSourceMap:process.env.NODE_ENV === 'production',

    pluginOptions: {
      i18n: {
        locale: 'es',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableLegacy: false,
        runtimeOnly: false,
        compositionOnly: false,
        fullInstall: true,
      }
    }
}
