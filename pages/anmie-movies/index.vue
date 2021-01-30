<template>
  <div class="container">
      <AnmieMovies :AnmieMovies="AnmieMovies"></AnmieMovies>
       <LoadMoreBtn @MoreShows="LoadMore"></LoadMoreBtn>
  </div>
</template>

<script>
import AnmieMovies from '~/components/PagesComp/AnmieMovies/index'
import LoadMoreBtn from '~/components/UI/LoadMoreBtn'
export default {
 components: {
     AnmieMovies,
      LoadMoreBtn
 },
   asyncData(context) {
     let CurrentPage= 1
    return context.app.$axios.$get(`${process.env.baseUrl}/movies/افلام%20انيميشن?page=${CurrentPage}`).then(response => {
      return {
        AnmieMovies : response.movies,
        CurrentPage : 1
      }
    })
  },
  methods:{
    LoadMore(){
     this.$axios.$get(`https://cima-api.shofda.com/api/movies/افلام%20انيميشن?page=${this.CurrentPage +=1}`).then(resopnse =>{
       this.ArabicShows.push(...resopnse.movies)
     })
    }
  }
}
</script>

<style>

</style>