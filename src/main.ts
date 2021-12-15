import { createApp } from "vue";
// import './api/axios_demo'
// 全局引入
import 'element-plus/theme-chalk/index.css'
import App from "./App.vue";
import router from "@/router/index"
import store from "@/store"

const app = createApp(App)
// 注意顺序use路由在mount前面，否则加载不出来
app.use(router)
app.use(store)
app.mount("#app");
console.log(process.env.VUE_APP_NAME);


