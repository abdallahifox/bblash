<template>
    <div class="sidelinks">
        <div class="container hight-100">
           <div class="links">
               <nuxt-link v-for="link in Links" :key="link.id" class="link" :to="link.link">{{link.name}}</nuxt-link>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Links: [
                {
                    name: 'أفلام ',
                    link:'/movies',
                    id:1
                },
                {
                    name: 'أفلام عربي',
                    link:'/arabic-movies',
                    id:2
                },
                {
                    name: 'احدث الافلام',
                    link:'/new-movies',
                    id:3
                },
                {
                    name: 'افلام انيميشن',
                    link:'/anmie-movies',
                    id:4
                },                                                              
            ]
        }
    }
}
</script>

<style scoped>

.sidelinks{
        height: 50px;
        background: #df3e3e;
}

.links{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.link {
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    text-decoration: none;
    background: transparent;
    margin: 0px 30px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: .2s;
}


.link:hover {
    background: #181D25

}

/*=============== Mobile Media =================== */

@media only screen and (max-width: 1023px) {
    .sidelinks {
        height: 100%;
    }
    .links{
        flex-direction: column;
    }
    .link {
        padding: 15px 5px;
        margin: 10px 5px;
    }
}

</style>
