<template>
  <div class="bg-tertiary text-primary min-h-screen py-8">
<div class="bg-tertiary text-primary min-h-screen py-8 relative">

<div class="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
  <button @click="goBack" class="bg-secondary text-primary rounded-full p-3 shadow-lg hover:bg-opacity-80 transition duration-300">
    <
  </button>
</div>

<div class="container mx-auto px-4 max-w-4xl">
  <img class="w-full h-96 rounded object-cover" src="/image/imageHome/imgTema5.jpeg" alt="Llegadas Markovianas, Tiempo de Servicio Exponencial, Infinitos Servidores">

  <h1 class="text-4xl font-bold my-6">Llegadas Markovianas, Tiempo de Servicio Exponencial, Infinitos Servidores</h1>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
    <p class="mb-4">
      El modelo M/M/∞ es un sistema de colas que se caracteriza por tener llegadas que siguen un proceso de Poisson, tiempos de servicio distribuidos exponencialmente, e infinitos servidores disponibles. Este modelo representa una situación idealizada donde nunca se forma una cola, ya que siempre hay un servidor disponible para atender a cada cliente que llega al sistema.
    </p>
    <p class="mb-4">
      En el modelo M/M/∞, la tasa de llegadas se denota comúnmente como λ y la tasa de servicio como μ. Una propiedad fundamental de este sistema es que el número de clientes presentes en cualquier momento sigue una distribución de Poisson con media λ/μ. Esto significa que el número esperado de clientes en el sistema es simplemente la relación entre la tasa de llegadas y la tasa de servicio.
    </p>
    <p class="mb-4">
      Una característica notable del M/M/∞ es que el tiempo que un cliente pasa en el sistema es independiente del número de otros clientes presentes. De hecho, el tiempo total que un cliente pasa en el sistema es idéntico a su tiempo de servicio, ya que no hay tiempo de espera en cola.
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Características del Modelo</h2>
    <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg mb-4">
      <h3 class="text-xl font-bold mb-2">Fórmulas Principales:</h3>
      <ul class="list-disc list-inside">
        <li><strong>Número medio de clientes en el sistema (L):</strong> L = λ / μ donde λ es la tasa de llegadas y μ es la tasa de servicio.</li>
        <li><strong>Probabilidad de n clientes en el sistema:</strong> P(n) = (λ/μ)^n * e^(-λ/μ) / n!</li>
        <li><strong>Varianza del número de clientes en el sistema:</strong> Var(N) = λ / μ</li>
        <li><strong>Tiempo medio en el sistema (W):</strong> W = 1 / μ</li>
        <li><strong>Distribución del tiempo total en el sistema:</strong> Es idéntica a la distribución del tiempo de servicio (exponencial con tasa μ).</li>
        <li><strong>Probabilidad de que el sistema esté vacío:</strong> P(0) = e^(-λ/μ)</li>
      </ul>
    </div>
    <p class="mb-4">
      En este modelo, la ausencia de colas simplifica mucho el análisis y permite cálculos directos basados en las tasas de llegada y servicio.
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones Prácticas</h2>
    <ul class="list-disc list-inside">
      <li>Modelado de sistemas de autoservicio (por ejemplo, máquinas expendedoras).</li>
      <li>Análisis de sistemas de recursos compartidos con capacidad prácticamente ilimitada.</li>
      <li>Estudio de poblaciones en ecología o epidemiología.</li>
      <li>Modelado de sistemas de computación en la nube con escalado automático.</li>
      <li>Análisis de sistemas de telecomunicaciones con gran cantidad de líneas.</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Comparación con Otros Modelos</h2>
    <ul class="list-disc list-inside">
      <li><strong>Vs M/M/1 o M/M/c:</strong> No hay cola en M/M/∞, lo que simplifica significativamente el análisis.</li>
      <li><strong>Vs M/G/∞:</strong> M/M/∞ asume tiempos de servicio exponenciales, lo que permite cálculos más sencillos.</li>
      <li><strong>Vs G/G/∞:</strong> M/M/∞ es más restrictivo en sus supuestos, pero permite soluciones analíticas exactas.</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejercicio de Ejemplo</h2>
    <p class="mb-4">
      Un gran centro comercial tiene un sistema de carros de compra automáticos. Los clientes llegan según un proceso de Poisson con una tasa de 30 por hora. Cada cliente usa un carro durante un tiempo que sigue una distribución exponencial con media de 45 minutos. Calcule:
    </p>
    <ul class="list-disc list-inside">
      <li><strong>a) El número medio de carros en uso:</strong> λ = 30 clientes/hora μ = 60/45 = 4/3 clientes/hora L = λ / μ = 30 / (4/3) = 22.5 carros</li>
      <li><strong>b) La probabilidad de que haya exactamente 20 carros en uso:</strong> P(20) = (22.5)^20 * e^(-22.5) / 20! ≈ 0.0836 o 8.36%</li>
      <li><strong>c) La probabilidad de que no haya ningún carro en uso:</strong> P(0) = e^(-λ/μ) = e^(-22.5) ≈ 1.67 x 10^-10 o 0.0000000167%</li>
    </ul>
  </div>

  <!-- Ejemplo Interactivo -->
  <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejemplo Interactivo</h2>
            <p class="mb-4">
                A continuación, se presenta un ejemplo interactivo basado en el caso del centro comercial descrito.
                Puedes ajustar los parámetros para ver cómo afectan al sistema.
            </p>
            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Simulador de Cola M/M/∞</h2>

                <div class="mb-6">
                    <p class="mb-2">Este modelo simula un sistema de colas con llegadas de Poisson, tiempos de servicio
                        exponenciales e infinitos servidores.</p>
                    <ul class="list-disc list-inside">
                        <li>La tasa de llegada λ es {{ arrivalRate }} por hora</li>
                        <li>La tasa de servicio μ es {{ serviceRate }} por hora</li>
                    </ul>
                </div>

                <div class="flex justify-center mb-6">
                    <div class="flex items-center">
                        <User class="text-blue-500 mr-2" />
                        <ArrowRight class="text-gray-500 mx-2" />
                        <div class="flex items-center">
                            <Users class="text-green-500 mr-1" />
                            <Infinity class="text-green-500" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium mb-1">Tasa de llegadas (λ)</label>
                        <input type="number" v-model.number="arrivalRate"
                            @input="arrivalRate = Math.max(0, arrivalRate)"
                            class="w-full bg-white text-gray-800 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Tasa de servicio (μ)</label>
                        <input type="number" v-model.number="serviceRate"
                            @input="serviceRate = Math.max(0.1, serviceRate)"
                            class="w-full bg-white text-gray-800 p-2 rounded" />
                    </div>
                </div>

                <div class="bg-white text-gray-800 p-4 rounded-lg">
                    <h3 class="text-xl font-bold mb-2">Resultados:</h3>
                    <p>Número medio de clientes en el sistema (L): {{ avgClientsInSystem.toFixed(2) }}</p>
                    <p>Tiempo medio en el sistema (W): {{ (avgTimeInSystem * 60).toFixed(2) }} minutos</p>
                    <p>Probabilidad de sistema vacío: {{ (emptySystemProb * 100).toFixed(4) }}%</p>
                    <p>Probabilidad de exactamente 5 clientes: {{ (probExactlyNClients(5) * 100).toFixed(4) }}%</p>
                    <p>Probabilidad de 10 o más clientes: {{ (probNOrMoreClients(10) * 100).toFixed(4) }}%</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-bold mb-2">Distribución de Probabilidad:</h3>
                    <div class="h-64">
                        <Line :data="chartData" />
                    </div>
                </div>
            </div>
        </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Video juego relacionado</h2>
    <p class="mb-4">
      Para experimentar con el modelo M/M/∞, recomendamos "Factorio". Este juego de automatización industrial permite expandir indefinidamente la capacidad de producción, similar a un sistema con infinitos servidores.
    </p>
    <div class="bg-tertiary border-2 border-secondary p-4 rounded-lg">
      <img src="/image/imageHome/gameTema5.jpg" alt="Factorio" class="w-full h-64 object-cover rounded-lg mb-4">
      <p class="mb-4">
        En "Factorio", experimentarás:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Flujo constante de recursos (clientes) que necesitan procesamiento</li>
        <li>Capacidad para expandir infinitamente las líneas de producción (servidores)</li>
        <li>Tiempos de procesamiento exponenciales para diferentes productos</li>
        <li>Optimización de flujos y eficiencia en un sistema altamente escalable</li>
      </ul>
      <a href="https://store.steampowered.com/app/427520/Factorio/" target="_blank" class="bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300">
        Descargar Factorio
      </a>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { User, ArrowRight, Users, Infinity } from 'lucide-vue-next';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)

const arrivalRate = ref(30);
const serviceRate = ref(40);

const avgClientsInSystem = computed(() => arrivalRate.value / serviceRate.value);
const avgTimeInSystem = computed(() => 1 / serviceRate.value);
const emptySystemProb = computed(() => Math.exp(-avgClientsInSystem.value));

const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

const goBack = () => {
  window.history.back();
};

const probExactlyNClients = (n) => {
  const L = avgClientsInSystem.value;
  return Math.pow(L, n) * Math.exp(-L) / factorial(n);
};

const probNOrMoreClients = (n) => {
  let prob = 0;
  for (let i = 0; i < n; i++) {
    prob += probExactlyNClients(i);
  }
  return 1 - prob;
};

const chartData = computed(() => {
  const labels = [];
  const data = [];
  const L = avgClientsInSystem.value;
  for (let i = 0; i <= Math.min(20, Math.ceil(L * 2)); i++) {
    labels.push(i);
    data.push(probExactlyNClients(i));
  }
  return {
    labels,
    datasets: [
      {
        label: 'Probabilidad',
        data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  };
});
</script>