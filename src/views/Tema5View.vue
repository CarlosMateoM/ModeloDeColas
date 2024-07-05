<template>
    <div class="bg-tertiary text-primary min-h-screen p-8">
        <!-- Imagen de Cabecera -->
        <img class="w-full h-96 rounded object-cover mb-8" src="/image/imageHome/imgTema5.jpeg"
            alt="Llegadas Markovianas, Tiempo de Servicio Exponencial, Infinitos Servidores">

        <!-- Título Principal -->
        <h1 class="text-4xl font-bold my-6">Llegadas Markovianas, Tiempo de Servicio Exponencial, Infinitos Servidores
        </h1>

        <!-- Introducción -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
            <p class="mb-4">
                El modelo M/M/∞ es un sistema de colas que se caracteriza por tener llegadas que siguen un proceso de
                Poisson, tiempos de servicio distribuidos exponencialmente, e infinitos servidores disponibles. Este
                modelo representa una situación idealizada donde nunca se forma una cola, ya que siempre hay un servidor
                disponible para atender a cada cliente que llega al sistema.
            </p>
            <p class="mb-4">
                En el modelo M/M/∞, la tasa de llegadas se denota comúnmente como λ y la tasa de servicio como μ. Una
                propiedad fundamental de este sistema es que el número de clientes presentes en cualquier momento sigue
                una distribución de Poisson con media λ/μ. Esto significa que el número esperado de clientes en el
                sistema es simplemente la relación entre la tasa de llegadas y la tasa de servicio.
            </p>
            <p class="mb-4">
                Una característica notable del M/M/∞ es que el tiempo que un cliente pasa en el sistema es independiente
                del número de otros clientes presentes. De hecho, el tiempo total que un cliente pasa en el sistema es
                idéntico a su tiempo de servicio, ya que no hay tiempo de espera en cola.
            </p>
        </div>

        <!-- Características del Modelo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Características del Modelo</h2>
            <div class="bg-primary text-tertiary p-4 rounded-lg mb-4">
                <h3 class="text-xl font-bold mb-2">Fórmulas Principales:</h3>
                <ul class="list-disc list-inside mb-4">
                    <li><strong>Número medio de clientes en el sistema (L):</strong> L = λ / μ donde λ es la tasa de
                        llegadas y μ es la tasa de servicio.</li>
                    <li><strong>Probabilidad de n clientes en el sistema:</strong> P(n) = (λ/μ)^n * e^(-λ/μ) / n!</li>
                    <li><strong>Varianza del número de clientes en el sistema:</strong> Var(N) = λ / μ</li>
                    <li><strong>Tiempo medio en el sistema (W):</strong> W = 1 / μ</li>
                    <li><strong>Distribución del tiempo total en el sistema:</strong> Es idéntica a la distribución del
                        tiempo de servicio (exponencial con tasa μ).</li>
                    <li><strong>Probabilidad de que el sistema esté vacío:</strong> P(0) = e^(-λ/μ)</li>
                </ul>
            </div>
            <p class="mb-4">
                En este modelo, la ausencia de colas simplifica mucho el análisis y permite cálculos directos basados en
                las tasas de llegada y servicio.
            </p>
        </div>

        <!-- Aplicaciones Prácticas -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones Prácticas</h2>
            <ul class="list-disc list-inside mb-4">
                <li>Modelado de sistemas de autoservicio (por ejemplo, máquinas expendedoras).</li>
                <li>Análisis de sistemas de recursos compartidos con capacidad prácticamente ilimitada.</li>
                <li>Estudio de poblaciones en ecología o epidemiología.</li>
                <li>Modelado de sistemas de computación en la nube con escalado automático.</li>
                <li>Análisis de sistemas de telecomunicaciones con gran cantidad de líneas.</li>
            </ul>
        </div>

        <!-- Comparación con Otros Modelos -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Comparación con Otros Modelos</h2>
            <ul class="list-disc list-inside mb-4">
                <li><strong>Vs M/M/1 o M/M/c:</strong> No hay cola en M/M/∞, lo que simplifica significativamente el
                    análisis.</li>
                <li><strong>Vs M/G/∞:</strong> M/M/∞ asume tiempos de servicio exponenciales, lo que permite cálculos
                    más sencillos.</li>
                <li><strong>Vs G/G/∞:</strong> M/M/∞ es más restrictivo en sus supuestos, pero permite soluciones
                    analíticas exactas.</li>
            </ul>
        </div>

        <!-- Ejercicio de Ejemplo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejercicio de Ejemplo</h2>
            <p class="mb-4">
                Un gran centro comercial tiene un sistema de carros de compra automáticos. Los clientes llegan según un
                proceso de Poisson con una tasa de 30 por hora. Cada cliente usa un carro durante un tiempo que sigue
                una distribución exponencial con media de 45 minutos. Calcule:
            </p>
            <ul class="list-disc list-inside mb-4">
                <li><strong>a) El número medio de carros en uso:</strong> λ = 30 clientes/hora μ = 60/45 = 4/3
                    clientes/hora L = λ / μ = 30 / (4/3) = 22.5 carros</li>
                <li><strong>b) La probabilidad de que haya exactamente 20 carros en uso:</strong> P(20) = (22.5)^20 *
                    e^(-22.5) / 20! ≈ 0.0836 o 8.36%</li>
                <li><strong>c) La probabilidad de que no haya ningún carro en uso:</strong> P(0) = e^(-λ/μ) = e^(-22.5)
                    ≈ 1.67 x 10^-10 o 0.0000000167%</li>
            </ul>
        </div>

        <!-- Ejemplo Interactivo -->
        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-quaternary">Ejemplo Interactivo</h2>
            <p class="mb-4">
                A continuación, se presenta un ejemplo interactivo basado en el caso del centro comercial descrito.
                Puedes ajustar los parámetros para ver cómo afectan al sistema.
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