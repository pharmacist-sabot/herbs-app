import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const app = createApp(App);
const secret = process.env.MY_SECRET;
app.use(router);
app.mount('#app');
