<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <articleSummary
        :image="Imagepng"
        :title="Titulodelarticulo"
        :description="Descripcion"
        :link="Linkdelarticulo"
        />
    </div>
</template>
<script setup>
import articleSummary from "@/components/articleSummary.vue"
</script>