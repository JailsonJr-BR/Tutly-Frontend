<template>
    <div>
    <RouterLink :to="path">
      <a class="text-md text-primary font-bold">{{ name }}</a>
    </RouterLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from "vue-router";

const { name, path } = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  path: {
    type: [String, Object, Function],
    default: null,
    required: true
  }
})
</script>
