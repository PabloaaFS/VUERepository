<template>
    <!-- Contenedor principal utilizando Vuetify -->
    <v-container>
      <!-- Título de la página -->
      <h1 class="title">STAR WARS CHARACTERS</h1>
      <!-- Botón para solicitar los personajes -->
      <div class="text-center"> <!-- Centra el botón -->
        <v-btn color="primary" @click="fetchCharacters">Fetch Characters</v-btn>
      </div>
      <!-- Contenedor de filas y columnas para mostrar los personajes -->
      <v-row>
        <!-- Bucle a través de cada personaje y muestra su información en una tarjeta -->
        <v-col v-for="character in characters" :key="character.name" cols="12" sm="6" md="4">
          <v-card class="character-card"> <!-- Tarjeta para cada personaje -->
            <!-- Título de la tarjeta: nombre del personaje -->
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-text> <!-- Contenido de la tarjeta: información del personaje -->
              <p>Height: {{ character.height }}</p>
              <p>Mass: {{ character.mass }}</p>
              <p>Hair_color: {{ character.hair_color }}</p>
              <p>Skin_color: {{ character.skin_color }}</p>
              <p>Birth_year: {{ character.birth_year }}</p>
              <p>Gender: {{ character.gender }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    computed: {
      // Obtener la lista de personajes del estado Vuex
      characters() {
        return this.$store.getters.getCharacters;
      }
    },
    methods: {
      // Método para llamar a la acción para obtener los personajes de la API
      fetchCharacters() {
        this.$store.dispatch('fetchCharacters');
      }
    }
  };
  </script>
  
  <style scoped>
  .title {
    font-family: 'Star Jedi', sans-serif; /* Fuente temática de Star Wars */
    font-weight: bold;
    color: crimson; /* Color del título */
    text-align: center; /* Alineación del texto al centro */
  }
  
  .character-card {
    background-color: tan; /* Color de fondo de la tarjeta */
    color: white; /* Color del texto */
    border: 1px solid #fff; /* Borde de la tarjeta */
  }
  
  .text-center { 
    text-align: center; /* Alineación del texto al centro */
    margin-top: 20px; /* Margen superior */
    margin-bottom: 20px; /* Margen inferior */
  }
  </style>
  