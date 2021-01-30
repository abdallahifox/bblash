import Vuex from 'vuex'
import Search from '~/store/search'
 
const CreatStore = () => {
    return new Vuex.Store({
        modules: {
            Search
        }
    })
}


export default CreatStore