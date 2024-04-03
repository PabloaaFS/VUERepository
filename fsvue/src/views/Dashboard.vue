<template>
  <!-- El componente Dashboard consiste en una disposición de tres contenedores que contienen otros componentes -->
  <div>
    <!-- Contenedor principal del panel de control -->
    <div class="dashboard-container">
      <!-- Título del panel de control -->
      <h1>Dashboard</h1>
    </div>
    <!-- Contenedor para el componente Albums -->
    <div class="albums-container">
      <!-- Se inserta el componente Albums dentro de este contenedor -->
      <Albums />
    </div>
    <!-- Contenedor para el componente Artists -->
    <div class="artists-container">
      <!-- Se inserta el componente Artists dentro de este contenedor -->
      <Artists />
    </div>
    <!-- Contenedor para el componente Starwars -->
    <div class="starwars-container">
      <!-- Se inserta el componente Starwars dentro de este contenedor -->
      <Starwars />
    </div>
  </div>
</template>

<script>
import Albums from '../components/Albums.vue';
import Artists from '../components/Artists.vue';
import Starwars from '../components/Starwars.vue';

export default {
  // Se importan los componentes necesarios para mostrar en el Dashboard
  components: {
      Albums,
      Artists,
      Starwars
  }
};
</script>

<style scoped>
.dashboard-container {
/* Estilo para el contenedor principal del panel de control */
color: crimson; /* Color del texto */
}

.albums-container {
/* Estilo para el contenedor del componente Albums */
margin-top: 30px; /* Margen superior */
margin-bottom: 60px; /* Margen inferior */
color: crimson; /* Color del texto */
}

.artists-container {
/* Estilo para el contenedor del componente Artists */
color: crimson; /* Color del texto */
}
</style>
