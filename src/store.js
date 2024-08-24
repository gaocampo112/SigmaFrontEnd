// src/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: null,
  },
  mutations: {
    setStudent(state, student) {
      state.student = student;
    },
  },
  actions: {
    setStudent({ commit }, student) {
      commit("setStudent", student);
    },
  },
  getters: {
    student: (state) => state.student,
  },
});
