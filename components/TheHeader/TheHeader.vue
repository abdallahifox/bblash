<template>
    <div class="header">
            <div class="container hight-100">
                <nav class="header__navbar">                    
                    <nuxt-link class="link" to="/">
                        <div class="header__logo">
                            <i class='bx bx-md bx-camera-movie bx-tada' style='color:#fff' ></i>
                            <span class="header__logo-title">افلام <strong >ببلاش</strong></span>                        
                        </div>                    
                    </nuxt-link>
                    <div class="header__search-input">
                        <div class="header__input">
                            <i class='bx bx-xs bx-search' ></i>
                            <input v-model="input" type="text" placeholder="ابحث عن الفيلم او المسلسل المفضل لديك..."> 
                            <button style="outline:none;" @click="searching">
                                ابحث الان    
                            </button>                            
                        </div>
                    </div>
                    <div class="header__social-links">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/abdallahifox1/" target="_blank">
                                 <i class='bx bx-sm bxl-facebook' style='color:#ffffff'  >
                                 </i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/abdallahiifox" target="_blank">
                                 <i class='bx bx-sm bxl-twitter' style='color:#ffffff'  ></i>
                                </a>
                            </li>
                        </ul>
                    </div>     
                </nav>                
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input:''
        }
    },
    methods: {
        searching() {
            if(this.input != '') {
            this.$store.dispatch('searchForMovie', this.input)
            this.input = ''
            } else {
                this.$router.push('/')
            }

        }
    }
}
</script>

<style scoped>
strong {
    color: #FF5C5C;
}
.link{
    color:#fff;
    text-decoration: none;
    font-weight: bold;
}
.header{
        height: 90px;
        margin: 15px 0px 0px 0px;
        background: #353d4a;;
}
.header__navbar{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
}
.header__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 7px;
    width: 100%;
}

.header__search-input{
    width: 100%;
}

.header__input{
    position: relative;
    
}
.header__input i {
    color:rgb(26, 25, 25);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    z-index: 2;
}
.header__input button {
    position: absolute;
    display: inline-block;
    height: 100%;
    left: 0px;
    width: 13%;
    color: #FFF;
    background:#FF5C5C;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    border-radius: 3px;
    border:none;
    transition: .2s;
    font-weight: bold;
    font-size: 13px;

}

.header__input button:hover {
 background-color: #dd3f3f;
}

.header__search-input input {
    width: 100%;
    height: 40px;
    position: relative;
    color: rgb(88, 83, 83);
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    outline: none;
    border-radius: 5px;
    border: 2px solid#fff;
    text-indent: 25px;
    font-size: 15px;
}

.header__search-input input::placeholder {
    position: relative;
    color: rgb(88, 83, 83);
    opacity: .6;
}


.header__social-links ul {
    display: inline-flex;
    margin-right: 5px;
}


/*=============== Mobile Media =================== */

@media only screen and (max-width: 767px) {
    .header__search-input input::placeholder {
        font-size: 8px;
}
.header__input button{
    width: 40%;
}
}

</style>
