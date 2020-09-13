import Vue from "vue";
import {
  Button,
  Menu,
  MenuItem,
  Submenu,
  Col,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Card,
  Link,
  PageHeader,
  Avatar,
  Form,
  FormItem,
  Input,
  Pagination,
  Table,
  TableColumn,
  Switch,
  Tag
} from "element-ui";
import clpContainer from "./components/Container";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueHightlightJS from "vue-highlight.js";
import "highlight.js/styles/github.css";
import "./assets/scss/clp.scss";

import i18n from "./locale";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Card);
Vue.use(Link);
Vue.use(PageHeader);
Vue.use(Avatar);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Switch);
Vue.use(Tag);

Vue.component("clp-container", clpContainer);

Vue.use(VueHightlightJS);

new Vue({
  i18n,
  router,
  store,
  mounted() {
    window.vue = this;
    this.$i18n.locale = this.$store.state.app.language;
  },
  render: h => h(App)
}).$mount("#app");
