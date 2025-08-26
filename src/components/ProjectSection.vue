<template>
  <section id="projects" class="mt-2 mb-2">
    <div class="relative z-0 p-2 mx-auto space-y-10 text-center sm:p-4">
      <div v-for="project in projects" :key="project.id" class="-mt-1">
        <div class="flex flex-col items-start justify-between px-2 mb-2 sm:gap-2 sm:flex-row project-description">
          <div class="sm:px-2">
            <h3 class="text-sm font-semibold text-left lg:text-xl">
              {{ project.name }}
            </h3>
            <p class="text-xs lg:text-lg">{{ project.description }}</p>
          </div>
        </div>
        <Transition name="nested">
          <div class="p-2 mb-2 space-y-2 text-sm text-left bg-gray-100 sm:text-base rounded-2xl">
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Задача:</p>
              <p>{{ project.task }}</p>
            </div>
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Описание:</p>
              <p>{{ project.details }}</p>
            </div>
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Стек:</p>
              <p>{{ project.stack }}</p>
            </div>
            <div class="flex gap-2">
              <p class="font-semibold min-w-[125px]">Результат:</p>
              <p>{{ project.result }}</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Project {
  id: number;
  name: string;
  description: string;
  task: string;
  details: string;
  stack: string;
  result: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    name: "TKO — система контроля телеметрии отходов",
    description: "Система мониторинга состояния датчиков и работы техники.",
    task: "Разработать интерфейсы отображения данных и API для мониторинга.",
    details:
      "Реализовывал фронтенд-часть на Vue2/3, разработал бэкенд-эндпоинты и интерфейсы мониторинга; интеграция с Яндекс.Картами; участие в логике авторизации и контроля датчиков.",
    stack: "Vue2/Vue3, Laravel, Яндекс.Карты, REST API",
    result:
      "Разработанные модули внедрены и успешно используются в эксплуатации.",
  },
  {
    id: 2,
    name: "Система управления работой техников (NDA)",
    description:
      "Многостраничный сервис для планирования и учёта работы полевых сотрудников.",
    task: "Создать систему для управления задачами, работами и инвойсами.",
    details:
      "Laravel + Vue3: разработка ключевых модулей и бизнес-логики, управление задачами и инвойсами, настройка ролевой модели доступа.",
    stack: "Laravel, Vue3, MySQL",
    result:
      "Система вышла в MVP и используется заказчиком в реальной работе. Автоматизация задач позволила сократить время постановки/учёта работ примерно на 30%.",
  },
  {
    id: 3,
    name: "Система анализа данных (NDA)",
    description: "API и интеграционные модули для аналитики.",
    task: "Реализовать API по спецификации и обеспечить интеграцию с внешними сервисами.",
    details:
      "Реализовывал API по Swagger/OpenAPI, интеграционные модули для выгрузки и обработки аналитики.",
    stack: "Laravel, REST API, Swagger/OpenAPI",
    result:
      "Все задачи по API выполнены и приняты заказчиком. Оптимизация запросов ускорила генерацию отчётов примерно на 60%.",
  },
  {
    id: 4,
    name: "BeeBeep — сервис бронирования авто",
    description: "Сервис для бронирования автомобилей и работы таксопарков.",
    task: "Разработать интерфейс бронирования и интеграции с внешними сервисами.",
    details:
      "Реализовал интерфейс бронирования (React), роутинг по ролям, интеграция с картами и CRM, генерация клиентских API по OpenAPI.",
    stack: "React, Laravel, OpenAPI, Яндекс.Карты",
    result:
      "Сервис вышел в MVP и был передан компании Авито для дальнейшего развития.",
  },
  {
    id: 5,
    name: "Glorax — сайт интерактивной прогулки",
    description:
      "Иммерсивный 3D-сайт для продвижения ЖК в историческом районе.",
    task: "Создать сайт с 3D-моделью района и системой маршрутов.",
    details:
      "Оптимизация 3D-контента (React Three Fiber) — снижение времени загрузки ~30%; реализована логика маршрутов и звукового сопровождения.",
    stack: "React, React Three Fiber",
    result:
      "Проект выиграл профильный конкурс и полностью выполнил поставленные рекламные задачи. Сокращение времени загрузки 3D-контента повысило вовлечённость пользователей и увеличило глубину просмотра на ~25%.",
  },
  {
    id: 6,
    name: "Credits.kg",
    description: "Кредитный сервис с калькулятором.",
    task: "Разработать интерфейс и калькулятор расчёта кредитов.",
    details: "Реализация страниц и кредитного калькулятора на Laravel + Blade.",
    stack: "Laravel, Blade",
    result:
      "Проект сдан заказчику и внедрён в работу. Улучшение логики калькулятора позволило уменьшить количество ошибок расчётов клиентов на ~40%.",
  },
]);
</script>

<style scoped>
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
