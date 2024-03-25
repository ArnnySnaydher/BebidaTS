<script setup lang="ts">
import { useFavoritosStore } from '@/stores/favoritos'
import RecetasComponent from '@/components/RecetasComponent.vue'

const favoritos = useFavoritosStore()
</script>
<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  <div class="grid grid-sols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecetasComponent
      v-for="receta in favoritos.favoritos"
      :receta="receta"
      :key="receta.idDrink"
    ></RecetasComponent>
  </div>
</template>
