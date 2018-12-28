import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './motaions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  count: 0,
	info: {
		dier: {
			myAge: ''
		}
	}
}

const opstion = {
  state,
  mutations,
  getters
}

export default new Vuex.Store(opstion)
