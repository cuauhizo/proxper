<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Responsive from '@/components/responsive.vue';

  const anio = ref(new Date().getFullYear());
  const showScrollTopButton = ref(false);
  const activeSection = ref(null);
  const sectionIds = ['section1', 'section2', 'section3'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    showScrollTopButton.value = scrollTop > 0;

    // Detectar sección activa
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeSection.value = id;
          break;
        }
      }
    }
  };

  const cerrarMenu = () => {
    const checkbox = document.getElementById('menu');
    if (checkbox) checkbox.checked = false;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = index => {
    const element = document.getElementById(`section${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<template>
  <!-- Header -->
  <header>
    <div class="fixed z-30 w-full mt-5">
      <nav class="mx-6 bg-white shadow-md rounded-[24px] px-5 py-2 relative text-white">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex justify-start items-center gap-16">
            <a href="./">
              <img src="@/assets/img/proxper.png" alt="Logo proxper" class="w-full max-w-[117px]" width="117" loading="lazy" />
            </a>
            <div class="flex items-center justify-end gap-2 text-[14px]">
              <input type="checkbox" id="menu" class="peer hidden" />
              <label for="menu" class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
              <div class="fixed inset-0 bg-gradient-to-b from-white/20 to-[#3a3a82]/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
                <ul
                  class="absolute inset-x-0 top-24 p-10 items-center bg-white text-black text-[15px] w-[90%] mx-auto rounded-md h-max text-center grid gap-6 shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white md:shadow-none">
                  <li>
                    <a
                      href="#productos"
                      :class="['py-2 px-2 rounded-full text-black hover:bg-white hover:text-[#4B2A7E]', activeSection === 'section2' ? 'bg-white text-[#3a3a82]' : '']"
                      @click="
                        scrollToSection(2);
                        cerrarMenu();
                      ">
                      Nuestros productos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#nosotros"
                      @click="
                        scrollToSection(3);
                        cerrarMenu();
                      "
                      :class="['py-2 px-2 rounded-full text-black hover:bg-white hover:text-[#4B2A7E]', activeSection === 'section3' ? 'bg-white text-[#3a3a82]' : '']">
                      Sobre nosotros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex justify-end items-center">
            <a href="#" target="_blank" rel="noopener noreferrer" class="flex gap-2 rounded-full transition-all duration-500 justify-center items-center bg-[#1AB0DE] px-6 py-1.5 text-[15px]">
              Llámanos:
              <strong>55 3335 2073</strong>
            </a>
            <div class="static w-[218px]">
              <div class="fixed top-0.5">
                <img src="@/assets/img/ClubLogros.png" class="" alt="" width="218" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- Main -->
  <main>
    <router-view></router-view>
    <button class="btn-irArriba" @click="scrollToTop" v-show="showScrollTopButton" aria-label="Ir al inicio">
      <span class="sr-only">Ir Arriba</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </main>
  <!-- Footer -->
  <footer class="bg-[#4B2A7E] text-white mx-6 mb-6 rounded-[64px] py-10">
    <div class="container mx-auto px-4">
      <div class="pb-20">
        <div class="flex flex-wrap justify-between -m-4 items-center">
          <div class="w-full sm:w-1/2 p-4">
            <a class="inline-block" href="#"><img class="w-[117px]" src="@/assets/img/proxper_blanco.png" alt="" /></a>
          </div>
          <div class="w-full sm:w-1/2 p-4 sm:text-end">
            <span class="inline-flex gap-4 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a class="cursor-pointer" href="https://www.facebook.com/" alt="Facebook" target="_blank">
                <img src="@/assets/img/Facebook_white.png" alt="Facebook" width="32" />
              </a>
              <a class="cursor-pointer" href="https://www.linkedin.com/" alt="Linkedin" target="_blank">
                <img src="@/assets/img/LinkedIN_white.png" alt="Linkedin" width="32" />
              </a>
              <a class="cursor-pointer" href="https://x.com/" alt="Instagram" target="_blank">
                <img src="@/assets/img/Instagram_white.png" alt="Instagram" width="32" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between -m-4 items-center">
        <div class="w-full sm:w-1/2 md:w-3/5 p-4">
          <ul class="md:flex md:space-x-4">
            <li><a href="#" class="text-[#1AB0DE]">Aviso legal</a></li>
            <li><a href="#" class="text-[#1AB0DE]">Mapa del sitio</a></li>
            <li><a href="#" class="text-[#1AB0DE]">Aviso de privacidad</a></li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 md:w-2/5 p-4 sm:text-end">
          <ul>
            <li><a href="#" class="text-[#1AB0DE]">emprendedores@proxper.com.mx</a></li>
            <li><a href="#" class="text-[#1AB0DE]">5533352073</a></li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between items-center flex-wrap gap-1 mt-4">
        <p class="text-white">Paseo de La Reforma #342, Piso 18, Oficinas 1802, Col. Juárez, C. P. 06600, Alcaldía Cuauhtémoc, CDMX</p>
        <p class="text-white">Nos respalda una aseguradora con la mayor experiencia y solidez financiera en México: Seguros Monterrey New York Life, líder con más de 80 años en el ramo.</p>
      </div>
    </div>
  </footer>
  <Responsive />
</template>

<style scoped>
  /* nav {
    margin: 0 auto;
    width: 100%;
  } */

  .nav-menu::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    background: rgba(255 255 255 0.16);
  }

  /* Estilos opcionales para el botón de ir arriba */
  .btn-irArriba {
    padding: 15px;
    background-color: #1ab0de;
    color: #fff;
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    z-index: 50;
    border: 1px solid #1ab0de;
  }
</style>
