<template>
  <el-carousel  type="card" height="19.3rem" arrow="always" :autoplay="false" :interval="10000000000" indicator-position="none">
    <el-carousel-item>
        
      
    <img
        data-v-08345156=""
        src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/system02.ffe22824.png"
        data-v-63233e00="">
        <div
            class="swiper-slide-shadow-left"
            data-v-63233e00=""
            style="opacity: 0; transition-duration: 0ms;"></div>
        <div
            class="swiper-slide-shadow-right"
            data-v-63233e00=""
            style="opacity: 0.00157853; transition-duration: 0ms;"></div>
    
    </el-carousel-item>
    <el-carousel-item>
            
        <img
            data-v-08345156=""
            src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/system03.1b946a75.png">
            <div
                class="swiper-slide-shadow-left"
                style="opacity: 0.104183; transition-duration: 0ms;"></div>
            <div
                class="swiper-slide-shadow-right"
                style="opacity: 0; transition-duration: 0ms;"></div>
        
    </el-carousel-item>
    <el-carousel-item>
        
    <img
        data-v-08345156=""
        src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/system01.26480e4a.png">
        <div
            class="swiper-slide-shadow-left"
            style="opacity: 0; transition-duration: 0ms;"></div>
        <div
            class="swiper-slide-shadow-right"
            style="opacity: 0; transition-duration: 0ms;"></div>
    
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>


.el-carousel__item:nth-child(2n) {
  
}

.el-carousel__item:nth-child(2n + 1) {
  
}
/* .el-carousel__arrow--right {
    width: 1.26667rem;
    height: 1.46667rem;
    position: absolute;
    right: 24%;
    background-image: url(data:image/png;base64,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);
    background-size: 100% 100%;
    background-color: Transparent;
    border-radius: 0%;
}
.el-carousel__arrow--left {
    width: 1.26667rem;
    height: 1.46667rem;
    left: 21.5%;
    position: absolute;
    background-image: url(data:image/png;base64,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);
    background-size: 100% 100%;
    background-color: Transparent;
    border-radius: 0%;
}
.el-icon {
    display: none;
} */

img{
    
    width: 32rem;
    height: 17.9911rem;
}


</style>