<template>
    <div class="bg-tertiary text-primary min-h-screen p-8">
        <!-- Imagen de Cabecera -->
        <img class="w-full h-96 rounded object-cover mb-8" src="/image/imageHome/imgTema4.jpeg"
            alt="Llegadas y Tiempo de Servicio con Distribución General, c Servidores">

        <!-- Título Principal -->
        <h1 class="text-4xl font-bold my-6">Llegadas y Tiempo de Servicio con Distribución General, c Servidores</h1>

        <!-- Introducción -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
            <p class="mb-4">
                En este sistema, las llegadas de clientes tienen una distribución general G, lo que significa que los
                tiempos entre llegadas pueden seguir cualquier distribución de probabilidad, con una tasa media de
                llegadas λ. Los tiempos de servicio también siguen una distribución general G, con una tasa media de
                servicio μ. El sistema cuenta con c servidores idénticos en paralelo, y la disciplina de la cola es FCFS
                (First Come, First Served). La capacidad del sistema es infinita, lo que permite un número ilimitado de
                clientes en espera. Para que el sistema sea estable, se requiere que la intensidad de tráfico, definida
                como ρ = λ / (c·μ), sea menor que 1.
            </p>
            <p>
                G (primera): Las llegadas siguen una distribución general <br>
                G (segunda): El tiempo de servicio tiene una distribución general <br>
                c: Hay c servidores idénticos en paralelo
            </p>
        </div>

        <!-- Características del Modelo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Características del Modelo</h2>
            <div class="bg-primary text-tertiary p-4 rounded-lg mb-4">
                <h3 class="text-xl font-bold mb-2">Fórmulas Principales:</h3>
                <ul class="list-disc list-inside mb-4">
                    <li><strong>Utilización del sistema (ρ):</strong> ρ = λ / (cμ) donde λ es la tasa media de llegadas
                        y μ es la tasa media de servicio.</li>
                    <li><strong>Límite superior de Kingman para el tiempo medio de espera en cola (Wq):</strong> Wq ≤
                        (ca^2 + cs^2) / (2μ) * ρ / (c(1-ρ))</li>
                    <li><strong>Aproximación de Allen-Cunneen para la longitud media de la cola (Lq):</strong> Lq ≈
                        ρ^(√(2(c+1))-1) * (ca^2 + cs^2) / 2 * P(W>0)</li>
                    <li><strong>Tiempo medio en el sistema (W):</strong> W = Wq + 1/μ</li>
                    <li><strong>Número medio de clientes en el sistema (L):</strong> L = λW (Ley de Little)</li>
                </ul>
            </div>
            <p class="mb-4">
                Debido a la generalidad del modelo G/G/c, las fórmulas exactas son complejas o no existen para muchas
                medidas de rendimiento. Sin embargo, se utilizan aproximaciones y límites para el análisis.
            </p>
        </div>

        <!-- Aplicaciones Prácticas -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones Prácticas</h2>
            <ul class="list-disc list-inside mb-4">
                <li>Sistemas de producción con variabilidad en llegadas y tiempos de procesamiento.</li>
                <li>Centros de atención al cliente con patrones de llegada y servicio irregulares.</li>
                <li>Sistemas de transporte y logística.</li>
                <li>Servicios de salud y emergencias.</li>
                <li>Sistemas de procesamiento de datos en entornos complejos.</li>
            </ul>
        </div>

        <!-- Comparación con Otros Modelos -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Comparación con Otros Modelos</h2>
            <ul class="list-disc list-inside mb-4">
                <li><strong>Vs M/M/c:</strong> G/G/c es más general y realista, pero más difícil de analizar
                    matemáticamente.</li>
                <li><strong>Vs M/G/c:</strong> G/G/c permite una distribución general para las llegadas, siendo más
                    flexible.</li>
                <li><strong>Vs G/G/1:</strong> G/G/c considera múltiples servidores, adaptándose mejor a sistemas de
                    mayor escala.</li>
            </ul>
        </div>

        <!-- Ejercicio de Ejemplo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejercicio de Ejemplo</h2>
            <p class="mb-4">
                Un taller de reparación de automóviles tiene 3 mecánicos. Los tiempos entre llegadas de los autos tienen
                una media de 40 minutos y una desviación estándar de 30 minutos. Los tiempos de servicio tienen una
                media de 100 minutos y una desviación estándar de 60 minutos. Calcule:
            </p>
            <ul class="list-disc list-inside mb-4">
                <li><strong>a) La utilización del sistema:</strong> λ = 1/40 = 0.025 autos/minuto μ = 1/100 = 0.01
                    autos/minuto c = 3 mecánicos ρ = λ / (cμ) = 0.025 / (3 * 0.01) = 0.833</li>
                <li><strong>b) Un límite superior para el tiempo medio de espera en cola:</strong> ca^2 = (30/40)^2 =
                    0.5625 cs^2 = (60/100)^2 = 0.36 Wq ≤ (0.5625 + 0.36) / (2 * 0.01) * 0.833 / (3 * (1-0.833)) ≤ 278.44
                    minutos</li>
                <li><strong>c) Una aproximación de la longitud media de la cola:</strong> (Utilizando una aproximación
                    simple para P(W>0)) P(W>0) ≈ ρ^c * c / (c! * (1-ρ)) ≈ 0.7 Lq ≈ 0.833^(√(2(3+1))-1) * (0.5625 + 0.36)
                    / 2 * 0.7 ≈ 0.3969</li>
            </ul>
        </div>

        <!-- Ejemplo Interactivo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejemplo Interactivo</h2>
            <p class="mb-4">
                A continuación, se presenta un ejemplo interactivo basado en el caso del taller de reparación de
                automóviles descrito. Puedes ajustar los parámetros para ver cómo afectan al sistema.
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