import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // Estado centralizado de la aplicación
  state: {
    artists: [], // Lista de artistas
    albums: [], // Lista de álbumes
    characters: [] // Lista de personajes de Star Wars
  },
  // Las mutations modifican el estado, cada mutación realiza un cambio específico en el estado.
  mutations: {
    // Mutaciones para artistas
    addArtist(state, artist) {
      state.artists.push(artist);
    },
    editArtist(state, { id, newName }) {
      const artist = state.artists.find(artist => artist.id === id);
      if (artist) {
        artist.name = newName;
      }
    },
    deleteArtist(state, id) {
      state.artists = state.artists.filter(artist => artist.id !== id);
    },

    // Mutaciones para álbumes
    addAlbum(state, album) {
      state.albums.push(album);
    },
    editAlbum(state, { id, newTitle, newArtistId }) {
      const album = state.albums.find(album => album.id === id);
      if (album) {
        album.title = newTitle;
        album.artistId = newArtistId; 
      }
    },    
    deleteAlbum(state, id) {
      state.albums = state.albums.filter(album => album.id !== id);
    },

    // Mutación para personajes de Star Wars
    setCharacters(state, characters) {
      state.characters = characters;
    }
  },
  // Define las acciones que realizan operaciones asíncronas, como llamadas a la API
  // y luego llaman a las mutaciones para modificar el estado.
  actions: {
    // Acciones para artistas
    addArtist({ commit }, artist) {
      commit('addArtist', artist);
    },
    editArtist({ commit }, payload) {
      commit('editArtist', payload);
    },
    deleteArtist({ commit }, id) {
      commit('deleteArtist', id);
    },

    // Acciones para álbumes
    addAlbum({ commit }, album) {
      commit('addAlbum', album);
    },
    editAlbum({ commit }, payload) {
      commit('editAlbum', payload);
    },
    deleteAlbum({ commit }, id) {
      commit('deleteAlbum', id);
    },

    // Acción para obtener personajes de Star Wars
    async fetchCharacters({ commit }) {
      try {
        // Llamada a la API para obtener personajes de Star Wars
        const response = await axios.get('https://swapi.dev/api/people');
        // Actualiza el estado con los personajes obtenidos
        commit('setCharacters', response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
  },
  // Permite acceder a los datos del estado de una manera computada y reactiva.
  getters: {
    // Getters para acceder a los datos del estado
    getArtists(state) {
      return state.artists; // Devuelve la lista de artistas
    },
    getAlbums(state) {
      return state.albums; // Devuelve la lista de álbumes
    },
    getCharacters(state) {
      return state.characters; // Devuelve la lista de personajes de Star Wars
    }
  }
});
