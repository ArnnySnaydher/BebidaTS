<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderComponent.vue'
import Modal from '@/components/ModalComponent.vue'
import Notificacion from '@/components/NotificacionComponent.vue'
</script>

<template>
  <Header> </Header>

  <main class="container mx-auto mt-10">
    <RouterView></RouterView>
  </main>
  <Modal></Modal>
  <Notificacion></Notificacion>
</template>
