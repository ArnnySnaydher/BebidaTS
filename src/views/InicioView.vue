<script setup lang="ts">
import { useBebidasStore } from '@/stores/bebidas'
import RecetasComponent from '@/components/RecetasComponent.vue'

const bebidas = useBebidasStore()
</script>
<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <p v-if="bebidas.noRecetas" class="my-10 text-center text-2xl">No hay Resultados</p>
  <div v-else class="grid grid-sols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecetasComponent
      v-for="receta in bebidas.recetas"
      :receta="receta"
      :key="receta.idDrink"
    ></RecetasComponent>
  </div>
</template>
