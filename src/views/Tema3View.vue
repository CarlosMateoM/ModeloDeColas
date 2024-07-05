<template>
    <div class="bg-tertiary text-primary min-h-screen p-8">
        <!-- Imagen de Cabecera -->
        <img class="w-full h-96 rounded object-cover mb-8" src="/image/imageHome/imgTema3.jpeg"
            alt="Llegadas Markovianas, Tiempo de Servicio con Distribución General, c Servidores">

        <!-- Título Principal -->
        <h1 class="text-4xl font-bold my-6">Llegadas Markovianas, Tiempo de Servicio con Distribución General, c Servidores</h1>

        <!-- Introducción -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
            <p class="mb-4">
                En este sistema, una población infinita de clientes llega según un proceso de Poisson con una tasa constante de llegada λ. El sistema cuenta con “c” servidores idénticos en paralelo, cada uno con una tasa de servicio μ. Los tiempos de servicio siguen una distribución general G, es decir, pueden tener cualquier forma de distribución de probabilidad. La disciplina de la cola es FCFS (First Come, First Served), y la capacidad del sistema es infinita, permitiendo un número ilimitado de clientes en espera. Sin embargo, el análisis del sistema es viable sólo si la intensidad del tráfico, definida como ρ = λ / (c·μ), es menor que 1.
            </p>
            <p>
                M: Las llegadas siguen una distribución de Poisson (proceso Markoviano) <br>
                G: El tiempo de servicio tiene una distribución general (cualquier distribución) <br>
                c: Hay c servidores idénticos en paralelo
            </p>
        </div>

        <!-- Características del Modelo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Características del Modelo</h2>
            <div class="bg-primary text-tertiary p-4 rounded-lg mb-4">
                <h3 class="text-xl font-bold mb-2">Fórmulas Principales:</h3>
                <ul class="list-disc list-inside mb-4">
                    <li><strong>Utilización del sistema (ρ):</strong> ρ = λ / (cμ) donde λ es la tasa de llegadas y μ es la tasa de servicio promedio</li>
                    <li><strong>Probabilidad de que el sistema esté vacío (P0):</strong> P0 = [Σ(n=0 to c-1) ((cρ)^n / n!) + ((cρ)^c / c!) * (1 / (1 - ρ))]^(-1)</li>
                    <li><strong>Longitud media de la cola (Lq):</strong> Lq ≈ P0 * (λ/μ)^c * ρ / (c! * (1-ρ)^2) (Esta es una aproximación, ya que la fórmula exacta para M/G/c es compleja)</li>
                    <li><strong>Tiempo medio de espera en la cola (Wq):</strong> Wq = Lq / λ</li>
                    <li><strong>Número medio de clientes en el sistema (L):</strong> L = Lq + λ/μ</li>
                    <li><strong>Tiempo medio en el sistema (W):</strong> W = Wq + 1/μ</li>
                </ul>
            </div>
            <p class="mb-4">
                Estas fórmulas permiten calcular métricas importantes para la gestión de sistemas de colas con múltiples servidores, facilitando la planificación y optimización de recursos.
            </p>
        </div>

        <!-- Aplicaciones Prácticas -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones Prácticas</h2>
            <ul class="list-disc list-inside mb-4">
                <li>Centros de atención al cliente con múltiples agentes.</li>
                <li>Sistemas de procesamiento de pedidos en línea.</li>
                <li>Servicios de emergencia con múltiples unidades.</li>
                <li>Sistemas de procesamiento de datos con varios servidores.</li>
                <li>Líneas de producción con múltiples estaciones de trabajo.</li>
            </ul>
        </div>

        <!-- Comparación con Otros Modelos -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Comparación con Otros Modelos</h2>
            <ul class="list-disc list-inside mb-4">
                <li><strong>Vs M/M/c:</strong> El M/G/c es más flexible en cuanto al tiempo de servicio, permitiendo cualquier distribución.</li>
                <li><strong>Vs M/G/1:</strong> El M/G/c permite múltiples servidores, lo que lo hace más adecuado para sistemas con mayor capacidad.</li>
                <li><strong>Vs G/G/c:</strong> El M/G/c asume llegadas Poisson, lo que simplifica algunos cálculos pero puede ser menos realista en ciertos escenarios.</li>
            </ul>
        </div>

        <!-- Ejercicio de Ejemplo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejercicio de Ejemplo</h2>
            <p class="mb-4">
                Un centro de atención al cliente tiene 5 agentes. Las llamadas llegan siguiendo un proceso de Poisson con una tasa de 25 llamadas por hora. El tiempo de servicio sigue una distribución general con un promedio de 10 minutos. Calcule:
            </p>
            <ul class="list-disc list-inside mb-4">
                <li><strong>a) La utilización del sistema:</strong> λ = 25 llamadas/hora μ = 6 llamadas/hora (60 minutos / 10 minutos) c = 5 agentes ρ = λ / (cμ) = 25 / (5 * 6) = 0.833</li>
                <li><strong>b) El número medio de clientes en la cola:</strong> Lq ≈ 0.00534 * (25/6)^5 * 0.833 / (5! * (1-0.833)^2) ≈ 3.82 clientes</li>
                <li><strong>c) El tiempo medio de espera en la cola:</strong> Wq = Lq / λ = 3.82 / 25 = 0.1528 horas ≈ 9.17 minutos</li>
            </ul>
        </div>

        <!-- Ejemplo Interactivo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejemplo Interactivo</h2>
            <p class="mb-4">
                A continuación, se presenta un ejemplo interactivo basado en el caso del centro de atención al cliente descrito. Puedes ajustar los parámetros para ver cómo afectan al sistema.
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
// No se necesita lógica adicional aquí
</script>
