<template>
    <div data-v-6581000a="" data-v-f5af7434="" class="herdes header">
        <div data-v-6581000a="" class="herde-center">
            <img
                data-v-6581000a=""
                src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/bluearhive.f833c198.png"
                alt=""
                class="blueArhive">
                <ul data-v-6581000a="">
                    <li data-v-6581000a="" :class="{'red':currentPath==''}">
                        <router-link to="/" class="title" >HOME</router-link>
                    </li>
                    <li data-v-6581000a="" :class="{'red':currentPath=='news'}">
                        <router-link to="/news" class="title">NEWS</router-link>
                    </li>
                    <li data-v-6581000a="" :class="{'red':currentPath=='character'}">
                        <router-link to="/character/76" class="title">CHARACTER</router-link>
                        
                    </li>
                    <li data-v-6581000a="" :class="{'red':currentPath=='system'}">
                        <router-link to="/system" class="title">SYSTEM</router-link>
                        
                    </li>
                    <li data-v-6581000a="" :class="{'red':currentPath=='fankit'}">
                        <router-link to="/fankit" class="title">FANKIT</router-link>
                        
                    </li>
                    <li data-v-6581000a="" :class="{'red':currentPath=='faq'}">
                        <router-link to="/faq" class="title">FAQ</router-link>
                        
                    </li>
                    <li data-v-6581000a="" :class="{'red':currentPath=='contact'}">
                        <router-link to="/contact" class="title">CONTACT</router-link>
                        
                    </li>
                </ul>
                <a
                    data-v-6581000a=""
                    href="https://www.youtube.com/watch?v=0KFPtliRn_4"
                    target="_Blank">
                    <img
                        data-v-6581000a=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAVCAYAAAAgjzL/AAAE+0lEQVRYhd2ZWW8cRRDHf7sZx7GDY2ObQGyHBHJy2AkJlzikgGKOF+ABIfEASHwjBN8AARJSEBZCkUGE8BIJEBIECHESw4It4gTnctYHXq+Xh6rS1ExmvTO7y0bwl1ZdXVO93V1dXVXdnatUKijWA7uAzUAXcIvy1gNtQB4ItMwDOUKsut8KUAaWgRKwCMwDV4Fp4A/++2gHehAdLABz9fxJoOUg8Cqi8H8bE8AHMd5dwE6gAvwOnHXf9gP9wDrgO2C2gb67gYdqyMwC39eQ2Y7oC+BH4Eg9gwkQq34DsfBWYA8wCnzueL3A40oPEVX+S47+psG++4EnasgUqa38piAP3EPrFG94BLFkw0+IuwJxeYbbHT0DXGmw33n9j8vAdccvKe8KcCbF/1QcvVJVqgYCYGu9jRtAgMSW81r/GyggrqcPcQ/XiCq/0IR+Z4C3lL4TeFPp34D3m/D/mZAHNmWQr9QWSY3uWH3S0QNa9jqed0XNQMnRqxnb+mQjX+8AAmBjBvkK4qsHgfvq7VTRFatPAM8qPQD8gvh/kMypoPQDSFbWgyjwAnAMWNLvB3R8IL57CrjbjbeABMk217cpsA94TOlLwAlER88gbnIFOIrsVJxcn8p06ng+0zEbnkR2WoeO8zxwPAA2kB55ndAJxDeOUn+G1BGrXyacyGbl3aHlJJK+Pgo8F2u3DdgBvIMYxz7lof83hWRTB5W3EVF+Enqd3Byh8h92MkeJKnYv8LSrb0WMYlzrzyMxzmMn0J0nagFpYAr5AZnw1xnbG4IE3jktu4AthAtr2Ycpfhn4EPhZ631ISgrRnHtRywXH84E2Du+KLLhXCIOqWbx3NQPAcaJ62KHlBkLFTwPvAX9pfdgOTlng/eMSYglvAyfJFhPWJfAs07iVaD4+QTQ2TQGngK8cb2/C+FqBU4jyxwnn36PlNid3EolbZjBlO602ikvAR8DHpJ98LoFXQKysAxhW3oyWQ07OLNn3ZQG8nLL/ZqGoZY7QHVnq7g0mvnvKeZpnKQ8iPjlJqUlI2iVlwqzH3KHtBh9brK03HNvBrbZ8G+cq0VgAUa9iLq3sP2a1lLhyh4GniKaFaVBNSZPIKdhwOsUYoDk7uBFUuNGg/DhHEeM0PbUHRINMGlzVsh9JDXdlbG+odjKccfQc8KfSzTxj3AxsIuqGlgOiOWstrCI59AEkd20ES1X4aTKTpIW42YuTY22XewxJcZfQLCwgOtk0eLmuod2IYhW+95M+I/L+1CbpFW472Lex7/XEAd92rYX18ac99s3vbrs7ChBvsRiQ7S66mX416x243wV2MPRKscX0i2cLlta1Js2vVIVvsJjZRpjl2Pli3sl1ajkCvGAD9T62lbiYUf6Co4eQK4MRx7MDmnej+7Q8nLIPr6wtwL3AbpLPJIaDyBvAoOPZm4N/ONqPpOQ2JvLIHUqrcZrqscZPtMfR88C3SncArxOeaovIQwtE57MHeAVRhlmjpax+h1ggvOjk2rXtCHKoM1687TJyheANwa4vrhOezgeA1wgPXmcCFRgDXqQ1mAU+WeP7IvCr0vH7+08RRe9GlFhCdu44oWuZBL4E7kdiw1n9fhhRQEHliq6faS0rwLuIMjuRa+0jyPXFIdeHbzuG7JJDiOGcI/roM6Zz2o4YzYKO4Yuce8O9Dcli7A23k+z3PklY0M6vIffmjb5G/W/wD9tfJjBHOXmIAAAAAElFTkSuQmCC"
                        alt=""
                        class="yt_logo"></a>

                    <a data-v-6581000a="" href="https://twitter.com/Blue_ArchiveJP" target="_Blank">
                        <img
                            data-v-6581000a=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAfCAYAAABgfwTIAAACrklEQVRYhb3Yz2tcVRjG8c/kh0kTmmBNakCxWgsltjVIFSmWrrpQFHRhu9VFC278T7oo0mXdFEEKRpRuipQWFy0YaKKlRYISF60JmpCmMdo2cTpdvPeGm8mdyeROJg8cLvfc95z53nve9z3vmVKlUtFCDWEv+lHGLH7DUp0x7R0tghnEcezPefYY47giQFPtxDGMlTJf6gR+Fm/SjA7i4wbs5vEtdiRjRpK+cynUc/gcT/AFFgoCvYhTBccu4Qy0JR2vJNc2fIYXCkxawsmCQH/iS7yM91Oo7oxBN07jjU1O/Br6CkJ14hN8itnU0cs5hh9iHy7jnwYmznPqRrU7uX6D2ynUXA3jA8mP3cCY+qH8fBNQSxjFH5BCTYlQ7coZ0CFC9R1M4BfczbH7vwmo8RQoC1XGVbxXZ2A73kzaYjLJDB4k7VETUO3Zm2zy/EmE9KEGJukTeWUk0/ekCag1SqEOC9of0INXC8zVtrFJTa0JpBTqWRwVW8NiE5MX1Wz2Jn27O8n1GQxsK074871sRwo1g+lthkk1JyJ/VVk/+G57WVY1Wd2Rhfob328fy6puVXdU11MTuI93RYHWak3L2U1KOZVnSaSFt5OWl+W3Sl/h9+rO6i9VwkcYFjVVqypToqBbB8T6hFfBNZEadqtK/1us0VoP8rLwAr5uHQu4KQq7XNXaGiZxEcstAJrHpXoGeY6eVY/Yfg4If+vV3JKWcdYGReNGUFm9jg+EvxUFOi92j7pqJLr68ZZID50Fgf7FBfzViHEtqC68JGqrQ2LpimpK1N7/NTqgA3vEyaVXpIQ+7FJ8mVIt40dc3+zADrHGAzhia8qWFRHy1zV2ClqnakcfFJE2bHOnkxWRd27jV+FDhVUv+vpFzT4k/nzoFo5eEfXPQ5FoZxKgZg4Oa/QU8YuR3He4lasAAAAASUVORK5CYII="
                            alt=""
                            class="tw_logo"></a>
                    </div>
                </div>
    
            </template>

