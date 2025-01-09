<template>
  <header class="px-2 py-2 sm:py-5 bg-gradient-to-r from-gray-200 to-white">
    <div class="container flex items-center justify-between mx-auto">
      <div class="lg:w-1/3">
        <img
          :src="logo"
          alt="logo"
          class="h-10 cursor-pointer"
          @click="goTo('/')"
        />
      </div>
      <div
        @click="toggleMenu"
        class="fixed z-10 p-2 rounded-md top-3 right-4 sm:hidden focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <h1 class="text-sm font-bold text-gray-800 underline md:text-2xl">
        Дмитрий Литвиненко
      </h1>
      <nav class="flex justify-end space-x-4 lg:w-1/3">
        <div
          class="hidden overflow-hidden w-fit sm:block h-fit"
          v-for="{ path, name } in routes"
        >
          <router-link
            exact-active-class=""
            active-class="text-black active"
            class="text-gray-600 hovered"
            :to="path"
            >{{ name }}</router-link
          >
        </div>
      </nav>
      <div  @click="toggleMenu"
        v-if="isMenuOpen"
        class="fixed top-0 left-0 w-screen h-screen z-1"
      ></div>
      <Transition class="" name="slide-fade">
        <div
          v-show="isMenuOpen"
          class="fixed top-0 flex flex-col items-center w-full gap-2 py-5 rounded-bl-full shadow-md ring-0 sm:hidden bg-slate-200 bg-opacity-90"
        >
          <div
            class="overflow-hidden w-fit h-fit z-1"
            v-for="{ path, name } in routes"
          >
            <router-link
              exact-active-class=""
              active-class="text-black active"
              class="text-gray-600 hovered"
              :to="path"
              >{{ name }}</router-link
            >
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@assets/logo.svg";

const isMenuOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const goTo = (path: string) => {
  router.push({ path });
};

const routes = [
  { path: "/", name: "Обо мне" },
  { path: "/projects", name: "Проекты" },
  { path: "/contacts", name: "Контакты" },
];
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.active,
.hovered {
  position: relative;
  overflow: hidden;
}
.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 2px;
  background: rgb(59 130 246 / var(--tw-text-opacity, 1));
  left: -100%;
  width: 100%;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.hovered::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 2px;
  background: rgb(59 130 246 / var(--tw-text-opacity, 1));
  left: -100%;
  width: 100%;

  transition: transform 0.3s ease;
}
.hovered:hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 2px;

  left: -100%;
  border-radius: 20px;
  width: 100%;
  transform: translateX(50%);
}
</style>
