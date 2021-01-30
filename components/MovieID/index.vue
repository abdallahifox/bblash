
<template>
  <div class="row">
      <div class="col-sm-12col-lg-4 col-md-4 mt">
          <div class="img">
              <img :src="`https://thumbnail-lg.ciiima.com/${movie.Poster}`" :alt="movie.Title">
          </div>
      </div>
      <div class="col-sm-12 col-lg-8 col-md-8">
          <div class="info">
              <h1>{{movie.Title}}</h1><br>
              <ul>
                  <li >اللغة - البلد : {{movie.Country[0] || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
                  <li>التصنيف : {{movie.Rated || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
                  <li>النوع : {{movie.Type || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
                  <li>التقيم : {{movie.imdbRating || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
                  <li>المدة : {{movie.Runtime || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
                  <li>الجودة : {{movie.Quality || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
                  <li>المشاهدات : {{movie.views || 'غير متاحه حاليا بس ادعي تبقي متاحة😆'}}</li><br>
              </ul>
          </div>
      </div> 
      <div class="col-sm-12 col-lg-12 col-md-12 mt" v-if="movie.Plot">
          <div class="story">
              <div class="title">
               <h1>القصة</h1>                  
              </div>
              <p>{{movie.Plot}}</p>
          </div>
      </div>       
      <div class="col-sm-12 col-lg-12 col-md-12 mt">
          <div class="video">
              <div class="title">
               <h1>مشاهدة فيلم {{movie.Title}}</h1>                  
              </div>
              <p class="mt"> <strong>ملحوظه</strong> : لو السيرفر مش شغال اختار سرفر تاني لو مفيش يبقي استعوض ربنا ف الفيلم😹 بس ده ميمنعش انك تفضل تزورنا😄</p>
              <iframe class="mt" width="100%" height="515" :src="movie.Embedded[this.srcVideo]" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="server-watch">
              <ul>
                    <li v-for="(server, index) in movie.Embedded" :key="index">
                        <a @click="ChangeVideoSrc(index)">
                            Server {{index + 1}}
                        </a>
                    </li>
              </ul>
          </div>
      </div>
        <div class="col-sm-12 col-lg-12 col-md-12 mt">
            <div class="video">
                <div class="title">
                <h1>سرفرات التحميل</h1>                  
                </div>
            </div>
            <div class="server-watch mt">
                <ul>
                    <li v-for="download in movie.Download" :key="download.server">
                        <a :href="download.link" target="_blank">{{download.server}}</a>
                    </li>
                </ul>
            </div>          
        </div>
  </div>
</template>

<script>
export default {
    props:['movie'],
    data() {
        return {
            srcVideo: 0,
        }
    },
    methods: {
        ChangeVideoSrc(x) {
            this.srcVideo = x
        }
    }

}
</script>

<style scoped>
h1{
    font-weight: bold;
}
.info ul li {
    font-weight: 600;
    padding: 7px 10px;
    border:3px solid #df3e3e
}
.img img {
    width: 100%;
}

.story {
    background: #181a1d;
    padding: 20px;
    border-radius: 3px;
}
.server-watch ul {
 display: flex;
 justify-content: space-between;
}

.server-watch ul li,
.server-watch ul li a {
    padding: 5px 15px;
    background-color: #df3e3e;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
}


/*=============== Mobile Media =================== */

@media only screen and (max-width: 1024px) {
.server-watch ul {
       flex-direction: column;
    }

.server-watch ul li,
.server-watch ul li a {
    margin: 10px 0px;
    text-align: center;
}    
}

</style>