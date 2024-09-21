// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',

    devtools: {
        enabled: true
    },

    typescript: {
        strict: false
    },

    /**
     * App config
     */
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },

    /**
     * Route config
     */
    routeRules: {
        '/': { prerender: true },
        '/*': { cors: false },
    },

    /**
     * Runtime Config
     */
    runtimeConfig: {
        API_URL: "http://127.0.0.1:4000",
        public: {
            API_URL: "http://127.0.0.1:4000"
        }
    },

    /**
     * Css Import
     */
    css: [
        '@/assets/styles/base.scss',
        '@/assets/styles/styles.scss',
        '@/assets/styles/custom.scss',
        '@/assets/styles/typography.scss',
    ],

    /**
     * Components config
     */
    components: [
        {
            path: '~/components',
            pathPrefix: false,  // Disabled path prefix for component
        },
    ],

    /**
     * Modules Import
     */
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],

    // module::pinia
    pinia: {
        storesDirs: [
            '~/stores/**',
            '#/stores/**',
            '@/stores/**'
        ],
    },

    plugins: ['~/plugins/pinia'],

    /**
     * Tailwind Config
     */
    tailwindcss: {
        cssPath: ["~/assets/styles/tailwind.css", { injectPosition: "first" }],
        configPath: 'tailwind.config',
        exposeConfig: false,
        viewer: true,
    },

    /**
     * Nitro Config
     */
    nitro: {
        // PreRender Server Side
        prerender: {
            routes: [], // Add static pages 
            ignore: [], // Exclude dynamic pages
        },
        // Api Docs
        experimental: {
            openAPI: true
            // URL : http://localhost:3000/_nitro/swagger
            // URL : http://localhost:3000/_nitro/openapi.json
        }
    },

    compatibilityDate: '2024-08-31'
})