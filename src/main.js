import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueAxios } from "./utils/request";

const app = createApp(App);

app.use(router);
app.use({ VueAxios, router });
app.mount("#app");
