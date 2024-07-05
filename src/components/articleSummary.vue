<template>
    <div 
      class="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      
      <div class="p-4 bg-white">
        <h3 class="text-lg font-semibold mb-2">{{ props.title }}</h3>
        <p class="text-sm text-gray-600">{{ props.description }}</p>
      </div>
      <a :href="props.link" class="absolute inset-0"></a>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String
  });
  
  const handleMouseMove = (event) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
  
    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  
  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  </script>