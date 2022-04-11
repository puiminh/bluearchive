<template>



  <div class="bigDiv">

  <div class="searchBoxBig">
      <div class="search ml-auto">
    <div class="search-icon"></div>
    <input
        class="search-input"
        type="text"
        placeholder="Search for a character..."
        v-model.trim="searchName"
        @input="onInputChange">
        
        <div class="search-close" @click="searchName=''"></div>
    </div>
<div class="menuBig searchBox">
<ul class="menu cf">
  <li><a href="">ALL</a></li>
  <li class="strikerLi"><a class="striker" href="">STRIKER</a></li>
  <li class="specialLi"><a class="special" href="">SPECIAL</a></li>
</ul>
<ul class="menu oneItem cf">
  <li><a href="">Level</a></li>
</ul>
<ul class="menu oneItem cf">
  <li><a class="listIcon" href=""><box-icon name='menu' color='#ffffff' ></box-icon></a></li>
</ul>
</div>
  </div>

  <div class="characterListDivBig">
  <div class="characterListDiv">
  <el-row class="row-bg characterList" align="top" justify="space-around">
    
    <el-col v-for="item in getStudents" :key="item" :span="4" :xs="8" class="characterOdiv">
        <router-link :to="'/character/'+item.id" class="characterLink" @click="onClickButton">
        
        <div class="characterO">
            <div>
            <img class="imgA" :src="item.StudentAvatar" loading="lazy">
            <div class="smallInfo">
                <div class="character-rarity">
                    <img v-for="star in Number(item.Rare)" :key="star"
                        src="https://rerollcdn.com/BlueArchive/Icons/icon-star.png"
                        class="starIcon"
                        alt="Character Rarity">
                </div>
            </div>
            </div>
            <div class="blur">

            </div>
        </div>
        
          <div class="moreInfoDiv">
            <more-info-vue
              
              :school="item.school.toLowerCase()"
              :studentName="item.JapaneseReading"
              :star="item.Rare"
              :striker="item.role"
              :role="item.class.toUpperCase()"
              :position="item.position.toUpperCase()"
              :atk="item.attack.toUpperCase()"
              :def="item.defense.toUpperCase()"
              :city="item.city"
              :desert="item.Outdoor"
              :indoor="item.indoor"
              >
            </more-info-vue>
         </div>
         <h2 v-if="!item.Student.includes('(')" class="studentName">{{item.Student}}</h2>
         <div class="extraDiv" v-else>
         <h2 class="studentName">{{item.Student.split(' ')[0]}}</h2> 
         <h2 class="studentName extra">{{item.Student.substring(item.Student.indexOf(' ')+1)}}</h2>
         </div>
        </router-link>
        
        
    </el-col>
    
        
    
  </el-row>
  </div>
  </div>
  </div>
</template>

<script>
import MoreInfoVue from "./MoreInfo.vue"
export default {
  components:{
    MoreInfoVue,
  },
  data(){
        return {
            counting: 1,
            searchName: '',
            }
  },
  computed: {
        hasStudents(){
            return this.$store.getters.hasStudents;
        },
        getStudents() {            
            
            return this.$store.getters.students.filter(student => {
               return student.Student.toLowerCase().includes(this.searchName.toLowerCase())
              })
        },
    },
  methods: {
     onClickButton () {
         this.$emit('clicked');
         this.searchName='';
     },
     onInputChange (){

       console.log(this.searchName);
     }
   }
}
</script>

<style scoped>

.extraDiv{
  position: relative;
}
.extra{
  position: absolute;
  margin: 0!important;
}
.visibleBox{
  position: absolute;
  top: 50%;
  
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.eqImg{

}

.moreInfoDiv{
  position: relative;
  display: none;
}
.characterListDivBig{
  border: 10px solid #60a1bd;
    /* Rounded border */
  border-radius: 0px 0px 5px 5px ;
}
.characterListDiv{
  border: 10px solid #fff; /* Gray border */
  border-radius: 5px;  /* Rounded border */
}
.characterList{
    border: 1.5px solid #ddd;
    border-radius: 5px;
}
.bigDiv{
    margin-top: 0.5rem;
    padding: 0 4rem;
    z-index: 999;
}
.characterOdiv{
  margin: 30px 0 10px 0;   
  display: flex;
  justify-content: center;
  align-items: center;
}
.characterO{
    width: 5.5rem;
    height: 6.2rem;
    position: relative;
}
.imgA{
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.blur{
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.3);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    top:0;
    left:0;
    opacity: 0;
}
.characterLink:hover .blur{
    opacity: 1;
}
.characterLink:hover .moreInfoDiv{
    display: block;
}
.characterOdiv:nth-child(5n) .moreInfoDiv {
    left: -3rem;
}
.characterOdiv:nth-child(6n) .moreInfoDiv {
    left: -12rem;
}



.smallInfo{
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - -1px);
    height: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 5px;
    background: rgba(21, 33, 49, 0.8);
}
.starIcon{
    width: 14px;
}
.studentName{
    width: 100%;
    color: #606770;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    text-overflow: ellipsis;
    margin: 15px 0px 4px 0px;
    overflow: hidden;
    transition: color 0.3s ease 0s;
}


