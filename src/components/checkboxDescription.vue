<template>
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input id="checkbox" aria-describedby="checkbox-description" name="checkbox" type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
    </div>
    <div class="ml-3 text-sm leading-6">
      <label for="checkbox" class="text-md text-gray-500">{{ description }}</label>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { description } = defineProps({
  description: {
    type: String,
    default: '',
    required: true
  },
})
</script>
