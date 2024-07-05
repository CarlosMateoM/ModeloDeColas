<script setup>
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue';
import navbar from "@/components/navbar.vue";
</script>
<template>
  <div>
    <navbar />
  </div>
  <RouterView />
  <div>
    <Footer />
  </div>
</template>

