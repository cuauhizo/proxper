import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
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

    // Puedes mover la inicialización de AOS aquí, o en un componente de nivel superior como App.vue
    if (isClient) {
      AOS.init()
    }

    // Si tenías lógica para scroll o sección activa, considérala moverla.
    // La lógica actual en tu main.js de desplazamiento y sección activa podría requerir refactorización.
    // Idealmente, la gestión de secciones activas y desplazamiento debería estar en un componente o un hook de Vue.
    // Aquí un ejemplo muy básico de cómo integrar la lógica de AOS:
    if (isClient) {
      AOS.init({
        // tus opciones de AOS
      })
    }
  },
)
