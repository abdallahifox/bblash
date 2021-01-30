<template>
  <div class="container">
      <LatestMovies :latestMovies="latestMovies" @MoreMovies="LoadMore"></LatestMovies>
      <LoadMoreBtn @MoreShows="LoadMore"></LoadMoreBtn>
      <i class="gg-spinner" v-if="loading"></i>      
  </div>
</template>

<script>
import LatestMovies from '~/components/PagesComp/LatestMovies'
 import LoadMoreBtn from '~/components/UI/LoadMoreBtn'
export default {
  data(){
    return{
      loading:false
    }
  },

 components: {
     LatestMovies,
     LoadMoreBtn
 },
   asyncData(context) {
     let CurrentPage= 1;
    return context.app.$axios.$get(`${process.env.baseUrl}/latest-movies?page=${CurrentPage}`).then(response => {
      return {
        latestMovies : response.movies,
        CurrentPage : 1
      }
    })
  },
  methods:{
    LoadMore(){
      this.loading = true
      this.$axios.$get(`https://cima-api.shofda.com/api/latest-movies?page=${this.CurrentPage +=1}`).then(resopnse =>{
       this.latestMovies.push(...resopnse.movies)
       this.loading = false
     })
    }
  }
}
</script>

<style>

</style>