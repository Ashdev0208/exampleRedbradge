import { createApp } from 'vue'
import App from './App.vue';
import Routes from '../Router/index.js';
import Header from "./components/Header.vue"
const app = createApp(App);
app.component('Header',Header);

app.use(Routes)
app.mount('#app');

