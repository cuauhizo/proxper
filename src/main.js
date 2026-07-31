import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
import { createGtm } from '@gtm-support/vue-gtm'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes, // Pasamos las rutas del router
    // Puedes configurar la base de la URL si es necesario
    // base: import.meta.env.BASE_URL,
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Instalar plugins de Vue como Vue Router
    app.use(router)

    // Todo lo que interactúa con el DOM (Navegador) debe ir dentro de isClient
    if (isClient) {
      // 1. Inicializamos animaciones
      AOS.init({
        once: true, // Opcional: para que la animación solo ocurra una vez
      })

      // 2. Inicializamos Google Tag Manager de forma profesional
      app.use(
        createGtm({
          id: 'GTM-579ZSH9K', // REEMPLAZA CON EL ID REAL DE TU CONTENEDOR DE GTM
          defer: false,
          compatibility: false,
          // import.meta.env.PROD asegura que GTM solo se active cuando subas a producción (VPS),
          // evitando que tus pruebas locales ensucien las métricas.
          enabled: import.meta.env.PROD,
          debug: false,
          loadScript: true,
          vueRouter: router, // Magia pura: mide automáticamente si cambia de ruta
          trackOnNextTick: false,
        }),
      )
    }
  },
)
