import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";
import Vue3Marquee from "vue3-marquee";
import PrimeVue from 'primevue/config';
const app = createApp(App);
app.use(PrimeVue);
app.use(Vue3Marquee);
app.use(createPinia());
app.use(router);

app.mount("#app");
