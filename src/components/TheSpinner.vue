<template>
  <div v-if="isActive" class="flex justify-center mt-10">
    <div
      class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only"></span>
    </div>
    <p class="mt-2 ml-2 text-gray-600">{{ title }}...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Cargando",
    },
    isActive: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
});
</script>
