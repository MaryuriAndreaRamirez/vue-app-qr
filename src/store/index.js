
import { createStore } from 'vuex'

import storeGlobal from '../store/storeGlobal'

const store = createStore({
    modules: {
        storeGlobal
    }
})

export default store