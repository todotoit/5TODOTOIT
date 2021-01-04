import { meta } from './meta'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'TODO',
    meta,
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/partials/reset.css', '@/assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/scroll.js' },
    { src: '~/plugins/text-animation.js' },
    { src: '~/plugins/vue-clickaway.js', ssr: false },
    { src: '~/plugins/move-dots.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Configure polyfills:
  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window
      }
    ]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    'nuxt-polyfill',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'lg',
        breakpoints: {
          xs: 360,
          sm: 600,
          md: 992,
          lg: Infinity
        }
      }
    ]
  ],

  styleResources: {
    scss: ['@/assets/styles/variables.scss', '@/assets/styles/typography.scss', '@/assets/styles/transitions.scss']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isServer, isClient }) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
        options: {
          /* ... */
        }
      })
    }
  }
}
