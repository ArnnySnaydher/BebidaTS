<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/HeaderComponent.vue';
</script>

<template>


  <Header>

  </Header>

  <main class="container mx-auto mt-10 ">
    <RouterView></RouterView>
  </main>

  
</template>
