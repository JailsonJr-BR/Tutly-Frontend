<template>
    <div>
    <a :href="link" class="text-md text-primary font-bold">{{ name }}</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { name, link } = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  link: {
    type: [String, Object, Function],
    default: null,
    required: true
  }
})
</script>
