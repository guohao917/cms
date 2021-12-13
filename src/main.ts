import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index"
import store from "@/store"

const app = createApp(App)
// 注意顺序use路由在mount前面，否则加载不出来
app.use(router)
app.use(store)
app.mount("#app");
