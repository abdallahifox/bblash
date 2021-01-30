<template>
  <div class="container">
      <NewMovies :newMovies="newMovies"></NewMovies>
       <LoadMoreBtn @MoreShows="LoadMore"></LoadMoreBtn>
  </div>
</template>

<script>
import NewMovies from '~/components/PagesComp/NewMovies/index'
import LoadMoreBtn from '~/components/UI/LoadMoreBtn'
export default {
 components: {
     NewMovies,
      LoadMoreBtn
 },
   asyncData(context) {
     let CurrentPage= 1
    return context.app.$axios.$get(`${process.env.baseUrl}/new-movies?page=${CurrentPage}`).then(response => {
      return {
        newMovies : response.movies,
        CurrentPage : 1
      }
    })
  },
  methods:{
    LoadMore(){
     this.$axios.$get(`https://cima-api.shofda.com/api/new-movies?page=${this.CurrentPage +=1}`).then(resopnse =>{
       this.newMovies.push(...resopnse.movies)
     })
    }
  }
}
</script>

<style>

</style>