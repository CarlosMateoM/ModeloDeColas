<template>
    <div 
      :class="[
        'group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105',
        isPrincipal ? 'h-96' : 'h-64'
      ]"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <img :src="image" :alt="title" class="w-full h-full object-cover">
      <div :class="['absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90', isPrincipal ? 'h-1/2' : 'h-1/3']">
        <h3 :class="['font-semibold mb-2', isPrincipal ? 'text-2xl' : 'text-lg']">{{ title }}</h3>
        <p :class="['text-gray-600', isPrincipal ? 'text-base' : 'text-sm']">{{ description }}</p>
      </div>
      <a :href="link" class="absolute inset-0"></a>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    isPrincipal: {
      type: Boolean,
      default: false
    }
  });
  
  const handleMouseMove = (event) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
  
    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  
  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  </script>