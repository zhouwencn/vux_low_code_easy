import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { AlertPlugin, Group, Cell, XInput } from "vux";
import { PopupPicker } from "vux";
Vue.use(AlertPlugin);
Vue.component("group", Group);
Vue.component("cell", Cell);
Vue.component("XInput", XInput);
Vue.component("PopupPicker", PopupPicker);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
