const searching = {
    state: {
        error: false,
        searchList: null,
        currentPage: null,
        pages: null
    },
    mutations: {
        searchMovieList(state, payload) {
            state.searchList = payload.movies
            state.currentPage = payload.currentPage
            state.pages = payload.numPages
            state.error = false
        },
        error(state) {
            state.error= true
        }
    },
    actions: {
        searchForMovie({ commit }, payload) {
            this.$axios.$get(`${process.env.baseUrl}/search?q=${payload}`)
                .then(res => {
                    const result = {
                        movies: res.movies,
                        currentPage: res.page,
                        numPages: res.pages
                    }
                    console.log(res)
                    commit('searchMovieList', result)
                    if (res.movies.length === 0) {
                        commit('error')
                    }
                    this.$router.push('/search')
            })
        }
    },
    getters: {
        getMovies(state) {
            return state.searchList
        },
        error(state) {
            return state.error
        }
    
    }
}


export default searching