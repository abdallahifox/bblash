<template>
    <div class="container">
        <Search :movies="movies"></Search>
       <h3 v-if="error"> ⛔ الصفحة التى تحاول الوصول لها غير موجودة. قد يكون تم نقلها الى عنوان اخر او تم حذفها من الموقع او انك كتبت عنوان خطأ.
</h3>
    </div>
</template>

<script>
import Search from '~/components/search/index'
export default {
    asyncData(context) {
        console.log(context.app)
       if(context.app.store.state.Search.searchList  === null) {
            context.redirect('/')
        }
    },
 components: {
     Search
 },
 computed: {
     movies() {
        return this.$store.getters.getMovies
     },
     error(){
         return this.$store.getters.error
     }
 }
}
</script>

<style scoped>
 h3 {
   text-align: center;
    background: rgb(187, 10, 10);
    padding: 10px;

 }
</style>