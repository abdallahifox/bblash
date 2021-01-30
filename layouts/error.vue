<template>
    <div class="Welcome">
     <div class="container">
         <div class="row">
               <div class="col-sm-12 col-md-12 col-lg-12">
                 <div class="error_content mt">
                     <h2> 
                         انا عارف انك عايز حاجة معينه بس الحاجة دي مش قاعده هنا و مفيش صفحه بالعنوان اللي انت حاطه انت ممكن ترجع من هنا<br>
                         <a href="/">دوس هنا و صلي علي النبي</a>
                    </h2>
                 </div>
                </div>              
         </div>
     </div>
    </div>
</template>


<style scoped>

.error_content{
    height: 150px;
    background: #d44d2c;    
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
a{
    
    color: #fff;
}


/*=============== Mobile Media =================== */

@media only screen and (max-width: 767px) {
    .error_content{
        height: 300px;
    }
}
</style>