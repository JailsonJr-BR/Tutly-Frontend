<template>
    <div
      class="flex justify-center items-center gap-3 w-48 py-3.5 rounded-md border border-gray-300 shadow-sm cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-blue-300"
      role="button"
      tabindex="0"
    >
      <img :src="`src/assets/images/brands/${logo}`" alt="">
      <p class="text-lg font-semibold text-secondary-300">{{ name }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { name, logo } = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  logo: {
    type: String,
    default: '',
    required: true
  }
});
</script>
