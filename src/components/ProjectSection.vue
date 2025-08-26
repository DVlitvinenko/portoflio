<template>
  <section id="projects" class="mt-10 mb-2">
    <div class="relative z-0 p-2 mx-auto space-y-10 text-center sm:p-20">
      <div
        v-for="project in projects"
        :key="project.id"
        class="-mt-1"
        ref="projectSections"
        :id="`project-${project.id}`"
      >
        <div
          class="flex flex-col items-center justify-between px-2 mb-2 sm:gap-2 sm:flex-row project-description"
          :id="`project-desc-${project.id}`"
        >
          <div class="sm:px-2 max-h-20">
            <h3 class="text-sm font-semibold lg:text-xl">
              {{ project.name }}
            </h3>
            <p class="text-xs lg:text-lg">{{ project.description }}</p>
          </div>
          <div class="flex gap-2 mt-2 sm:mt-0 sm:flex-col-reverse">
            <button
              v-if="showDataId !== project.id"
              class="px-3 py-1 text-sm text-white w-[150px] sm:w-[200px] bg-blue-600 rounded-lg sm:px-6 sm:py-2 text-nowrap h-fit hover:bg-blue-700"
              @click="changeShowDataId(project.id)"
            >
              Показать описание
            </button>
            <button
              v-else
              class="px-3 py-1 text-sm text-white w-[150px] sm:w-[200px] bg-blue-600 rounded-lg sm:px-6 sm:py-2 text-nowrap h-fit hover:bg-blue-700"
              @click="changeShowDataId(-1)"
            >
              Скрыть описание
            </button>
            <button
              class="px-3 py-1 text-sm text-white w-[150px] sm:w-[200px] bg-blue-600 rounded-lg sm:px-6 sm:py-2 text-nowrap h-fit hover:bg-blue-700"
              @click="openProject(project.canvasUrl)"
            >
              Перейти к проекту
            </button>
          </div>
        </div>
        <Transition name="nested">
          <div
            class="p-2 mb-2 space-y-2 text-sm text-left bg-gray-100 sm:text-base rounded-2xl"
            v-if="showDataId === project.id"
          >
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Задача:</p>
              <p>{{ project.data.task }}</p>
            </div>
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Описание:</p>
              <p>{{ project.data.description }}</p>
            </div>
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Особенности:</p>
              <p>{{ project.data.features }}</p>
            </div>
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Стек:</p>
              <p>{{ project.data.stack }}</p>
            </div>
          </div>
        </Transition>

        <div
          class="h-full scale-[0.85] -my-5 -translate-x-5 border-4 border-blue-500 rounded-2xl c-max-h sm:m-0 sm:translate-x-0 sm:scale-100"
        >
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
import CanvasProject from "@components/CanvasProject.vue";
import { ref } from "vue";

interface ProjectData {
  stack: string;
  task: string;
  description: string;
  features: string;
}
interface Project {
  id: number;
  name: string;
  description: string;
  canvasUrl: string;
  data: ProjectData;
}

const projects = ref<Project[]>([
  {
    id: 1,
    name: "BeeBeep — Сервис бронирования авто",
    description:
      "Сервис бронирования автомобилей с интеграцией с 1С, Я.Кабинетом и CRM для менеджеров.",
    canvasUrl: "https://beebeep.ru",
    data: {
      stack: "React.js+Laraver.",
      description:
        "Сервис предназначен для двух сторон: с одной – таксопарки, которые размещают на сайте доступные для брони автомобили, условия аренды и работы с таксистом. С другой – таксист, который видит таксопарки его города и условия работы с ними.",
      task: "Разработать сервис бронирования автомобилей.",
      features:
        "Обе стороны работают через админку с кабинетами. Внутри кабинетов таксопарков есть система распределения ролей. Разработана система управления в виде канбан-доски. Выполнены сторонние интеграции с Я.Картами, Я.Кабинетом, Т-Банк, 1С",
    },
  },
  {
    id: 2,
    name: "Glorax — Сайт интерактивной прогулки",
    description:
      "Сайт с 3D-моделью района города, использующий Three.js для отображения моделей.",
    canvasUrl: "https://glorax.kwol.ru",
    data: {
      stack: "React.js",
      description:
        "район представлен в виде 3D-модели. Путь к новому ЖК лежит через исторические объекты: дома, произвоства. Есть 6 маршрутов движения: 5 – статичные, пользователь движется по подготовленному маршруту от точки А в точку Б. По пути слушает аудио. Шестой маршрут – иммерсивный, выполненный в виде аудиоспектакля. Пользователь движется по ключевым точкам по маршруту. Оказавшись в ней, у него появляется возможность выбрать ситуацию, предложенную в аудиоспектакле. После выбора появляется маршрут до следующей следующей ключевой точки.",
      task: "Разработать рекламный сайт для элитного ЖК, построенного в историческом районе города.",
      features:
        "Продукт реализован в виде 3Д-модели района. Есть панель управления маршрутами, где размещены аудио, видео и текстовые материалы.",
    },
  },
]);

const showDataId = ref<number>(-1);

const changeShowDataId = (id: number) => {
  showDataId.value = id;
};

const openProject = (url: string) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.c-max-h {
  max-height: calc(100vh - 80px);
  height: calc(100vh - 30px);
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.nested-enter-from {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.nested-enter-to {
  max-height: 400px;
  opacity: 1;
}

.nested-leave-from {
  max-height: 400px;
  opacity: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.nested-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
