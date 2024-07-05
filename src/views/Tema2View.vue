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
            <!-- Aquí puedes añadir un componente interactivo o una simulación si la tienes -->
        </div>

        <!-- Pie de Página -->
        <div class="mt-8 text-sm text-quaternary">
            <p>© 2024 Teoría de Colas - Objetos Virtuales de Aprendizaje</p>
        </div>
    </div>
</template>
<script setup>
</script>