<template>
<div class="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
  <button @click="goBack" class="bg-secondary text-primary rounded-full p-3 shadow-lg hover:bg-opacity-80 transition duration-300">
    <
  </button>
</div>

<div class="container mx-auto px-4 max-w-4xl">
  <img class="w-full h-96 rounded object-cover" src="/image/imageHome/imgIntro.jpeg" alt="Teoría de Colas">

  <h1 class="text-4xl font-bold my-6">Teoría de Colas</h1>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Introducción</h2>
    <p class="mb-4">
      La teoría de colas es una rama de la investigación de operaciones que estudia el comportamiento de los sistemas de espera. Se ocupa del análisis matemático de los fenómenos de espera en líneas o colas. El objetivo principal es desarrollar modelos para predecir el comportamiento de sistemas que proporcionan servicio a demandas aleatorias y optimizar su rendimiento.
    </p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Conceptos Fundamentales</h2>
    <ul class="list-disc list-inside">
      <li><strong>Cliente:</strong> Entidad que requiere un servicio.</li>
      <li><strong>Servidor:</strong> Recurso que proporciona el servicio solicitado por el cliente.</li>
      <li><strong>Cola:</strong> Línea de espera formada por clientes.</li>
      <li><strong>Tasa de llegada (λ):</strong> Número promedio de clientes que llegan al sistema por unidad de tiempo.</li>
      <li><strong>Tasa de servicio (μ):</strong> Número promedio de clientes que pueden ser atendidos por unidad de tiempo.</li>
      <li><strong>Disciplina de la cola:</strong> Regla por la cual se selecciona el siguiente cliente a ser atendido.</li>
      <li><strong>Capacidad del sistema:</strong> Número máximo de clientes que pueden estar en el sistema (en cola o siendo atendidos).</li>
      <li><strong>Estado del sistema:</strong> Número de clientes en el sistema en un momento dado.</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Notación de Kendall</h2>
    <p class="mb-4">
      La notación de Kendall es una forma estándar de describir y clasificar un sistema de colas. Se representa como A/B/C/D/E/F, donde:
    </p>
    <ul class="list-disc list-inside">
      <li><strong>A:</strong> Distribución de tiempo entre llegadas</li>
      <li><strong>B:</strong> Distribución del tiempo de servicio</li>
      <li><strong>C:</strong> Número de servidores</li>
      <li><strong>D:</strong> Capacidad del sistema</li>
      <li><strong>E:</strong> Tamaño de la población</li>
      <li><strong>F:</strong> Disciplina de la cola</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Medidas de Rendimiento</h2>
    <ul class="list-disc list-inside">
      <li><strong>L:</strong> Número promedio de clientes en el sistema</li>
      <li><strong>Lq:</strong> Longitud promedio de la cola</li>
      <li><strong>W:</strong> Tiempo promedio que un cliente pasa en el sistema</li>
      <li><strong>Wq:</strong> Tiempo promedio de espera en la cola</li>
      <li><strong>ρ:</strong> Factor de utilización del sistema</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Tipos de Modelos de Colas</h2>
    <ul class="list-disc list-inside">
      <li><strong>M/M/1:</strong> Un servidor, llegadas y servicios exponenciales</li>
      <li><strong>M/M/c:</strong> Múltiples servidores, llegadas y servicios exponenciales</li>
      <li><strong>M/G/1:</strong> Un servidor, llegadas exponenciales, servicios con distribución general</li>
      <li><strong>G/G/1:</strong> Un servidor, llegadas y servicios con distribución general</li>
      <li><strong>M/M/∞:</strong> Infinitos servidores, llegadas y servicios exponenciales</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Aplicaciones</h2>
    <ul class="list-disc list-inside">
      <li>Gestión de tráfico en redes de comunicación</li>
      <li>Optimización de sistemas de atención al cliente</li>
      <li>Diseño de sistemas de producción y manufactura</li>
      <li>Planificación de capacidad en centros de llamadas</li>
      <li>Gestión de inventarios y cadenas de suministro</li>
      <li>Optimización de sistemas de transporte público</li>
      <li>Diseño de sistemas de emergencia y servicios de salud</li>
      <li>Gestión de recursos en sistemas informáticos</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Importancia en la Toma de Decisiones</h2>
    <p class="mb-4">
      La teoría de colas proporciona herramientas valiosas para la toma de decisiones en diversos campos:
    </p>
    <ul class="list-disc list-inside">
      <li>Determinación del número óptimo de servidores</li>
      <li>Evaluación de políticas de prioridad en la atención</li>
      <li>Análisis de costos asociados a tiempos de espera y servicio</li>
      <li>Mejora de la satisfacción del cliente mediante la reducción de tiempos de espera</li>
      <li>Optimización de la utilización de recursos</li>
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold mb-4 text-quaternary">Conclusión</h2>
    <p class="mb-4">
      La teoría de colas es una herramienta poderosa para analizar y optimizar sistemas donde la demanda y el servicio están sujetos a variabilidad. Su aplicación abarca desde pequeñas empresas hasta grandes corporaciones, ayudando a mejorar la eficiencia operativa y la satisfacción del cliente en diversos sectores.
    </p>
  </div>
</div>
</template>
<script setup>

const goBack = () => {
  window.history.back();
};
</script>