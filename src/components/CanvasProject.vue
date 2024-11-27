<template>
  <div class="w-full h-screen pt-0 pb-20 sm:p-2">
    <div
      ref="canvasWrapper"
      class="relative w-full h-[86%] transition-all duration-700 transform"
    >
      <div class="w-full h-[86%] overflow-y-hidden canvas-container">
        <iframe
          scrolling="no"
          ref="iframe"
          :src="projectUrl"
          class="z-0 w-full h-full border-none"
          frameborder="0"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin"
          :title="projectUrl"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

interface CanvasProjectProps {
  canvasUrl: string;
  projectId: number;
}

const props = defineProps<CanvasProjectProps>();

const projectUrl = props.canvasUrl;
</script>

<style scoped>
.canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
