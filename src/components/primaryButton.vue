<template>
  <button
    type="button"
    class="rounded-md w-full bg-primary px-3.5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
  >
    {{ name }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const { name } = defineProps({
  name: {
    type: String,
    default: 'Clique'
  }
})
</script>
