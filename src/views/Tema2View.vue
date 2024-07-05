<template>
    <div class="bg-tertiary text-primary min-h-screen p-8">
        <!-- Imagen de Cabecera -->
        <img class="w-full h-96 rounded object-cover mb-8" src="/image/imageHome/imgTema2.jpeg"
            alt="Modelo con Múltiples Servidores">

        <!-- Título Principal -->
        <h1 class="text-4xl font-bold my-6">Modelo con Múltiples Servidores</h1>

        <!-- Introducción -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
            <p class="mb-4">
                El modelo de colas M/M/c, también conocido como modelo de colas con múltiples servidores, es un sistema
                de colas en el que:
            </p>
            <ul class="list-disc list-inside mb-4">
                <li><strong>M (primera M):</strong> Las llegadas de clientes siguen un proceso de Poisson, lo que
                    significa que los tiempos entre llegadas están distribuidos exponencialmente.</li>
                <li><strong>M (segunda M):</strong> Los tiempos de servicio están distribuidos exponencialmente para
                    cada servidor.</li>
                <li><strong>c:</strong> Hay c servidores idénticos trabajando en paralelo.</li>
                <li>La capacidad del sistema es infinita, lo que significa que no hay límite en el número de clientes
                    que pueden esperar en la cola.</li>
                <li>La disciplina de la cola es FIFO (First In, First Out), es decir, los clientes son atendidos en el
                    orden en que llegan.</li>
                <li>La tasa de llegada de clientes es λ (lambda) por unidad de tiempo.</li>
                <li>La tasa de servicio de cada servidor individual es μ (mu) por unidad de tiempo.</li>
            </ul>
            <p>
                Este modelo se utiliza para analizar sistemas donde múltiples servidores atienden a una única cola de
                clientes, como en centros de atención telefónica, ventanillas de banco, o sistemas de procesamiento
                paralelo en computación.
            </p>
        </div>

        <!-- Características del Modelo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Características del Modelo</h2>
            <div class="bg-primary text-tertiary p-4 rounded-lg mb-4">
                <h3 class="text-xl font-bold mb-2">Probabilidad de que un cliente tenga que esperar:</h3>
                <p class="mb-2">P<sub>w</sub> = (λ/μ)ⁿ / (n! (1 - ρ)) * [Σ<sub>i=0</sub><sup>n-1</sup> (λ/μ)<sup>i</sup>
                    / i! + (λ/μ)<sup>n</sup> / n! * (1 - ρ)]</p>
                <p>Donde:</p>
                <ul class="list-disc list-inside">
                    <li>λ: Tasa de llegadas de clientes</li>
                    <li>μ: Tasa de servicio de cada servidor</li>
                    <li>c: Número de servidores</li>
                    <li>ρ: Tasa de utilización por servidor (ρ = λ / (c * μ))</li>
                </ul>
            </div>
            <p class="mb-4">
                La probabilidad de que un cliente tenga que esperar es esencial para la planificación de recursos en el
                sistema, ya que indica qué porcentaje de los clientes experimentará tiempos de espera.
            </p>
            <div class="bg-primary text-tertiary p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Número promedio de clientes en el sistema:</h3>
                <p>L = λ / (μ - λ / c)</p>
            </div>
        </div>

        <!-- Aplicaciones Prácticas -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones Prácticas</h2>
            <p>
                El modelo M/M/c se aplica en diversas situaciones prácticas, como:
            </p>
            <ul class="list-disc list-inside mb-4">
                <li>Análisis y optimización de sistemas de servidor múltiple, como centros de atención al cliente, cajas
                    de supermercados, etc.</li>
                <li>Planificación y diseño de sistemas de colas con múltiples servidores, como en aeropuertos, bancos,
                    restaurantes, etc.</li>
                <li>Evaluación del impacto del número de servidores en el rendimiento del sistema.</li>
            </ul>
        </div>

        <!-- Comparación con Otros Modelos -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Comparación con Otros Modelos</h2>
            <p>
                El modelo M/M/c generaliza el modelo M/M/1 al considerar múltiples servidores. También puede ser
                comparado con modelos como M/G/s y G/G/s, que relajan los supuestos de distribuciones exponenciales.
            </p>
        </div>

        <!-- Ejemplo Interactivo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejemplo Interactivo</h2>
            <p class="mb-4">
                A continuación, se presenta un ejemplo interactivo basado en el caso de un centro de atención al
                cliente. Puedes ajustar los parámetros para ver cómo afectan al sistema.
            </p>
            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Simulador de Cola M/M/c</h2>

                <div class="mb-6">
                    <p class="mb-2">Este modelo simula un sistema de colas con múltiples servidores, llegadas de Poisson
                        y tiempos de servicio exponenciales.</p>
                    <ul class="list-disc list-inside">
                        <li>El sistema tiene {{ servers }} servidores</li>
                        <li>Las llegadas siguen una distribución de Poisson con tasa λ = {{ arrivalRate }} por hora</li>
                        <li>La tasa de servicio μ es {{ serviceRate }} por hora para cada servidor</li>
                    </ul>
                </div>

                <div class="flex justify-center mb-6">
                    <div class="flex items-center">
                        <User class="text-blue-500 mr-2" />
                        <ArrowRight class="text-gray-500 mx-2" />
                        <div class="flex flex-col items-center">
                            <Users v-for="i in servers" :key="i" class="text-green-500 my-1" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div>
                        <label class="block text-sm font-medium mb-1">Servidores (c)</label>
                        <input type="number" v-model.number="servers" @input="servers = Math.max(1, servers)"
                            class="w-full bg-white text-gray-800 p-2 rounded" />
                    </div>
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
                    <p>Tasa de utilización (ρ): {{ (utilizationRate * 100).toFixed(2) }}%</p>
                    <p>Probabilidad de espera (Pw): {{ (probWait * 100).toFixed(2) }}%</p>
                    <p>Longitud promedio de la cola (Lq): {{ avgQueueLength.toFixed(2) }}</p>
                    <p>Tiempo promedio de espera (Wq): {{ avgWaitTime.toFixed(2) }} horas</p>
                </div>
            </div>
            
        </div>

        <div class="mt-8 text-sm text-quaternary">
            <p>© 2024 Teoría de Colas - Objetos Virtuales de Aprendizaje</p>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import { User, ArrowRight, Users } from 'lucide-vue-next';

const servers = ref(3);
const arrivalRate = ref(10);
const serviceRate = ref(4);

const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

const utilizationRate = computed(() => arrivalRate.value / (servers.value * serviceRate.value));

const p0 = computed(() => {
    const rho = utilizationRate.value;
    let sum = 0;
    for (let i = 0; i < servers.value; i++) {
        sum += Math.pow(servers.value * rho, i) / factorial(i);
    }
    sum += (Math.pow(servers.value * rho, servers.value) / (factorial(servers.value) * (1 - rho)));
    return 1 / sum;
});

const probWait = computed(() => {
    const rho = utilizationRate.value;
    return (Math.pow(servers.value * rho, servers.value) * p0.value) / (factorial(servers.value) * (1 - rho));
});

const avgQueueLength = computed(() => {
    const rho = utilizationRate.value;
    return (rho * probWait.value) / (1 - rho);
});

const avgWaitTime = computed(() => avgQueueLength.value / arrivalRate.value);

watch([servers, arrivalRate, serviceRate], () => {
    if (utilizationRate.value >= 1) {
        alert('El sistema es inestable. La tasa de llegadas es mayor o igual a la capacidad de servicio total.');
    }
});
</script>