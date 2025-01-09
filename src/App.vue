<script setup lang="ts">
import Footer from "@components/Footer.vue";
import Header from "@components/Header.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="fixed top-0 left-0 z-10 w-full h-fit"><Header /></div>
    <div class="w-full h-12 mb-2 sm:h-16"></div>
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
