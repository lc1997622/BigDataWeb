import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    account: null,
    password: null,
    category: null,
    username: null,
}

const mutations = {
    logined(state, account, password) {
        state.account = account;
        state.password = password;
    },
    logout(state) {
        state.account = null;
        state.password = null;
        state.username = null;
    },
    changeCategory(state, category) {
        state.category = category;
    }
}

export default new Vuex.Store({
    state,
    mutations
})