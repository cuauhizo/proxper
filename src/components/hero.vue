<template>
  <!-- <section id="section1" class="container flex flex-col justify-items-center items-center justify-content-center min-h-lvh py-[5rem]"> -->
  <section id="section1" class="container flex flex-col justify-items-center items-center justify-content-center py-[5rem] relative space-y-5">
    <h1 class="lato-bold text-[2.138rem] text-[#24395F]">Cumple tu</h1>
    <img class="" :src="meta" width="843" loading="lazy" />
    <h2 class="lato-regular text-[2.138rem] text-[#24395F]">
      Tenemos la
      <span class="lato-bold">opción ideal</span>
      para que lo consigas
    </h2>
    <div class="hidden absolute -top-28 left-10 -z-10 lg:block">
      <img src="@/assets/img/pleca_1.png" class="w-[76px]" alt="" width="76" />
    </div>
    <div class="absolute -bottom-80 right-10 -z-10">
      <img src="@/assets/img/pleca_2.png" class="w-[83px]" alt="" width="83" />
    </div>
  </section>
</template>

<script setup>
  import meta from '@/assets/img/Meta.png';
</script>

<style scoped></style>
