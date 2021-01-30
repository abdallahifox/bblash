<template>
  <div class="container">
      <Trending :trendingMovies="trendingMovies" @MoreTrending="LoadMore"></Trending>
      <LoadMoreBtn @MoreShows="LoadMore"></LoadMoreBtn>
  </div>
</template>

<script>
import Trending from '~/components/PagesComp/Trending/index'
import LoadMoreBtn from '~/components/UI/LoadMoreBtn'
export default {
 components: {
     Trending,
     LoadMoreBtn
 },
   asyncData(context) {
     let CurrentPage= 1
    return context.app.$axios.$get(`${process.env.baseUrl}/trending?page=${CurrentPage}`).then(response => {
      return {
        trendingMovies : response.movies,
        CurrentPage : 1
      }
    })
  },
  methods:{
    LoadMore(){
     this.$axios.$get(`https://cima-api.shofda.com/api/trending?page=${this.CurrentPage +=1}`).then(resopnse =>{
       this.trendingMovies.push(...resopnse.movies)
     })
    }
  }
}
</script>

<style>

</style>