import Vue from 'vue'
import Vuex from 'vuex'

import phone from './phone'
import tv from './tv'
import appliances from './appliances'
import flat from './flat'
import headset from './headset'
import intelligence from './intelligence'
import heathy from './healthy'
import life from './life'
import parts from './parts'
import wear from './wear'
import kitchen from './kitchen'

Vue.use(Vuex)

// 创建vuex 暴露各个模块
export default new Vuex.Store({
    modules:{
        phone,
        tv,
        appliances,
        flat,
        headset,
        intelligence,
        heathy,
        life,
        parts,
        wear,
        kitchen
    }
})