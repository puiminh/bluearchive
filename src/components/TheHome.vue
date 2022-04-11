<template>
  <div data-v-4a0f314b="" data-v-f5af7434="" class="Home">
    <div class="vsc-controller"></div>
    <a data-v-4a0f314b="" href="/comics" class="">
        <img
            data-v-4a0f314b=""
            src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/ffcLogo.f1e83d2f.png"
            alt=""
            class="ffcLogo"></a>
        <video
            data-v-4a0f314b=""
            preload="auto"
            muted="muted"
            autoplay="autoplay"
            loop="loop"
            src="https://webusstatic.yo-star.com/bluearchive_jp_web/media/bg.555a8a72.mp4"
            class="top-bg"></video>
        <img
            data-v-4a0f314b=""
            src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/bg_cover.9bd1cfea.png"
            class="top-bg-cover">
            <!---->
            <div data-v-4a0f314b="" class="home-ceter">
                <div data-v-4a0f314b="" class="reservation"></div>
                <div data-v-4a0f314b=""></div>
                <img
                    data-v-4a0f314b=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAALmCAMAAAAKSsOZAAAAS1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////+DmQsHAAAAGXRSTlMAZmBaEE03BClBL1VHC108IlEZBiQ0HkoU9OfFGgAACKNJREFUeNrs3Q2O2jAQQGGP80NIQiBAgPuftKJbqVsCsTO4K4t53xGeZM16DYP7KZupaxw0DoWIjEeHtcqrfLmWDmucavlrv3OIdh7kOz9tHKLcRnk0MDRinPbyTHdxCGi8vHC9OSw4drJgy9B4abeVGYZGlNbLI4ZGlEshjxgaUcpeolUMjW82tcwwNKKcC1nJTycH526VzDA0Iq8RSt3B2dYM8oihob31MzQU1wgdX5scGq2XFIbWWXPpJJXC1tDY9ZLSaOhNY/KS1tmZIUK7bNoZumR42tEujHYZSd7O0N/HA+3UCtrRLiz/dpMzI3m72pnR0Y52YbTLSPJ2e2dGRTvahdEuI8nbbZ0ZV9qp9bSjXVj+7XpnBu30trSjXVj+7SpnBu309rSjXVj+7UZnRvJ2nTOjph3twmiXkeTtCmfGRDu1lna0C8u/nXdm0E6voR3twmiXkUZSc2acJS1v6PPG5Sgp9ba2BhwKSaWzt4q2HSQFb+irFfNdsnos+XjDaHq5TCVKrIR6Z2jsTW6VSbESqjK01mNxaHhZw946mVRDg3Wz7wyNnuOqXBBVsGf26dDgGqG2mTzXiP8xNPgBmqDbVV7w1q8RUUODa0S6oWF9pexbQ2MwtN8u8dCouUbwA2U/5zhy69drOm79AAAAAAAAAAAAAAAAAAAAAAAAAJbwFSSt3ZY9EEqtF5GC7/mudynYKqez61lDkmirS81WiOjjylJDnbKXZzq+bR4+rvIHS0lWOhTsrtIpr6w41NnUbMJVOg8SZWTT4YOykjBW4zxxqlnErD+uK/mWoaHcos4/WH477WUB+zbXLTVkLXOU2yhr8Q+W2XHVGpxJjZe3WfopsH/XGNJOu3yUdtonMNqpHDsR2mmPK+20x5V26s3ytNO+WNMui+Nqp93XizXt9C/WtNN/wIR2+hdr2ulfrGmnf7GmXR7H9bPbzV+saZfHcf3gdk9frGmXx3H90HYvn8Bop3+xpp3+xZp2eRzXj2sXOK60e20jy2i3QJbRjnZ3tMuILKPdAi+LaEe7O9plhHZ6hSyiHe3uaPeLvXvRTRwGwig8kwClJBRYLuX9n3QXWmnFLnFdUw3+k/M9wpGstMYeV4R25TpPoh3tLmhXEdqV23kS7RLmnkQ72l3QriLPb3fqVG8kv3usO4fCZcdY9B7r7rE10TEW0e0Gjq1JjrGIbjc4aEVwjEV0u+Q5mI3WwLxXj5U6B6P20Yhvl57c0AoNzItvl74KrjQwL7rd13dLdQbmbTxW3t3SoykIb+c5elNAO6F2jWeYm4KFP4Z25WhXjnZx7M0z7EzB0WNZ6xk6U7Dyx9CuHO3K0S6OdZ6hNQVLfwztytEuQn47lRHS4e3mnqExBQd/DO3K0a4c7eLY+3iOmm09lvXjaXfyWFkbN63GT7TR7TLmOsq82h3fzuy080FKL2CGt7tatn6X1jG8Xx7LPrzcO1ih9vRlfLtP643/Q+7tweh2g7O7BR9Kjm438ICS5GntmceyW4fWPyyUDnzW0e760RA8pl1FO7P9otP4N6LCdrpoV27tSbSj3QXtKkK7cntPoh3tLmhXEdrpDJq1MfEk2tHuinYVaTyFdrS7ol1FaFeON2dkhvTamNCOdhloV5HOU2hHuxuqA45tTNKDrWiXdp77INo9/XX3EbcbnqtGuwz7hd9Duyyz3v9HuwwDUzhpl+3Q+i3aZRi4M0K7DAN3Rmj3HbcXDWn3XafOP9GuoqfzbQJejo3/QbuKNlhsIs5z2tW0wWITsnyjXS0bLDYts1falTvvaFfBBotN0MuqoV2x/YZ2T9yVVxmC+ldFu/JHwWkUdfytrPL+060aNljaraFog6WZ9nJ9ZIOllxlqlxK/Ky8zgzJD7EdDaAZlnP2i8a8pzaBMi/9odEIzKGOd5yzXctuW5Vpu1bBcf3iDpZEaGfs8s57l+mMbLDu1kbHPdWhZro/uystNeK7DesNyLTfrWa4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA3e3AgAAAAAADk/9oIqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrS3r3upA4GYRSe6QkoUNoC4v1f6f7RZBM1jv2moYdhPZew4qsTxRYAAAAAAAAAAAAAAAAAAADRtMf7TuBQPFS12QtS7SoddL0gSZvrf49CkDLXLy5XQdpcn7JakDjXp7wVJM71qfwU2HM1HM4CY66mjFvZmKuJW9mYq4lb2ZjrWCdu5aS5cit758qt7J4rt/IvilJt3MreuXIru+fKreydK7eyd67cyr9pG7VxKyfM1a96o1v5+1z5tjfarVEbt7J3rtzK3rlyK3vmOl1Wx72VE+bqlN8kpD/nyq3sniu3sjHX2cT6mVHpnGJ94amFdrR7kUwNtKPdYOPtYp14tPNr1EA7U64G2q2o3YdEQjvaLeGoBtqtqF2sv/vM2y7WL49p59epgXamUg20W1G7WJ+woB3tlnBSA+1W1C7Wf1/QjnZLOKiBditqd5dI5m1XSSS087uogXa0G2y83UUioR3tRtrw5z5p53eQSGhHuyXUaqAd7QYbb3eSSGhHuyXs1UC7FbUrJRLa0W4JNzXQbkXtOolk3nZHiYR2fq0aaGf6UAPtVtQul0hoR7sl9Gqg3YraZRIJ7Wi3hEINtKPdYOPtVCKZs120zy6edT5lrMdBiRQnnUPQh0T3nc6gCvqU3luuPzDXkXZ1pl8w1wTngz4x10Sfpb7Au7xZenjBEXP1qRvm6natmOsabuX3metT3zFXv33DXN1294y5TriVmeuUW5m58u7eZdQZc3W7XpirX3Firn59x1yn3MrMdcqtzFxfdCu/76vJx97KzNWvzZmrX50x1wm3MnP1Kx7M1a/vmOuUW5m5TriVj1uf6z/5ArFc8uHnmwAAAABJRU5ErkJggg=="
                    alt=""
                    class="ef">
                    <img
                        data-v-4a0f314b=""
                        src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/slogan.1ab23877.png"
                        alt=""
                        class="slogan">
                        <div data-v-4a0f314b="" class="home_tw">
                            <div data-v-4a0f314b="" class="home_tw_center">
                                <div data-v-4a0f314b="" class="home_tw_size">
                                    <a
                                        data-v-4a0f314b=""
                                        href="https://twitter.com/Blue_ArchiveJP"
                                        class="twitter-timeline twitter-timeline-error"
                                        data-twitter-extracted-i1648085721178158035="true"></a>
                                </div>
                                <img data-v-4a0f314b="" src="" alt=""></div>
                            </div>
                            <a data-v-4a0f314b="" href="https://bit.ly/2YBxMAm">
                                <img
                                    data-v-4a0f314b=""
                                    src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/ios-play.02d9f9a4.png"
                                    alt=""
                                    class="ios-play"></a>
                                <a
                                    data-v-4a0f314b=""
                                    href="https://app.adjust.com/fknal8w?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.YostarJP.BlueArchive">
                                    <img
                                        data-v-4a0f314b=""
                                        src="https://webusstatic.yo-star.com/bluearchive_jp_web/img/google-play.8c692266.png"
                                        alt=""
                                        class="google-play"></a>
                                </div>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Home{
    width: 100%;
    font-size: 1.6666666667rem;
    padding-bottom: 36rem;
    position: relative;
    overflow: hidden;
}
.Home .ffcLogo{
    position: absolute;
    right: 0;
    bottom: 0;
    right: 0.2666666667rem;
    width: 10rem;
    bottom: 5.3333333333rem;
    z-index: 3;
    cursor: pointer;
}
.Home .top-bg{
    z-index: 0;
}
.Home .top-bg-cover, .Home .top-bg {
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    left: 0;
    top: 0;
    -webkit-transform: translate(0);
    transform: translate(0);
    height: 100%;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
}
.Home .top-bg-cover {
    z-index: 1;
}

