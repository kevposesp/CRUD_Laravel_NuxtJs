export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "NUXT 3 CRUD Application",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'NUXT 3 CRUD Application meta desc' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        },
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.slim.min.js' },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        }
      ]
    }
  },
  // modules: [[
  //   '@pinia/nuxt',
  //   {
  //     autoImports: ['defineStore', 'acceptHMTUpdate']
  //   }
  // ]],
  // imports: {
  //   dirs: ['store']
  // }
  modules: [
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**', './stores/**'],
  },
})
