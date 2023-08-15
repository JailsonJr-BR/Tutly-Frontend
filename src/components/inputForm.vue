<template>
  <div>
    <label :for="name" class="hidden block text-sm font-medium leading-6 text-gray-900">
      {{ placeholder }}
    </label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3">
        <component :is="icon" class="h-5 w-5 text-gray-500" aria-hidden="true" />
      </div>
      <input
        :type="type"
        :name="name"
        :id="name"
        class="block w-full bg-gray-50 rounded-md border-0 py-2.5 pl-12 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-500 font-medium focus:outline-blue-300 sm:text-base sm:leading-6"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { name, type, placeholder, icon } = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  icon: {
    type: [String, Object, Function],
    default: null
  }
})
</script>
