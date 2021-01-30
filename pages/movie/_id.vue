<template>
  <div class="container">
      <SingleMovie :movie="movie"></SingleMovie>
  </div>
</template>

<script>
import SingleMovie from '~/components/MovieID/index'
export default {
 components: {
     SingleMovie
 },
 asyncData(context) {
   if(context.route.path == '/movie'){
     context.redirect('/movies')
   }
   return context.app.$axios.get(`${process.env.baseUrl}/movie/${context.params.id}`).then(response =>{
     let movie = response.data.movie

     return {
       movie
     }

   }).catch(res =>{
     if(res){
       context.redirect('/')
     }
   })
 },
}
</script>

<style>

</style>