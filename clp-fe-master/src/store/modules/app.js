const app = {
  state: {
    // 中英文
    language: window.localStorage.getItem("language") || "zh"
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      window.localStorage.setItem("language", language);
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    }
  }
};

export default app;
