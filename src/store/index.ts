import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      name: 'GH'
    }
  }
})

export default store