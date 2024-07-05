<template>
  <div class="container mx-auto px-4">
    <!-- Tema principal -->
    <ResumenTema
      v-if="cards.length > 0"
      :image="cards[0].image"
      :title="cards[0].title"
      :description="cards[0].description"
      :link="cards[0].link"
      class="mb-8 w-full"
      :isPrincipal="true"
    />

    <!-- Resto de temas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ResumenTema
        v-for="card in cards.slice(1)"
        :key="card.id"
        :image="card.image"
        :title="card.title"
        :description="card.description"
        :link="card.link"
      />
    </div>
  </div>
</template>

<script setup>
import ResumenTema from '@/components/ResumenTema.vue';

const cards = [
{
    id: 0,
    image: 'public/image/imageHome/imgIntro.jpeg',
    title: 'Teoria de colas',
    description: 'Descripción corta 1',
    link: '/pagina1'
  },
  {
    id: 1,
    image: 'public/image/imageHome/imgTema1.jpeg',
    title: 'Modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera',
    description: 'Descripción corta 1',
    link: '/pagina1'
  },
  {
    id: 2,
    image: 'public/image/imageHome/imgTema2.jpeg',
    title: 'Modelo con múltiples servidores',
    description: 'Descripción corta 2',
    link: '/pagina2'
  },
  {
    id: 3,
    image: 'public/image/imageHome/imgTema3.jpeg',
    title: 'M/G/c: Llegadas Markovianas, tiempo de servicio con distribución general, c servidores.',
    description: 'Descripción corta 3',
    link: '/pagina3'
  },
  {
    id: 4,
    image: 'public/image/imageHome/imgTema4.jpeg',
    title: 'G/G/c: Llegadas y tiempo de servicio con distribución general, c servidores.',
    description: 'Descripción corta 4',
    link: '/pagina4'
  },
  {
    id: 5,
    image: 'public/image/imageHome/imgTema5.jpeg',
    title: 'M/M/∞: Llegadas Markovianas, tiempo de servicio exponencial, infinitos servidores.',
    description: 'Descripción corta 5',
    link: '/pagina5'
  }
];
</script>