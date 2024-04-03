<template>
  <div>
    <!-- Título de la página -->
    <h1>Artists</h1>
    <!-- Botón para agregar un nuevo artista -->
    <v-btn color="primary" @click="addArtist">Add Artist</v-btn>
    <!-- Lista de artistas -->
    <v-list>
      <!-- El componente v-list-item se repetirá para cada elemento en la matriz artists. 
        Para cada iteración del bucle, artist representa un artista específico en la matriz. 
        ":key="artist.id" se utiliza para proporcionar una clave única para cada elemento de lista generado. 
        Identifica de manera eficiente cada elemento y realiza actualizaciones de manera efectiva cuando cambia la lista de artistas.-->
      <v-list-item v-for="artist in artists" :key="artist.id">
        <v-list-item-content>
          <!-- Muestra el nombre del artista actual en el elemento-->
          <v-list-item-title>{{ artist.name }}</v-list-item-title>
        </v-list-item-content>
        <!-- Acciones para cada artista (Editar y Borrar) -->
        <v-list-item-action>
          <v-btn @click="editArtist(artist)">Edit</v-btn>
          <v-btn @click="deleteArtist(artist.id)">Delete</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- Formulario para editar un artista, entrada de texto para editar el nombre del artista -->
    <div v-if="isEditing">
      <input type="text" v-model="editingArtistName">
      <!-- Botón para guardar los cambios -->
      <v-btn color="primary" @click="saveEdit">Save</v-btn>
      <!-- Botón para cancelar la edición -->
      <v-btn color="grey" @click="cancelEdit">Cancel</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      editingArtist: null,
      editingArtistName: ''
    };
  },
  computed: {
    // Obtener la lista de artistas del estado Vuex
    artists() {
      return this.$store.getters.getArtists;
    }
  },
  methods: {
    // Método para agregar un nuevo artista
    addArtist() {
      const newArtist = { id: this.artists.length + 1, name: 'New Artist' };
      this.$store.dispatch('addArtist', newArtist);
    },
    // Método para editar un artista
    editArtist(artist) {
      // Guardar el artista actual para poder revertir los cambios si el usuario cancela la edición
      this.editingArtist = artist;
      // Abrir el formulario de edición y mostrar el nombre actual del artista
      this.editingArtistName = artist.name;
      this.isEditing = true;
    },
    // Método para cancelar la edición de un artista
    cancelEdit() {
      // Cancelar la edición y revertir los cambios
      this.isEditing = false;
      this.editingArtistName = '';
      this.editingArtist = null;
    },
    // Método para guardar los cambios realizados en la edición de un artista
    saveEdit() {
      // Actualizar el nombre del artista en el estado Vuex
      this.$store.commit('editArtist', { id: this.editingArtist.id, newName: this.editingArtistName });
      // Finalizar la edición
      this.isEditing = false;
      this.editingArtistName = '';
      this.editingArtist = null;
    },
    // Método para eliminar un artista
    deleteArtist(id) {
      this.$store.dispatch('deleteArtist', id);
    }
  }
};
</script>
