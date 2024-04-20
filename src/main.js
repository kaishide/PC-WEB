import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import SelectButton from "primevue/selectbutton";
import i18n from "@/i18n.js";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.component('pv-toolbar', Toolbar);
app.component('pv-card', Card);
app.component('pv-select-button', SelectButton);
app.use(i18n);
app.mount('#app');