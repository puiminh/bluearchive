
import { createStore } from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";


const store = createStore({

    state() {
        return {
          students: [
              
          ],
          loadJust1: 0,
        }
    },
    getters,
    actions,
    mutations,
});

export default store;