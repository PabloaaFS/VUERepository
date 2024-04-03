import Vue from 'vue'; // Importa Vue para utilizar el enrutador
import VueRouter from 'vue-router'; // Importa VueRouter para definir las rutas

// Importa los componentes de las vistas y los componentes necesarios para el enrutamiento
import Dashboard from '../views/Dashboard.vue'; // Vista principal del dashboard
import Albums from '../components/Albums.vue'; // Componente para mostrar álbumes
import Artists from '../components/Artists.vue'; // Componente para mostrar artistas
import Starwars from '../components/Starwars.vue'; // Componente para mostrar personajes de Star Wars

Vue.use(VueRouter); // Usa VueRouter en Vue

// Definición de las rutas
const routes = [
  { path: '/', redirect: '/dashboard' }, // Redirige la ruta raíz a la página del dashboard
  { path: '/dashboard', component: Dashboard }, // Ruta para el dashboard
  { path: '/albums', component: Albums }, // Ruta para la página de álbumes
  { path: '/artists', component: Artists }, // Ruta para la página de artistas
  { path: '/starwars', component: Starwars } // Ruta para la página de personajes de Star Wars
];

// Crea una instancia del enrutador con las rutas definidas
const router = new VueRouter({
  mode: 'history', // Utiliza el modo de historial para eliminar el hash de las URLs
  routes // Pasa las rutas definidas al enrutador
});

export default router; // Exporta la instancia del enrutador para su uso en la aplicación