/* Menu */


/* Clearing floats */
.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}

.cf {
  *zoom: 1;
}

/* Mini reset, no margins, paddings or bullets */

.search, .search .search-icon {
    display: flex;
    align-items: center;
    height: 40px;
}
.search {
    justify-content: flex-start;
    min-width: 300px;
    line-height: 1em;
    margin: 10px 0px 0px 0px;
    border-radius: 4px;
    background: white;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    transition: all 0.3s ease 0s;
}
.search .search-icon {
    justify-content: center;
    width: 40px;
    margin-right: 5px;
    background-image: url(https://rerollcdn.com/UNITE/UI/search.svg);
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 50% center;
}
.search .search-input {
    flex-grow: 1;
    height: 100%;
    color: #606770;
    font-size: 15px;
    font-weight: 700;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    background: transparent;
}
button, input {
    overflow: visible;
}
.search .search-close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 40px;
    background-image: url(https://rerollcdn.com/UNITE/UI/close.svg);
    background-size: 10px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: 50% center;
}
.submenu {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Main level */
.searchBoxBig{
  background-color: rgb(127,171,200,0.9);
    padding: 1px 20px;
    /* opacity: 0.8; */
    border-radius: 5px 5px 0px 0px;
    display: flex;
 
}

.searchBox{
    display:flex;

}
.menuBig {			
  margin: 10px 0px 10px auto;
  width: 800px;
  /* http://www.red-team-design.com/horizontal-centering-using-css-fit-content-value */
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;	
}
.menu {			
  margin: 0px 5px 0 10px;
  
  /* http://www.red-team-design.com/horizontal-centering-using-css-fit-content-value */
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;	
  font-weight: 800;
  
}

.menu > li {
  background: #fff;
  float: left;
  position: relative;
  transform: skewX(-15deg);
    
}

.menu>li:first-child{
    border-radius: 5px 0px 0px 5px;
  background: #143755;

}
.menu>li:last-child{
    border-radius: 0px 5px 5px 0px;

}
.oneItem>li{
    border-radius: 5px 5px 5px 5px!important;

}
.menu a {
  display: block;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 13px;
}		

.menu li:hover {
  background: #143755;
}		
.menu .strikerLi:hover {
  background: #E31B11;
  
}		
.menu .specialLi:hover {
  background: #1F75FE;
  
}		
.specialLi:hover a{
  color:#fff!important;
}
.strikerLi:hover a{
  color:#fff!important;
}

.menu > li > a {
  transform: skewX(15deg);
  padding: 1em 2em;
}
.listIcon{
    padding: 0.6em 2em!important;
}
.menu > li > .striker{
    color: #E31B11;

}
.menu > li > .special{
    color: #1F75FE;
;

}
@media screen and (max-width: 992px){
  .strikerLi, .specialLi{
  display: none;
}
}

@media screen and (max-width: 600px){
.bigDiv{
    margin-top: 0rem;
    padding: 0 3rem;
    z-index: 999;
}
.searchBoxBig{
  display: block;
}
.searchBox{
  
}


.menu[data-v-6924bd1c] {
    margin: 0px 1px 0 3px;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    font-weight: 800;
}
.characterOdiv:nth-child(5n) .moreInfoDiv {
    left: 0;
}
.characterOdiv:nth-child(6n) .moreInfoDiv {
    left: 0;
}
.characterOdiv:nth-child(4n) .moreInfoDiv {
    left: -4rem;
}
.smallInfo{
  display: none;
}
.characterLink:hover .smallInfo{
    display: flex;
}
.characterO[data-v-6924bd1c] {
    width: 15rem;
    height: 16rem;
    position: relative;
}
}
</style>