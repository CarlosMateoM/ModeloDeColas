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
    image: '/image/imageHome/imgIntro.jpeg',
    title: 'Teoria de colas',
    description: 'La teoría de colas es el estudio matemático de las líneas de espera o colas, enfocándose en analizar el comportamiento y la optimización de sistemas donde hay clientes que esperan por un servicio.',
    link: '/pagina1'
  },
  {
    id: 1,
    image: '/image/imageHome/imgTema1.jpeg',
    title: 'Modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera',
    description: 'El modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera, también conocido como modelo de pérdidas M/G/m/m, es una variación del modelo de colas M/M/m.',
    link: '/modelo-de-multiples-canales-con-llegadas-poisson-tiempos-de-servicio-arbitrarios-y-sin-linea-de-espera'
  },
  {
    id: 2,
    image: '/image/imageHome/imgTema2.jpeg',
    title: 'Modelo con múltiples servidores',
    description: 'Este modelo se utiliza para analizar sistemas donde múltiples servidores atienden a una única cola de clientes, como en centros de atención telefónica, ventanillas de banco, o sistemas de procesamiento paralelo en computación.',
    link: '/pagina2'
  },
  {
    id: 3,
    image: '/image/imageHome/imgTema3.jpeg',
    title: 'M/G/c: Llegadas Markovianas, tiempo de servicio con distribución general, c servidores.',
    description: 'En este sistema, una población infinita de clientes llegan según un proceso de Poisson con una tasa constante de llegada λ.',
    link: '/pagina3'
  },
  {
    id: 4,
    image: '/image/imageHome/imgTema4.jpeg',
    description: 'En este sistema, las llegadas de clientes tienen una distribución general G, lo que significa que los tiempos entre llegadas pueden seguir cualquier distribución de probabilidad, con una tasa media de llegadas λ.',
    title: 'G/G/c: Llegadas y tiempo de servicio con distribución general, c servidores.',
    link: '/pagina4'
  },
  {
    id: 5,
    image: '/image/imageHome/imgTema5.jpeg',
    title: 'M/M/∞: Llegadas Markovianas, tiempo de servicio exponencial, infinitos servidores.',
    description: 'El modelo M/M/∞ es un sistema de colas que se caracteriza por tener llegadas que siguen un proceso de Poisson, tiempos de servicio distribuidos exponencialmente, e infinitos servidores disponibles.',
    link: '/pagina5'
  }
];
</script>