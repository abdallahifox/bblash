<template>
  <div class="container">
    <LatestMovies :latestMovies="latestMovies"></LatestMovies>
    <Trending :trendingMovies="trendingMovies"></Trending>
    <NewMovies :newMovies="newMovies"></NewMovies>

  </div>
</template>

<script>
  import LatestMovies from '~/components/Home/LatestMovies'
  import NewMovies from '~/components/Home/NewMovies'
  import Trending from '~/components/Home/TrendingMovies'
export default {
  components: {
    LatestMovies,
    NewMovies,
    Trending
  },
  asyncData(context) {
    return context.app.$axios.$get(`${process.env.baseUrl}`).then(response => {
      return {
        latestMovies : response.latestMovies.slice(0,8),
        newMovies : response.newMovies.slice(0,8),
        trendingMovies : response.trendingMovies.slice(0,8)

      }
    })
  },
}
</script>

<style>

</style>
