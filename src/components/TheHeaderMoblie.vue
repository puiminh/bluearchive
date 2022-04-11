<template>
  <div data-v-2a073021="" data-v-f5af7434="" class="herde headers">
    <div data-v-2a073021="" class="herde-top">
        <div data-v-2a073021="" class="onshow" @click="actived=!actived"></div>
    </div>
    <div data-v-2a073021="" :class="['herde_s',actived?'actived':'']">
        <ul data-v-2a073021="">
            <li data-v-2a073021="">
                 <router-link to="/" class="title" >
                    <span data-v-2a073021="">HOME</span>
                    <div data-v-2a073021="" class="translate">ホーム</div>
                 </router-link>   
            </li>
            <li data-v-2a073021="">
                <router-link to="/news" class="title" >
                <span data-v-2a073021="">NEWS</span>
                <div data-v-2a073021="" class="translate">ニュース</div>
                </router-link>
            </li>
            <li data-v-2a073021="">
                <router-link to="/character/78" class="title" >
                <span data-v-2a073021="">CHARACTER</span>
                <div data-v-2a073021="" class="translate">キャラクター</div>
                </router-link>
            </li>
            <li data-v-2a073021="">
                <router-link to="/system" class="title" >
                <span data-v-2a073021="">SYSTEM</span>
                <div data-v-2a073021="" class="translate">システム</div>
                </router-link>
            </li>
            <li data-v-2a073021="">
                <router-link to="/fankit" class="title" >
                <span data-v-2a073021="">FANKIT</span>
                <div data-v-2a073021="" class="translate">ファンキット</div>
                </router-link>
                -
            </li>
            <li data-v-2a073021="">
                <router-link to="/faq" class="title" >
                <span data-v-2a073021="">FAQ</span>
                <div data-v-2a073021="" class="translate">よくある質問</div>
                </router-link>
            </li>
            <li data-v-2a073021="">
                <router-link to="/contact" class="title" >
                <span data-v-2a073021="">CONTACT</span>
                <div data-v-2a073021="" class="translate">問い合わせ</div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            actived: false
        }
    }
}
</script>

<style scoped>
.title{
    width: 100%;
    height: 100%;
    display: block;
}
.headers[data-v-f5af7434] {
    display: none;
}
.herde_s[data-v-2a073021] {
    display: none;
    text-align: center;
    width: 100%;
    height: 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    background: #fff;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.herde_s ul[data-v-2a073021] {
    margin-top: 1.0333333333rem;
    margin-bottom: 1.0333333333rem;
    float: left;
}
.herde_s ul li[data-v-2a073021] {
    float: left;
    width: 5.6rem;
    height: 2rem;
    cursor: pointer;
    border-right: 3px dotted #dfdcce;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.herde_s ul li .translate[data-v-2a073021] {
    font-size: .4rem;
    color: #9f61cb;
    line-height: 5px;
    font-family: Quicksand,sans-serif;
}
@media screen and (max-width: 600px){
.headers[data-v-f5af7434] {
    display: block;
}
.herde-top .onshow[data-v-2a073021] {
    width: 7.0103703704rem;
    height: 100%;
    margin-left: 0.5925925926rem;
    cursor: pointer;
}

.herde_s[data-v-2a073021] {
    display: block;
    z-index: 999;
    position: fixed;
    text-align: left;
    width: 24.7703703704rem;
    left: 0;
    height: 35.6740740741rem;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    background: hsla(0,0%,100%,.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 0.5925925926rem 0 0;
}
.herde_s ul[data-v-2a073021] {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    display: block;
    text-align: left;
}
.herde_s ul li[data-v-2a073021] {
    color: #54dcfe;
    clear: both;
    display: block;
    width: 100%;
    height: 8.0592592593rem;
    cursor: pointer;
    border-right: none;
    background: #fff;
    margin-bottom: 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 10%;
}
.herde_s ul li span[data-v-2a073021] {
    margin-top: 10%;
    margin-left: 16%;
    font-size: .9481481481rem;
    color: #54dcfe;
}
.herde_s ul li .translate[data-v-2a073021] {
    margin-left: 16%;
    font-weight: 600;
    font-size: 1.7777777778rem;
    line-height: 1.7777777778rem;
    color: #54dcfe;
    font-family: Quicksand,sans-serif;
}
.herde_s.actived[data-v-2a073021] {
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.herde_s ul li[data-v-2a073021]:hover {
    background: #54dcfe;
    color: #fff;
}
}
.herde-top[data-v-2a073021] {
    width: 100%;
    height: 10.4888888889rem;
    background: url(../img/home.82709b86.png);
    background-size: 100%;
}
.herdes{
    z-index: 999;
    position: absolute;
    top: 0;
    height: 2.2666666667rem;
    width: 100%;
    background: rgba(20,39,59,.8);
    background-size: 100% 100%;
    -webkit-box-shadow: 0 0.0666666667rem 0.3333333333rem 0.1666666667rem rgb(20 39 59 / 60%);
    box-shadow: 0 0.0666666667rem 0.3333333333rem 0.1666666667rem rgb(20 39 59 / 60%);
}
</style>