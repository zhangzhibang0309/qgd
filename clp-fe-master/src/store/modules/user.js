const user = {
  state: {
    isLogin: window.sessionStorage.getItem("login") || false,
    user: window.sessionStorage.getItem("user") || null
  },
  mutations: {
    logout(state) {
      window.sessionStorage.removeItem("login");
      window.sessionStorage.removeItem("user");
      state.isLogin = false;
      state.user = null;
    },
    login(state, data) {
      window.sessionStorage.setItem("login", true);
      window.sessionStorage.setItem("user", data);
      state.isLogin = true;
      state.user = data;
    }
  },
  getters: {
    getLoginState(state) {
      return state.isLogin;
    },
    getUserData(state) {
      return JSON.parse(state.user);
    },
    getAvatarUrl(state) {
      if (state.user.avatar != undefined) {
        return state.user.avatar;
      } else {
        return "";
      }
    }
  }
};

export default user;
