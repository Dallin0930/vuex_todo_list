import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  checkboxes: [],
  condition: 'ALL',
}


const mutations = {
  add (state,item) {
    state.checkboxes.push(item);
},
updateItem (state,item) {
  const index= state.checkboxes.map(i=>i.id).indexOf(item.id);
  state.checkboxes[index]=item;
},
show (state, condition) {
  state.condition = condition;
}
}


export default new Vuex.Store({
  state,
  mutations
})