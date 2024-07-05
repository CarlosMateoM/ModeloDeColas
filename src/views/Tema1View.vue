<template>
  <div class="bg-tertiary text-primary min-h-screen py-8">

    <div class="bg-tertiary text-primary min-h-screen py-8 relative">
    
    <div class="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <button @click="goBack" class="bg-secondary text-primary rounded-full p-3 shadow-lg hover:bg-opacity-80 transition duration-300">
        <
      </button>
    </div>

    <div class="container mx-auto px-4 max-w-4xl">
      <img class="w-full h-96 rounded object-cover" src="/image/imageHome/imgTema1.jpeg" alt="Modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera">

      <h1 class="text-4xl font-bold my-6">Modelo de Múltiples Canales con Llegadas Poisson</h1>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
        <p class="mb-4">
          El modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera, también conocido como modelo de pérdidas M/G/m/m, es una variación del modelo de colas M/M/m. Este modelo implica un sistema en el cual no se permite esperar.
        </p>
        <p>
          Las unidades o clientes que llegan buscan ser atendidos en uno de varios canales de servicio. Si todos los canales están ocupados, a las unidades que llegan se les niega el acceso al sistema. En terminología de línea de espera, las llegadas que ocurren cuando el sistema está completo son bloqueadas y eliminadas del sistema. Tales clientes pueden perderse o intentar regresar más tarde al sistema.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-quaternary">Supuestos del Modelo</h2>
        <ul class="list-disc list-inside">
          <li>El sistema tiene k canales.</li>
          <li>Las llegadas siguen una distribución de probabilidad de Poisson, con tasa de llegadas λ.</li>
          <li>El tiempo de servicio de cada canal puede tener cualquier distribución de probabilidad.</li>
          <li>La tasa de servicios μ es la misma para cada canal.</li>
          <li>Una llegada entra al sistema sólo si por lo menos un canal está disponible.</li>
          <li>Una llegada que ocurre cuando todos los canales están ocupados es bloqueada, es decir, se le niega el servicio y no se le permite entrar al sistema.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-quaternary">Características de Operación</h2>
        <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg mb-4">
          <h3 class="text-xl font-bold mb-2">Probabilidad de bloqueo:</h3>
          <p class="mb-2">P<sub>k</sub> = (λ/μ)<sup>k</sup> / k! / Σ<sub>j=0</sub><sup>k</sup> [(λ/μ)<sup>j</sup> / j!]</p>
          <p>Donde:</p>
          <ul class="list-disc list-inside">
            <li>λ: tasa de llegadas</li>
            <li>μ: tasa de servicios de cada canal</li>
            <li>k: número de canales</li>
            <li>P<sub>j</sub>: probabilidad de que j de los k canales estén ocupados (j = 0, 1, 2, ..., k)</li>
          </ul>
        </div>
        <p class="mb-4">
          El valor de probabilidad más importante es P<sub>k</sub>, el cual es la probabilidad de que todos los k canales estén ocupados. En porcentaje, P<sub>k</sub> indica el porcentaje de llegadas bloqueadas y a las que se les niega el acceso al sistema.
        </p>
        <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg">
          <h3 class="text-xl font-bold mb-2">Número promedio de unidades en el sistema:</h3>
          <p>L = λ(1 - P<sub>k</sub>) / μ</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones</h2>
        <p>
          Una aplicación primordial de este modelo implica el diseño de sistemas de comunicación telefónicos u otros sistemas de comunicación donde las llegadas son las llamadas y los canales son el número de líneas telefónicas o de comunicación disponibles. En un sistema como ese, las llamadas se hacen a un número telefónico, con cada llamada automáticamente dirigida a un canal abierto, si es posible. Cuando todos los canales están ocupados, las llamadas adicionales reciben un tono de ocupado y se les niega el acceso al sistema.
        </p>
      </div>

      <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejemplo Interactivo</h2>
            <p class="mb-4">
                A continuación, se presenta un ejemplo interactivo basado en el caso de Microdata Software, Inc. Puede
                ajustar los parámetros para ver cómo afectan al sistema.
            </p>




            <div class="bg-gray-100  p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Modelo de Múltiples Canales con Llegadas Poisson</h2>

                <div class="mb-6">
                    <p class="mb-2">Este modelo, también conocido como modelo de pérdidas M/G/m/m, es una variación del
                        modelo de colas M/M/m donde no se permite esperar.</p>
                    <ul class="list-disc list-inside">
                        <li>El sistema tiene {{ channels }} canales</li>
                        <li>Las llegadas siguen una distribución de Poisson con tasa λ = {{ arrivals }} por hora</li>
                        <li>La tasa de servicio μ es {{ serviceRate }} por hora para cada canal</li>
                    </ul>
                </div>

                <div class="flex justify-center mb-6">
                    <div class="flex items-center">
                        <PhoneCall class="text-secondary mr-2" />
                        <ArrowRight class="text-quinary mx-2" />
                        <div class="flex flex-col items-center">
                            <Users v-for="i in channels" :key="i" class="text-quaternary my-1" />
                        </div>
                        <ArrowRight class="text-quinary mx-2" />
                        <PhoneOff class="text-quinary" />
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium mb-1">Canales (k)</label>
                        <input type="number" v-model.number="channels" @input="channels = Math.max(1, channels)"
                            class="w-full bg-tertiary text-primary p-2 rounded" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Tasa de llegadas (λ)</label>
                        <input type="number" v-model.number="arrivals" @input="arrivals = Math.max(0, arrivals)"
                            class="w-full bg-tertiary text-primary p-2 rounded" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Tasa de servicio (μ)</label>
                        <input type="number" v-model.number="serviceRate"
                            @input="serviceRate = Math.max(0.1, serviceRate)"
                            class="w-full bg-tertiary text-primary p-2 rounded" />
                    </div>
                </div>

                <div class="bg-white text-gray-800 p-4 rounded-lg">
                    <h3 class="text-xl font-bold mb-2">Resultados:</h3>
                    <p>Probabilidad de bloqueo (Pk): {{ (blockingProbability * 100).toFixed(2) }}%</p>
                    <p>Número promedio de unidades en el sistema (L): {{ averageUnits.toFixed(2) }}</p>
                </div>
            </div>

        </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-quaternary">Video juego relacionado</h2>
        <p class="mb-4">
          Para experimentar de manera interactiva con este modelo de colas, recomendamos el juego "Game Dev Tycoon". Este juego simula la gestión de una empresa de desarrollo de videojuegos, donde deberás manejar múltiples proyectos simultáneamente, similar a un sistema de múltiples canales.
        </p>
        <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg">
          <img src="\image\imageHome\gameTema1.jpg" alt="Game Dev Tycoon" class="w-full h-64 object-cover rounded-lg mb-4">
          <p class="mb-4">
            En "Game Dev Tycoon", experimentarás:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>Gestión de múltiples proyectos (canales) simultáneamente</li>
            <li>Llegadas de nuevos proyectos (clientes) de manera aleatoria</li>
            <li>Tiempos de desarrollo (servicio) variables</li>
            <li>Decisiones sobre aceptar o rechazar proyectos cuando los recursos están al límite</li>
          </ul>
          <a href="https://store.steampowered.com/app/239820/Game_Dev_Tycoon/" target="_blank" class="bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300">
            Descargar Game Dev Tycoon
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PhoneCall, PhoneOff, ArrowRight, Users } from 'lucide-vue-next';

const channels = ref(3);
const arrivals = ref(12);
const serviceRate = ref(6);

const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

const goBack = () => {
  window.history.back();
};

const blockingProbability = computed(() => {
    let sum = 0;
    for (let i = 0; i <= channels.value; i++) {
        sum += Math.pow(arrivals.value / serviceRate.value, i) / factorial(i);
    }
    return (Math.pow(arrivals.value / serviceRate.value, channels.value) / factorial(channels.value)) / sum;
});

const averageUnits = computed(() =>
    arrivals.value * (1 - blockingProbability.value) / serviceRate.value
);
</script>