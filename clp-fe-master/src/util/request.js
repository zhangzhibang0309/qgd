import Vue from "vue";
import axios from "axios";
import { Notification } from "element-ui";
Vue.prototype.$notify = Notification;

function request(options) {
  axios.defaults.baseURL = "http://localhost:10086";
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      let body;
      body = {
        status: 410,
        message: "请求失败"
      };
      try {
        body = error.response.data;
        // eslint-disable-next-line no-empty
      } catch (e) {}
      Notification.error({
        title: body.status + " ERROR",
        message: body.message,
        offset: 60
      });
      return Promise.reject(error);
    });
}

export default request;
