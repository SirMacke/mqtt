import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import mqtt from './views/Home.vue';

const app = createApp(App);

app.use(router);

app.provide('$mqtt', mqtt);

app.mount('#app');
