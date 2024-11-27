<template>
  <section id="projects" class="mt-10">
    <div class="container mx-auto text-center">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="-mt-1"
        ref="projectSections"
        :id="`project-${project.id}`"
      >
        <div
          class="flex flex-col items-center justify-between px-2 mb-2 sm:gap-2 sm:flex-row project-description"
          :id="`project-desc-${project.id}`"
        >
          <div class="sm:px-2 max-h-16">
            <h3 class="text-sm font-semibold lg:text-xl">
              {{ project.name }}
            </h3>
            <p class="text-xs lg:text-lg">{{ project.description }}</p>
          </div>
          <button
            class="px-3 py-1 mt-2 text-white bg-blue-600 rounded-lg sm:px-6 sm:py-2 text-nowrap h-fit hover:bg-blue-700"
            @click="openProject(project.canvasUrl)"
          >
            Перейти к проекту
          </button>
        </div>

        <CanvasProject :canvasUrl="project.canvasUrl" :projectId="project.id" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CanvasProject from "@components/CanvasProject.vue";

interface Project {
  id: number;
  name: string;
  description: string;
  canvasUrl: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    name: "BeeBeep — Сервис бронирования авто",
    description:
      "Сервис бронирования автомобилей с интеграцией с 1С, Я.Кабинетом и CRM для менеджеров.",
    canvasUrl: "https://beebeep.ru",
  },
  {
    id: 2,
    name: "Glorax — Сайт интерактивной прогулки",
    description:
      "Сайт с 3D-моделью района города, использующий Three.js для отображения моделей.",
    canvasUrl: "https://glorax.kwol.ru",
  },
  {
    id: 3,
    name: "Credits.kg — Агрегатор банковских услуг",
    description:
      "Платформа для сравнения кредитных предложений, использующая Laravel для backend.",
    canvasUrl: "https://credits.kg",
  },
]);

const openProject = (url: string) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
/* Общие стили для страницы проектов */
#projects {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.project-description {
  scroll-snap-align: start;
}

.project-card {
  scroll-snap-align: start;
  margin-top: 0px;
}
</style>
