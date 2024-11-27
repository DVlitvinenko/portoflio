import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import directives from "./directives/directives";
import router from "./router/router";

const pinia = createPinia();

const app = createApp(App);

directives.forEach((directive: any) => {
  app.directive(directive.name, directive);
});

app.use(pinia);
app.use(router);

app.mount("#app");
