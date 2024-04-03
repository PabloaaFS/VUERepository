<template>
  <div>
    <!-- Título de la página -->
    <h1>Albums</h1>
    <!-- Botón para agregar un nuevo álbum -->
    <v-btn color="primary" @click="addAlbum">Add Album</v-btn>
    <!-- Lista de álbumes -->
    <v-list>
      <!-- El componente v-list-item se repetirá para cada elemento en la matriz albums. 
        Para cada iteración del bucle, album representa un álbum específico en la matriz. 
        ":key="album.id" se utiliza para proporcionar una clave única para cada elemento de lista generado. 
        Identifica de manera eficiente cada elemento y realiza actualizaciones de manera efectiva cuando cambia la lista de álbumes.-->
      <v-list-item v-for="album in albums" :key="album.id">
        <v-list-item-content>
          <!-- Muestra el título del álbum actual en el elemento-->
          <v-list-item-title>{{ album.title }}</v-list-item-title>
          <!-- Muestra el nombre del artista del álbum actual utilizando la función getArtistName(), 
            que toma el ID del artista del álbum como argumento y devuelve el nombre del artista correspondiente.-->
          <v-list-item-subtitle>Artist: {{ getArtistName(album.artistId) }}</v-list-item-subtitle>
        </v-list-item-content>
        <!-- Acciones para cada álbum (Editar y Borrar) -->
        <v-list-item-action>
          <v-btn @click="editAlbum(album)">Edit</v-btn>
          <v-btn @click="deleteAlbum(album.id)">Delete</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- Formulario para editar un álbum, entrada de texto para editar el título del álbum -->
    <div v-if="isEditing">
      <input type="text" v-model="editingAlbumTitle" placeholder="Album Title">
      <!-- Desplegable para seleccionar el artista del álbum. "Dense" reduce espacio vertical entre los elementos del componente-->
      <v-select v-model="editingAlbumArtist" :items="artists" item-value="id" item-text="name" label="Select Artist"
        dense></v-select>
      <!-- Botón para guardar los cambios -->
      <v-btn color="primary" @click="saveEdit">Save</v-btn>
      <!-- Botón para cancelar la edición -->
      <v-btn color="grey" @click="cancelEdit">Cancel</v-btn>
    </div>
  </div>
</template>

<!-- data() define las variables que controlan el estado de edición de un álbum en el componente. 
  Utilizadas para rastrear si el componente está en modo de edición, editando y los detalles específicos del álbum en edición,
  como su título y el artista asociado.-->
<script>
export default {
  data() {
    return {
      isEditing: false,
      editingAlbum: null,
      editingAlbumTitle: '',
      editingAlbumArtist: null
    };
  },
  computed: {
    // Obtener la lista de álbumes del estado Vuex
    albums() {
      return this.$store.getters.getAlbums;
    },
    // Obtener la lista de artistas del estado Vuex
    artists() {
      return this.$store.getters.getArtists;
    }
  },
  methods: {
    // Método para agregar un nuevo álbum
    addAlbum() {
      const newAlbum = { id: this.albums.length + 1, title: 'New Album', artistId: null };
      this.$store.dispatch('addAlbum', newAlbum);
    },
    // Método para editar un álbum
    editAlbum(album) {
      // Guardar el álbum actual para poder revertir los cambios si el usuario cancela la edición
      this.editingAlbum = album;
      // Abrir el formulario de edición y mostrar el título y el artista actual del álbum
      this.editingAlbumTitle = album.title;
      // Actualizar el ID del artista para que coincida con el artista del álbum
      this.editingAlbumArtist = album.artistId;
      this.isEditing = true;
    },
    // Método para cancelar la edición de un álbum
    cancelEdit() {
      // Cancelar la edición y revertir los cambios
      this.isEditing = false;
      this.editingAlbumTitle = '';
      this.editingAlbumArtist = null;
      this.editingAlbum = null;
    },
    // Método para guardar los cambios realizados en la edición de un álbum
    saveEdit() {
      // Actualizar el título y el artista del álbum en el estado Vuex
      this.$store.commit('editAlbum', {
        id: this.editingAlbum.id,
        newTitle: this.editingAlbumTitle,
        newArtistId: this.editingAlbumArtist 
      });
      // Finalizar la edición
      this.isEditing = false;
      this.editingAlbumTitle = '';
      this.editingAlbumArtist = null;
      this.editingAlbum = null;
    },
    // Método para eliminar un álbum
    deleteAlbum(id) {
      this.$store.dispatch('deleteAlbum', id);
    },
    // Método para obtener el nombre del artista basado en su ID
    getArtistName(artistId) {
      const artist = this.artists.find(artist => artist.id === artistId);
      return artist ? artist.name : 'Unknown';
    }
  }
};
</script>
