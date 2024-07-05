<template>
    <section class="py-12 bg-tertiary">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-primary mb-8 text-center">Integrantes del equipo</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="miembro in equipo" :key="miembro.nombre" class="flex flex-col items-center">
            <img :src="miembro.imagen" :alt="miembro.nombre" class="w-32 h-32 rounded-full object-cover mb-4 shadow-md">
            <h3 class="text-lg font-semibold text-primary">{{ miembro.nombre }}</h3>
            <p class="text-sm text-gray-600">{{ miembro.cargo }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const equipo = [
    { nombre: 'Carlos Mateo Martinez Guerra', cargo: 'Desarrollador', imagen: '/image/imageHome/teamMateo.jpeg' },
    { nombre: 'Javier Eduardo Montes Delgado', cargo: 'Desarrollador', imagen: '/image/imageHome/teamJavier.jpeg' },
    { nombre: 'Eylin Vanessa Ortega Buelvas', cargo: 'Diseño', imagen: '/image/imageHome/teamEylin.png' },
    { nombre: 'Moises Elias Silva Perez', cargo: 'Recursos teoricos', imagen: '/image/imageHome/teamMoises.png' },
  ];
  </script>