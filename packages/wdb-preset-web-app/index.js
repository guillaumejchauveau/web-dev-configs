module.exports = {
  syntaxes: {
    js: {
      extensions: ['js']
    },
    css: {
      extensions: ['css']
    },
    scss: {
      extensions: ['scss']
    },
    html: {
      extensions: ['html']
    },
    pug: {
      extensions: ['pug']
    }
  },
  paths: {
    output: {
      path: '{root}/build',
      publicPath: './'
    },
    files: [
      {
        syntaxes: ['js'],
        src: '{root}/src/js',
        output: 'js/[name].js'
      },
      {
        syntaxes: ['css', 'scss'],
        src: '{root}/src/css',
        output: 'css/[name].css',
      },
      {
        syntaxes: ['html', 'pug'],
        src: '{root}/src',
        output: '[name].html'
      }
    ],
    staticCopy: {
      src: '{root}/src/static',
      output: '{root}/build'
    },
    img: {
      extensions: ['png', 'jpg', 'gif', 'svg'],
      src: '{root}/src/img',
      output: 'img/[path][name].[ext]',
      publicPath: './',
      embeddedMaxSize: 5000
    },
    font: {
      extensions: ['woff', 'woff2', 'eot', 'ttf', 'otf'],
      src: '{root}/src/font',
      output: 'font/[path][name].[ext]',
      publicPath: './',
      embeddedMaxSize: 5000
    }
  },
  optimize: {
    minimize: true,
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    },
    htmlminifier: {
      caseSensitive: false,
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      quoteCharacter: '"',
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: false,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    },
    imagemin: {
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3
      },
      jpegtran: {
        progressive: true
      },
      optipng: {
        optimizationLevel: 5
      }
    }
  },
  babelLoader: {
    presets: ['@guillaumejchauveau/web-app']
  },
  postCSSLoader: {
    config: {
      path: __dirname
    }
  },
  htmlLoader: {
    attrs: ['img:src']
  },
  sassLoader: require('@guillaumejchauveau/node-sass-config'),
  pugHTMLLoader: {}
}
