<template>
    <div 
      :class="[
        'relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-primary focus-within:ring-2 focus-within:ring-secondary',
        isPrincipal ? 'h-96' : 'h-64',
        'bg-tertiary'
      ]"
    >
      <img :src="image" :alt="title" class="w-full h-2/3 object-cover">
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-tertiary">
        <h3 :class="['font-semibold mb-2 text-primary', isPrincipal ? 'text-2xl' : 'text-lg']">{{ title }}</h3>
        <p :class="['text-gray-600', isPrincipal ? 'text-base' : 'text-sm']">{{ description }}</p>
      </div>
      <a :href="link" class="absolute inset-0 focus:outline-none focus:ring-2 focus:ring-secondary"></a>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    isPrincipal: {
      type: Boolean,
      default: false
    }
  });
  </script>