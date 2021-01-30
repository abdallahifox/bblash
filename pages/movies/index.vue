<template>
  <div class="container">
      <Movies :Movies="Movies"></Movies>
       <LoadMoreBtn @MoreShows="LoadMore"></LoadMoreBtn>
  </div>
</template>

<script>
 import Movies from '~/components/PagesComp/Movies/index'
 import LoadMoreBtn from '~/components/UI/LoadMoreBtn'
export default {
    components : {
        Movies,
        LoadMoreBtn
    },
    asyncData(context) {
        let CurrentPage= 1
        return context.app.$axios.$get(`${process.env.baseUrl}/movies?page=${CurrentPage}`).then(response => {
        return {
            Movies : response.movies,
            CurrentPage : 1
        }
        })
    },
  methods:{
    LoadMore(){
     this.$axios.$get(`https://cima-api.shofda.com/api/movies?page=${this.CurrentPage +=1}`).then(resopnse =>{
       this.Movies.push(...resopnse.movies)
     })
    }
  }        
}
</script>

<style>

</style>