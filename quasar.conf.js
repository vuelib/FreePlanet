// Configuration for your app

const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack')
const envparser = require('./config/envparser')


const extendTypescriptToWebpack = (config) => {
  config.resolve
    .extensions
    .add('.ts', '.js', '.vue')
  config.resolve
    .alias
    .set('@components', helpers.root('src/components/index.ts'))
    // .set('@components', helpers.root('src/components'))
    .set('@views', helpers.root('src/components/views/index.ts'))
    // .set('@views', helpers.root('src/components/views'))
    .set('@src', helpers.root('src'))
    .set('@css', helpers.root('src/assets/css/*'))
    .set('@icons', helpers.root('src/statics/icons/*'))
    .set('@images', helpers.root('src/assets/images/*'))
    .set('@classes', helpers.root('src/classes/index.ts'))
    .set('@utils', helpers.root('src/utils/index.ts'))
    .set('@utils', helpers.root('src/utils/*'))
    .set('@router', helpers.root('src/router/index.ts'))
    .set('@validators', helpers.root('src/utils/validators.ts'))
    .set('@api', helpers.root('src/store/Api/index.ts'))
    .set('@paths', helpers.root('src/store/Api/ApiRoutes.ts'))
    .set('@types', helpers.root('src/typings/index.ts'))
    .set('@store', helpers.root('src/store/index.ts'))
    .set('@modules', helpers.root('src/store/Modules/index.ts'))
  config.module
    .rule('typescript')
    .test(/\.tsx?$/)
    .use('typescript')
    .loader('ts-loader')
    .options({
      appendTsSuffixTo: [/\.vue$/],
      onlyCompileBundledFiles: true
    })
};

const extendHTMLToWebpack = (config) => {
  config.resolve
    .extensions
    .add('.html');
  config.module
    .rule('html')
    .test(/\.html?$/)
    .use('html')
    .loader('vue-html-loader')
};

module.exports = function (ctx) {
  return {
    sourceFiles: {
      router: 'src/router/index.ts',
      store: 'src/store/index.ts'
    },
    // app plugins (/src/plugins)
    plugins: ['i18n', 'axios', 'vee-validate', 'myconfig', 'local-storage', 'error-handler', 'globalroutines', 'vue-idb', 'dragula'],
    css: [
      'app.styl'
    ],
    extras: [
      //ctx.theme.mat ?  : null,
      'roboto-font',
      'material-icons', // optional, you are not bound to it
      'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: false,
    build: {
      showProgress: true,
      env: envparser(),
      scopeHoisting: true,
      vueRouterMode: 'history',
      vueCompiler: true,
      gzip: false,   // gzip true
      analyze: false,  // true
      // extractCSS: false,
      chainWebpack(config) {
        extendTypescriptToWebpack(config);
        // extendHTMLToWebpack(config);
        config.resolve
          .alias
          .set('~', __dirname)
          .set('@', helpers.root('src'))
          // .set('env', helpers.root('config/helpers/env.js'))
        config.module
          .rule('template-engine')
          .test(/\.pug$/)
          .use('pug')
          .loader('pug-plain-loader')
        /*config.module
          .rule('template-engine')
          .test(/\.(gql|graphql)$/)
          .loader('graphql-tag/loader') */
      }
    },
    dev: {
      env: require('./.env.development'),
    },
    devServer: {
      https: false,
      port: 8080,
      open: false // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnDropdown',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemTile',
        'QItemSide',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardMedia',
        'QCardSeparator',
        'QCardActions',
        'QField',
        'QInput',
        'QSelect',
        'QPopover',
        'QToggle',
        'QFab',
        'QInfiniteScroll',
        'QAjaxBar',
        'QChip',
        'QCollapsible',
        'QCheckbox',
        'QAlert',
        'QInnerLoading',
        'QSpinnerGears',
        'QDatetime',
        'QSlideTransition',
        'QTable',
        'QTableColumns',
        'QTh',
        'QTr',
        'QSearch',
        'QTd',
        'QContextMenu',
        'QProgress',
        'QSlider',
        'QPopupEdit',
      ],
      directives: [
        'Ripple',
        'CloseOverlay',
      ],
      // Quasar plugins
      plugins: [
        'Meta',
        'Dialog',
        'Notify',
        'Cookies',
        'ActionSheet', 'Loading'
      ],
      iconSet: 'fontawesome',
      i18n: 'it', // Quasar language
    },
    animations: [],
    ssr: {
      pwa: {
        runtimeCaching: [
          {
            urlPattern: '/assets',
            handler: 'networkFirst'
          }
        ]
      }
    },
    pwa: {
      // runtimeCaching: [
      //   {
      //     urlPattern: '/assets',
      //     handler: 'networkFirst'
      //   }
      // ],

      // workboxPluginMode: 'GenerateSW',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc: 'src/sw.js',
      },
      manifest: {
        name: 'Free Planet',
        version: '0.0.14',
        short_name: 'freeplanet',
        description: 'Social project in order to connecting people each others (working in progress...)',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            'src': 'statics/icons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/android-chrome-512x512',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
  }
};
