
/*
    https://medium.com/js-dojo/how-to-solve-vue-js-prod-build-assets-relative-path-problem-71f91138dd79


    '/vuevote' es el directorio relativo en IIS -> http://localhost/vuevote
    Hay que añadir el web.config
*/

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/vuevote' : '/',

    // css: {
    //     extract: {
    //       filename: 'css/[name].css',
    //       chunkFilename: 'css/main-[name].css',
    //     },
    //   }

  };