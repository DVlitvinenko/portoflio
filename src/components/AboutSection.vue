<template>
  <section id="about" class="px-4 py-2 text-center sm:pt-10">
    <div class="container mx-auto">
      <div class="text-center">
        <h2 class="text-xl font-semibold sm:text-3xl">Обо мне</h2>
        <p class="mt-1 text-lg text-left text-gray-700 sm:mt-4">
          Меня зовут Дима. Я Fullstack-разработчик. Разрабатываю коммерческие
          сайты и сервисы более 2-х лет. Имею высшее техническое образование.
          <br /><br />
          Работал на фрилансе и в команде агентства, где занимал ведущую роль
          среди разработчиков: получал и распределял задачи между
          программистами. Есть опыт интеграции сторонних сервисов: Яндекс,
          Т-Банк и д.р.
        </p>
      </div>
      <router-link exact-active-class="" active-class="text-black active" class="text-gray-600 hovered" to="/projects">
        <Button variant="primary" class="my-2 sm:my-10 max-w-[250px] rounded-xl">
          Посмотреть проекты
        </Button>
      </router-link>

      <div class="mt-2">
        <h3 class="text-xl font-semibold text-center sm:text-3xl">
          Ключевые навыки
        </h3>
        <div
          class="grid grid-cols-1 gap-4 mt-2 text-center justify-evenly sm:mt-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="w-full max-w-full p-6 bg-white rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-blue-500">Frontend</h4>
            <ul class="mt-1 text-left text-gray-700 sm:mt-4 max-w-[200px]">
              <li>Vue.js</li>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="w-full max-w-full p-6 bg-white rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-blue-500">Backend</h4>
            <ul class="mt-1 text-left text-gray-700 sm:mt-4 max-w-[200px]">
              <li>Laravel</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>RESTful API</li>
            </ul>
          </div>
          <div class="w-full max-w-full p-6 bg-white rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold text-blue-500">Инструменты</h4>
            <ul class="mt-1 text-left text-gray-700 sm:mt-4 max-w-[200px]">
              <li>Git, GitHub, GitLab</li>
              <li>Postman, Bruno, Swagger</li>
              <li>Figma</li>
              <li>Docker</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "./UI/Button.vue";
</script>
