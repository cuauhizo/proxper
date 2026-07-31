<script setup>
  import { useHead } from '@vueuse/head'
  import Hero from '@/components/hero.vue'
  import Productos from '@/components/productos.vue'
  import Nosotros from '@/components/nosotros.vue'

  useHead({
    title: 'Proxper | Seguridad financiera',
    meta: [
      { name: 'description', content: 'Descubre Proxper Asesores, expertos en seguridad financiera en México. Protege el patrimonio de tu familia con seguros de vida, gastos médicos y ahorro.' },
      { name: 'keywords', content: 'Proxper, Asesores financieros en CDMX, Seguros Monterrey en Ciudad de México, Seguridad financiera México, Asesores financieros CDMX, Promotoría de seguros, Seguros de vida, Seguros de gastos médicos' },

      // --- FACEBOOK, LINKEDIN, WHATSAPP (Open Graph) ---
      { property: 'og:title', content: 'Proxper | Seguridad financiera' },
      { property: 'og:description', content: 'Descubre Proxper Asesores, expertos en seguridad financiera en México. Protege el patrimonio de tu familia con seguros de vida, gastos médicos y ahorro.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://proxper.com.mx/' },
      { property: 'og:image', content: 'https://proxper.com.mx/proxper.png' },
      { property: 'og:image:secure_url', content: 'https://proxper.com.mx/proxper.png' },
      { property: 'og:image:type', content: 'image/png' },
      // Definir las dimensiones le dice a las redes el tamaño exacto antes de descargarla (Evita el lag en WhatsApp)
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Proxper | Seguridad financiera' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Proxper | Seguridad financiera' },
      { name: 'twitter:description', content: 'Descubre Proxper Asesores, expertos en seguridad financiera en México. Protege el patrimonio de tu familia con seguros de vida, gastos médicos y ahorro.' },
      { name: 'twitter:image', content: 'https://proxper.com.mx/proxper.png' },
      { name: 'twitter:url', content: 'https://proxper.com.mx/' },
    ],
  })
</script>

<template>
  <Hero />
  <Productos />
  <Nosotros />
</template>
