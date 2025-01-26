// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxt/fonts',
    ],

    css: [
        '~/assets/css/global.css',
    ],

    fonts: {
        defaults: {         
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], 
        },
    },

    devtools: { 
        enabled: true,
        timeline: {
            enabled: true,
        },
    },

    compatibilityDate: '2024-11-01',
});
