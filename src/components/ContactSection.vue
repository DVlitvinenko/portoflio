<template>
  <section id="contact" class="py-2 sm:py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-xl font-semibold sm:text-3xl">Свяжитесь со мной</h2>
      <p class="mt-4 text-lg text-gray-700">
        Заполните форму ниже, и я обязательно свяжусь с вами как можно скорее.
      </p>

      <ContactInfo />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from "@components/ContactForm.vue";
import ContactInfo from "@components/ContactInfo.vue";
</script>

<style scoped>
/* Стиль для секции "Контакты" */
</style>
