<template>
  <!-- La plantilla de App.vue define la estructura principal de la aplicación -->
  <v-app>
    <!-- Barra de la aplicación con color de fondo primario -->
    <v-app-bar app color="primary">
      <!-- Logo de la aplicación -->
      <img src="src\assets\fslogo.png" alt="Logo" height="30" style="margin-right: 15px;">
      <!-- Título de la aplicación -->
      <v-toolbar-title>VUExercise</v-toolbar-title>
    </v-app-bar>

    <!-- Contenido principal de la aplicación -->
    <v-main>
      <!-- Contenedor principal fluido que contiene las vistas de enrutamiento -->
      <v-container fluid>
        <!-- El componente router-view se utiliza para mostrar las vistas correspondientes a las rutas -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App', // Nombre del componente
};
</script>

<style>
/* Estilo global de la aplicación */
body {
  font-family: 'Star Jedi', sans-serif; /* Fuente del texto */
  background-color: white; /* Color de fondo */
}

/* Estilo del contenido principal */
main {
  font-family: 'Star Jedi', sans-serif; /* Fuente del texto */
  padding: 20px; /* Relleno interior */
  color: black; /* Color del texto */
}

/* Estilo del título de la barra de navegación */
.v-toolbar__title {
  font-family: 'Star Jedi', sans-serif; /* Fuente del texto */
  font-size: 30px; /* Tamaño del texto */
  color: white; /* Color del texto */
}
</style>