.Home .top-bg-cover, .Home .top-bg{
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    left: 0;
    top: 0;
    -webkit-transform: translate(0);
    transform: translate(0);
    height: 100%;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
}
.Home .reservation{
    z-index: 2;
    position: absolute;
    height: 7.5666666667rem;
    width: 21.6666666667rem;
    background: url(../img/LogoJP.92d9dcd0.png);
    background-size: 100% 100%;
    left: 50%;
    top: 51%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.Home .ef{
    position: absolute;
    right: 0;
    width: 10.5rem;
    top: 4.5333333333rem;
}
.Home .slogan{
    z-index: 2;
    position: absolute;
    top: 6.2rem;
    right: 4.1333333333rem;
    width: 5.2rem;
}
.Home .home_tw {
    z-index: 2;
    position: absolute;
    left: 1.4666666667rem;
    top: 13.6333333333rem;
    top: 9.3333333333rem;
    width: 9.6666666667rem;
    height: 17.5333333333rem;
    background: url(../img/ipone.061a5e2b.png);
    background-size: cover;
}
.Home .home_tw .home_tw_center {
    left: 9.6%;
    position: absolute;
    opacity: .7;
    top: 11%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 8.0666666667rem;
    height: 11rem;
}
.Home .google-play, .Home .ios-play {
    z-index: 3;
    cursor: pointer;
    position: absolute;
    width: 10rem;
    bottom: 5.3333333333rem;
}

.Home .ios-play {
    left: 1.5333333333rem;
}
.Home .google-play {
    left: 11.9333333333rem;
}
.Home .google-play, .Home .ios-play {
    z-index: 3;
    cursor: pointer;
    position: absolute;
    width: 10rem;
    bottom: 5.3333333333rem;
}
@media screen and (max-width: 600px){
.Home[data-v-4a0f314b] {
    background: url(../img/bks.b9dd4211.png);
    background-size: 100% 100%;
    width: 100%;
    overflow: hidden;
    height: 113.7777777778rem;
    padding-bottom: 0;
}

}
</style>