<script>
export default {
    data(){
        return {
            
        }
    },
    computed: {
        currentPath(){
            return this.$route.path.substring(1);
        }
    }


}
</script>

<style scoped>

@media screen and (max-width: 600px){
.header[data-v-f5af7434] {
    display: none;
}
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
.herdes .herde-center {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.herdes .herde-center .blueArhive {
    margin-top: 0.1rem;
    margin-left: 3.6rem;
    width: 5.2333333333rem;
    height: 1.8666666667rem;
}
.herdes .herde-center ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 5rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 65%;
    flex: 0 0 65%;
}
.herdes .herde-center ul .red{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAGCAYAAAAR63aAAAAAMklEQVRIie3SMQ0AIBAEwQf//hBDARb+KkIyo2CLHbX2KWiarwP4i2GIGIaIYYgYhsgFXaAC3VAg0A8AAAAASUVORK5CYII=) no-repeat;
    background-size: 100%;
}
.herdes .herde-center ul .title{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 1.0666666667rem;
    cursor: pointer;
    color: #fff;
    font-size: .5333333333rem;
    line-height: 2.2666666667rem;
    font-family: RoGSanSrfStd-Bd;
    letter-spacing: .1rem;
}
.herdes .herde-center .yt_logo {
    position: absolute;
    width: 3.2rem;
    top: 0.8rem;
    right: 4.1333333333rem;
    cursor: pointer;
}
.herdes .herde-center .tw_logo {
    position: absolute;
    width: 1.2333333333rem;
    right: 1.7333333333rem;
    top: 0.6333333333rem;
    cursor: pointer;
}
</style>