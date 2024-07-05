<template>
    <h1>Modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera</h1>
    <p>El modelo de múltiples canales con llegadas Poisson, tiempos de servicio arbitrarios y sin línea de espera,
        también conocido como modelo de pérdidas M/G/m/m, es una variación del modelo de colas M/M/m. implica un sistema
        en el cual no se permite esperar. Las unidades o clientes que llegan buscan que los atiendan en uno de varios
        canales de servicio. Si todos los canales están ocupados, a las unidades que llegan se les niega el acceso al
        sistema. En terminología de línea de espera, las llegadas que ocurren cuando el sistema está completo son
        bloqueadas y eliminadas del sistema. Tales clientes pueden perderse o intentar regresar más tarde al sistema.
    </p>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <p class="mb-4">El modelo específico considerado en esta sección se basa en los siguientes supuestos: </p>
        <ul class="list-disc pl-6 space-y-2">
            <li>El sistema tiene <span class="font-semibold">k canales</span>.</li>
            <li>Las llegadas siguen una <span class="font-semibold">distribución de probabilidad de Poisson</span>, con
                tasa de llegadas <span class="italic">\(\lambda\)</span>.</li>
            <li>El tiempo de servicio de cada canal puede tener <span class="font-semibold">cualquier distribución de
                    probabilidad</span>.</li>
            <li>La <span class="font-semibold">tasa de servicios \(\mu\)</span> es la misma para cada canal.</li>
            <li>Una llegada entra al sistema sólo si por lo menos <span class="font-semibold">un canal está
                    disponible</span>.</li>
            <li>Una llegada que ocurre cuando todos los canales están ocupados es <span
                    class="font-semibold">bloqueada</span>, es decir, se le niega el servicio y no se le permite entrar
                al sistema.</li>
        </ul>
    </div>
</template>
<script setup>
</script>