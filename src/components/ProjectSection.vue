<template>
  <section id="projects" class="mt-10 mb-2">
    <div class="relative z-0 pl-1 pr-12 mx-auto space-y-10 text-center sm:px-20">
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
        <div class="h-full border-4 border-blue-500 rounded-2xl c-max-h">
          <CanvasProject
            :canvasUrl="project.canvasUrl"
            :projectId="project.id"
          />
        </div>
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

.c-max-h {
  max-height: calc(100vh - 80px);
  height: calc(100vh - 30px);
}
</style>
