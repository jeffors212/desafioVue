import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from './router';

// Importação dos estilos CSS do Bootstrap e BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Cria a aplicação Vue
const app = createApp(App)

// Instala o BootstrapVue3
app.use(BootstrapVue3)

// Monta a aplicação
app.use(router);
app.mount('#app')