<template>
    <div class="Welcome">
     <div class="container">
         <div class="row">
               <div class="col-sm-12 col-md-12 col-lg-12">
                 <div class="welcome__content mt">
                     <h2> افلام ببلاش يرحب بكم في موقعه المتواضع😜<br>
                         كما نتمنا لكم مشاهده ممتعه 😁<br>
                    شاهد جميع ما تتمناه مع افلام <strong>ببلاش</strong> 📢<br>
                    </h2>
                 </div>
                </div>
               <div class="col-sm-12 col-md-12 col-lg-12">
                 <div class="welcome__content mt">
                     <h2> 
                         من اجل سلامتك وسلامة عائلتك يُرجى اتباع ارشادات المسؤلين في مصر. 🙏 موقع افلام <strong>ببلاش</strong> يتمنى لكم الصحة والعافية.
                    </h2>
                 </div>
                </div>                
         </div>
     </div>
    </div>
</template>


<style scoped>

.welcome__content{
    height: 150px;
    background: #353d4a;    
    justify-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 5px;
}
strong {
    color: #FF5C5C;
}
h2{
    font-weight: bold;
}


/*=============== Mobile Media =================== */

@media only screen and (max-width: 767px) {
    .welcome__content{
        height: 300px;
    }
}
</style>