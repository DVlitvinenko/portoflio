<template>
  <div class="w-full c-max-h rounded-xl ">
    <div ref="canvasWrapper" class="relative w-full transition-all duration-700 transform c-max-h rounded-3xl ">
      <div class="relative z-0 w-full overflow-y-hidden c-max-h rounded-xl canvas-container">
        <iframe scrolling="yes" ref="iframe" :src="projectUrl"
          class="relative z-0 w-full h-full border-none rounded-xl c-scale" frameborder="0" allow="fullscreen"
          sandbox="allow-scripts allow-same-origin " :title="projectUrl"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface CanvasProjectProps {
  canvasUrl: string;
  projectId: number;
}

const props = defineProps<CanvasProjectProps>();

const projectUrl = props.canvasUrl;
</script>

<style scoped>
.c-max-h {
  height: calc(100vh - 88px);
}

.translate-z-0 {
  transform: translateZ(-1);
}

.c-scale>#document {
  transform: scale(0.5);
}
</style>
