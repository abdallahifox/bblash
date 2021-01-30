<template>
  <div class="container">
      <Movies :Movies="ArabicMovies"></Movies>
       <LoadMoreBtn @MoreShows="LoadMore"></LoadMoreBtn>
  </div>
</template>

<script>
 import Movies from '~/components/PagesComp/Arabic-Movies/index'
 import LoadMoreBtn from '~/components/UI/LoadMoreBtn'
export default {
    components : {
        Movies,
        LoadMoreBtn
    },
    asyncData(context) {
        let CurrentPage= 1
        return context.app.$axios.$get(`${process.env.baseUrl}/movies/افلام عربي?page=${CurrentPage}`).then(response => {
        return {
            ArabicMovies : response.movies,
            CurrentPage : 1
        }
        })
    },
  methods:{
    LoadMore(){
     this.$axios.$get(`https://cima-api.shofda.com/api/movies/افلام عربي?page=${this.CurrentPage +=1}`).then(resopnse =>{
       this.ArabicMovies.push(...resopnse.movies)
     })
    }
  }        
}
</script>

<style>

</style>