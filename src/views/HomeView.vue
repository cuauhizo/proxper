<script setup>
  import { useHead } from '@vueuse/head'
  import Hero from '@/components/hero.vue'
  import Productos from '@/components/productos.vue'
  import Nosotros from '@/components/nosotros.vue'

  useHead({
    title: 'Proxper | Seguridad financiera',
    meta: [
      { name: 'description', content: 'loreNon qui veniam eu deserunt enim.' },
      { name: 'keywords', content: 'Mollit consequat quis aliquip pariatur ullamco ullamco.' },

      // --- FACEBOOK, LINKEDIN, WHATSAPP (Open Graph) ---
      { property: 'og:title', content: 'Proxper | Seguridad financiera' },
      { property: 'og:description', content: 'Nisi et anim culpa Lorem.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://proxper.com.mx/' },
      { property: 'og:image', content: 'https://proxper.com.mx/proxper.png' },
      { property: 'og:image:secure_url', content: 'https://proxper.com.mx/proxper.png' },
      { property: 'og:image:type', content: 'image/png' },
      // Definir las dimensiones le dice a las redes el tamaño exacto antes de descargarla (Evita el lag en WhatsApp)
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Lorem impsum' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Proxper | Seguridad financiera' },
      { name: 'twitter:description', content: 'Qui culpa ex aute consectetur eiusmod incididunt reprehenderit nisi velit.' },
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
