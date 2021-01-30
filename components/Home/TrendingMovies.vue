<template>
  <div class="row">
    <div class="col-lg-12 mt">
       <div class="main-content">
           <div class="main-content__upper">
               <h2>الافلام الاكثر <strong>مشاهدة</strong></h2>
               <nuxt-link class="link" to="/trending">المزيد↩</nuxt-link>
           </div>
           <div class="main-content__carousel">
               <div class="row">
                   <div v-for="movie in trendingMovies" :key="movie.slug" class="col-sm-12 col-md-4 col-lg-3 mt">
                        <div class="example-2 card">
                            <div class="wrapper" :style="{'background-image':`url(https://thumbnail-sm.ciiima.com${movie.Poster})`}">
                            <div class="header">
                                <div class="date">
                                    {{movie.Quality}}
                                </div>
                                <ul class="menu-content">
                                    <li>
                                    {{movie.imdbRating}}
                                    </li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <h3 class="title"><nuxt-link :to="`/movie/${movie.slug}`">{{movie.Title}}</nuxt-link></h3>
                                <p class="text">{{movie.Year}}</p>
                                <nuxt-link :to="`/movie/${movie.slug}`" class="button">Read more</nuxt-link>
                                </div>
                            </div>
                            </div>
                        </div>   
                   </div>
               </div>
           </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['trendingMovies']
}
</script>



<style scoped>
strong {
    color: #FF5C5C;
}
.main-content{
    background: #353d4a;   
    border: 1px solid #fff;
    border-radius: 5px;
}
.main-content__upper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 10px;
}

.main-content__upper h2 {
    font-weight: bold;
}

.main-content__upper .link {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

.card .menu-content {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.card .menu-content::before, .card .menu-content::after {
  content: "";
  display: table;
}
.card .menu-content::after {
  clear: both;
}
.card .menu-content li {
  display: inline-block;
}
.card .menu-content a {
  color: #fff;
}
.card .menu-content span {
  position: absolute;
  left: 50%;
  top: 0;
  font-size: 10px;
  font-weight: 700;
  transform: translate(-50%, 0);
}
.card .wrapper {
  background-color: #fff;
  min-height: 350px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
}
.card .wrapper:hover .data {
  transform: translateY(0);
}
.card .data {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgb(51 ,59 ,71 , 75%);
  transform: translateY(calc(70px + 1em));
  transition: transform 0.3s;
}
.card .data .content {
  padding: 1em;
  position: relative;
  z-index: 1;
}
.card .title {
  margin-top: 0px;
}
.card .text {
  height: 30px;
  margin: 0;
}
.example-2 .wrapper {
  background: center/cover no-repeat;
}
.example-2 .wrapper:hover .menu-content span {
  transform: translate(-50%, -10px);
  opacity: 1;
}
.example-2 .header {
  color: #fff;
  padding: 1em;
  background: rgb(51 59 71 / 75%);
}
.example-2 .header::before, .example-2 .header::after {
  content: "";
  display: table;
}
.example-2 .header::after {
  clear: both;
}
.example-2 .header .date {
  float: left;
  font-size: 12px;
}
.example-2 .menu-content {
  float: right;
}
.example-2 .menu-content li {
  margin: 0 5px;
  position: relative;
}
.example-2 .menu-content span {
  transition: all 0.3s;
  opacity: 0;
}
.example-2 .data {
  color: #fff;
  transform: translateY(40%);
}
.example-2 .title a {
  color: #fff;
}
.example-2 .button {
  display: block;
  width: 100px;
  margin: 2em auto 1em;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  position: relative;
  font-weight: 700;
}
.example-2 .button::after {
  content: "→";
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 0.3s;
}
.example-2 .button:hover::after {
  transform: translate(5px, -50%);
  opacity: 1;
}

.main-content__carousel{
    margin:10px
}

.button button{
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    color: #FFF;
    background: #FF5C5C;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    transition: .2s;
    font-weight: bold;
}

.button button:hover{
    background-color: #e24f4f;
}
</style>