<template>
    
    <div class="character_body">
        
    <div id="mySidebar" :class="['sidebar', openSlide ? 'sidebarOut' : '']">
        
            <div class="slideContent">
                <character-list-vue
                     @clicked="onClickChild">
                </character-list-vue>
                <button :class="['closeButton', openSlide ? '' : 'nonedisplay']" @click="openSlideM"></button>
            </div>
    </div>

    <el-dialog v-model="dialogTableVisible" center width="80%">
        <div class="dialog">
        <div class="detailInfoDiv">
            <div class="detailTitleDiv">
                <span class="detailTitle">
                    Student Detail Information
                </span>
            </div>
            <div class="tableInfoDiv">
                <el-row class="tableInfo">
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            ATK
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.ATK}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            DEF
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.DEF}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            HP
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.HP}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            HEAL
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.HEAL}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            ACC
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.ACC}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            EVA
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.EVA}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            CRIT.R
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.CRITR}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            STABLE
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.STABLE}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            RANGE
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.RANGE}}
                        </span>
                    </el-col>
                    <!-- <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            CCP
                        </span>
                        <span class="infoNumber">
                            100
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            CCR
                        </span>
                        <span class="infoNumber">
                            100
                        </span>
                    </el-col> -->
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            City
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.city}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            Outdoor
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.Outdoor}}
                        </span>
                    </el-col>
                    <el-col :span="12" class="tableInfoRow">
                        <span class="infoTitle">
                            Indoor
                        </span>
                        <span class="infoNumber">
                            {{getStudentDetail.indoor}}
                        </span>
                    </el-col>
                    
                </el-row>
            </div>
        </div>
        
        </div>

  </el-dialog>
  <div data-v-220d0f1b="" data-v-f5af7434="" class="character">

<div data-v-220d0f1b="" class="character_left">
<div :class="['button-borders', openSlide ? 'nonedisplay' : '']">
  <button class="primary-button" @click="openSlideM"> SEARCH
  </button>
</div>
</div>



<div class="character_right"> 
    <div class="infoMore">
        <more-info-vue 
              :school="getStudentDetail.school.toLowerCase()"
              :studentName="getStudentDetail.JapaneseReading"
              :star="getStudentDetail.Rare"
              :striker="getStudentDetail.role"
              :role="getStudentDetail.class.toUpperCase()"
              :position="getStudentDetail.position.toUpperCase()"
              :atk="getStudentDetail.attack.toUpperCase()"
              :def="getStudentDetail.defense.toUpperCase()"
              :city="getStudentDetail.city"
              :desert="getStudentDetail.Outdoor"
              :indoor="getStudentDetail.indoor"
        ></more-info-vue>
    </div>
    <el-row class="maxGrid">
        <el-col :span="12" class="leftScr">
            <div class="characterImgDiv">
                
                <img :src="getStudentDetail.CharacterFull"
                    alt=""
                    decoding="async"
                    loading="lazy"
                 :class="['characterImg', getStudentDetail.Student, getStudentDetail.JapaneseReading+getStudentDetail.id]">
            </div>

        </el-col>

        <el-col :span="12" class="rightScr">
            <div class="basicStatus">
                <div class="titleDiv boxLean"> <h3 class="title">Basic Status</h3> </div>
                <el-row class="status_more">
                    <el-col :span="21" class="status">
                        <el-row class="hp_atk">
                            <el-col :span="12" class="atk">
                                <span class="blueText">HP</span> 
                                <span class="statusNumber">{{getStudentDetail.HP}}</span>
                            </el-col>
                            <el-col :span="12" class="def">
                                <span class="blueText">ATK</span> 
                                <span class="statusNumber">{{getStudentDetail.ATK}}</span>                                
                            </el-col>
                        </el-row>
                        <el-divider class="marginLess" />
                        <el-row class="def_heal">
                            <el-col :span="12" class="def">
                                <span class="blueText">DEF</span> 
                                <span class="statusNumber">{{getStudentDetail.DEF}}</span>                              
                            </el-col>
                            <el-col :span="12"  class="heal">
                                <span class="blueText">HEAL</span> 
                                <span class="statusNumber">{{getStudentDetail.HEAL}}</span> 
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="3" class="moreSearch">
                        
                        <button class="buttonDetail boxLean" @click="dialogTableVisible = true">
                            <box-icon 
                                class="iconSearch" 
                                name='search-alt-2' 
                                color='#32435f'
                                size="cssSize " 
                                ></box-icon>
                            <h3 class="buttonDetailText">Detail</h3>
                        </button>
                    </el-col>
                </el-row>
            </div>    
            <div class="skillDiv">
                <el-row class="skill" :gutter="20">


                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                             
                            :img="getStudentDetail.ExSkillImg"
                            type="EX SKILL"
                            cost="2"
                            whereToPop="top"
                            ex="true"
                            :use="getStudentDetail.ExSkill"
                            :color="[getStudentDetail.attack.toUpperCase()]">
                            
                        </student-skill-vue>
                    </el-col>
                    

                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            
                            :img="getStudentDetail.NormalSkillImg"
                            type="NORMAL SKILL"
                            
                            whereToPop="top"
                            
                            :use="getStudentDetail.NormalSkill"
                            
                            :color="[getStudentDetail.attack.toUpperCase()]">
                            
                        </student-skill-vue>
                    </el-col>
                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            
                            :img="getStudentDetail.PassiveSkillImg"
                            
                            type="PASSIVE SKILL"
                            cost="2"
                            whereToPop="top"
                            
                            :use="getStudentDetail.PassiveSkill"

                            :color="[getStudentDetail.attack.toUpperCase()]">
                            
                        </student-skill-vue>
                    </el-col>
                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            
                            :img="getStudentDetail.SubSkillImg"
                            
                            type="SUB SKILL"
                            cost="2"
                            whereToPop="top"
                            
                            :use="getStudentDetail.SubSkill"
                            :color="[getStudentDetail.attack.toUpperCase()]">
                            
                        </student-skill-vue>
                    </el-col>
                    
                </el-row>
            </div>
            <div class="gunDiv">
                <el-row class="gun">
                    <el-col :span="5" class="gunTextDiv">
                        <h3 class="gunText">{{getStudentDetail.WeaponType}}</h3>
                        <img v-if="getStudentDetail.Shield=='use'" class="shieldIcon" src="https://static.miraheze.org/bluearchivewiki/thumb/2/27/Icon_Cover.png/27px-Icon_Cover.png">
                    </el-col>
                    <el-col :offset="0" :span="19">
                        <div class="gunImgDiv">
                            <img 
                                :src="getStudentDetail.GunImg" 
                                alt=""
                                class="gunImg">
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="equipDiv">
                <el-row class="equip" :gutter="10" justify="center">
                    <el-col :span="6" class="eqDiv">
                        <div class="boxLean eqImgDiv">
                            <img v-if="getStudentDetail.Equipment1=='hat'" 
                                class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/f/fd/Equipment_Icon_Hat_Tier1.png/96px-Equipment_Icon_Hat_Tier1.png">
                            <img v-else-if="getStudentDetail.Equipment1=='shoes'" 
                            class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/3/3f/Equipment_Icon_Shoes_Tier1.png/96px-Equipment_Icon_Shoes_Tier1.png">
                            <img v-else 
                                class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/c/c4/Equipment_Icon_Gloves_Tier1.png/96px-Equipment_Icon_Gloves_Tier1.png">
                        </div>
                    </el-col>
                    <el-col :span="6" class="eqDiv">
                        <div class="boxLean eqImgDiv">
                            <img v-if="getStudentDetail.Equipment1=='hairpin'" 
                                class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/1/1b/Equipment_Icon_Hairpin_Tier1.png/96px-Equipment_Icon_Hairpin_Tier1.png">
                            <img v-else-if="getStudentDetail.Equipment1=='badge'" 
                            class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/a/a8/Equipment_Icon_Badge_Tier1.png/96px-Equipment_Icon_Badge_Tier1.png">
                            <img v-else 
                                class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/1/1a/Equipment_Icon_Bag_Tier1.png/96px-Equipment_Icon_Bag_Tier1.png">
                        </div>
                    </el-col>
                    <el-col :span="6" class="eqDiv">
                        <div class="boxLean eqImgDiv">
                            <img v-if="getStudentDetail.Equipment1=='Amulet'" 
                                class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/d/d4/Equipment_Icon_Charm_Tier1.png/96px-Equipment_Icon_Charm_Tier1.png">
                            <img v-else-if="getStudentDetail.Equipment1=='watch'" 
                            class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/c/c5/Equipment_Icon_Watch_Tier1.png/96px-Equipment_Icon_Watch_Tier1.png">
                            <img v-else 
                                class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/f/f4/Equipment_Icon_Necklace_Tier1.png/96px-Equipment_Icon_Necklace_Tier1.png">
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</div>

</div>


    </div>
</template>

<script>
import CharacterListVue from './UI/CharacterList.vue';
import MoreInfoVue from './UI/MoreInfo.vue';
import StudentSkillVue from './UI/StudentSkill.vue';

export default {
    components:{
        CharacterListVue,
        MoreInfoVue,
        StudentSkillVue,
    },
    data() {
        return {
            openSlide: false,
            dialogTableVisible: false,
        }
    },
    methods: {
        openSlideM(){
            this.openSlide = !this.openSlide;
        },
        async loadStudents(){
            
            try {
                await this.$store.dispatch('loadStudents');
            }
            catch(error) {
                console.log("Khong nhan duoc data");
            }
            this.$store.commit('setLoading');

        },
        onClickChild () {
          console.log("clicked") // someValue
          this.openSlideM();
        }

    },
    computed: {
        hasStudents(){
            return this.$store.getters.hasStudents;
        },
        getStudents() {            
            return this.$store.getters.students;
        },
        getStudentDetail(){
            return  this.getStudents.find(e => e.id == this.$route.params.id);
        }
    },
    created(){
        if (!this.$store.getters.shouldLoading){
            this.loadStudents();
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 600px){
.button-borders[data-v-1f49fc30]:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.05rem);
    height: 40%;
    left: -4px;
    top: -8px;
    border: 5px solid #fff;
    border-bottom: 0px;
    opacity: 0.9;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0px 0px 12px 6px #00d7fb;
    transition: background-color 0.2s ease-in-out;
}
.button-borders{
    left: 5rem;
}
}
.shieldIcon{
    width: 2rem;
    margin-left: 1.3rem;
    position: absolute;
    z-index: -2;
    opacity: 0.8;

}
.el-divider--horizontal{
    margin: 0!important;
    border-top-width: 3px!important;
}
.elPopover{
    
}


.detailInfoDiv{
    font-family: RoGSanSrfStd-Bd;
}
.detailTitleDiv{
    text-align: center;
}
.detailTitle{
    position: relative;
    font-size: 1.25rem;
    font-weight: 800;
}

.tableInfoDiv{
    padding: 1rem 1rem;
}
.tableInfo{

}
.tableInfoRow{
    margin: 0.5rem 0;
}
.infoTitle{
    padding-left: 0.6rem;
    color: #34445b;
    position: relative;
}
.infoTitle:before {
    display: block;
    content: '';
    width: 0.2rem;
    height: 60%;
    background: #a3dff6;
    position: absolute;
    top: 50%;
    left: 0;
    /* left: 50%; */
    transform: translateY(-50%);
}
.infoNumber{
    margin-left: 1rem;
    color: #38393c
}
.dialog{
    margin-top: -45px;
}

.detailTitle::after {
 display: block;
   content: '';
  width: 100%;
  height: 0.15rem;
  background: #fcef62;
  position: absolute;
  bottom: -5px;
  left: 0;
}
.infoNumber, .infoTitle{
    font-size: 0.7rem;
}
.equipDiv{
    margin-top: 0.5rem;
    background-color: #fff;
    padding: 0.5rem 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 3px;
}
.equip{

}
.schoolDiv{

}
.schoolImgDiv{
    text-align: center;
}
.schoolImg, .eqImg{
    width: 4rem;
    height: 3.14rem;
}
.eqDiv{

}
.schoolImgDiv, .eqImgDiv{
background: rgb(251,252,254);
background: linear-gradient(0deg, rgba(251,252,254,1) 0%, rgba(232,249,253,1) 50%, rgba(212,241,250,1) 100%);
text-align: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
 border: 1px solid #fff;

}
.eqImg{

}
.marginLess{
    margin: 0.2rem 0!important;
}

.gunDiv{
    margin-top: 0.5rem;
    background-color: #fff;
    padding: 0.5rem 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 3px;
}
.gun{

}
.gunTextDiv{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    clip-path: polygon(0% 0%, 100% 0, 88% 50%, 75% 100%, 0% 100%);
    background: #ecf3f9;
    border-radius: 3px;
    border: 1px solid #c7ccd1;
    
}
.gunText{
    font-size: 1.25rem;
    font-weight: 500;
    color: #425772;
    margin-left: -1rem;
    font-family: RoGSanSrfStd-Bd;
    text-shadow: 1px 1px 1px white;

}
.gunImgDiv{
    border: 1px solid #fff;
    background: #e9f0f8;
    transform: skewX(-14deg);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    text-align: center;
}
.gunImg{
    width: 18rem;
}

.skillDiv{
    margin-top: 0.5rem;
    background-color: #fff;
    padding: 0.5rem 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 3px;
}
.skill{

}
.skillIn{
    padding: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: 1px solid #bfbfbe;
    cursor: pointer;
}
.Sskill>.boxLean, .ExSkill>.boxLean{
    transform: skewX(-10deg);
    border-radius: 5px;
}
.ExSkill, .Sskill{
    
}
.ExSkillTittle, .skillTittle{
    color: #566c95;
    text-align: center;
    font-size: 0.4rem;
    font-weight: 600;
    transform: skewX(10deg);
    font-family: RoGSanSrfStd-Bd;
}
.skillImgDiv{
    text-align: center;
}
.ExSkill{

}
.skillTittle{

}
.skillImg{
    /* position: absolute; */
    background: #910d1c;
    border-radius: 0.5rem;
    margin: 5px;
    margin: 5px 0px;
    width: 2.5rem;
    
    
}
.moreSearch{
    align-items: center;
    display: flex;
}
.buttonDetail{
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: none;
    padding: 0.3rem 0.5rem;
    /* margin-left: 0.2rem; */
    cursor: pointer;
}
.iconSearch{

}
.buttonDetailText{
    color: #425772;
    font-size: 0.85rem;

}
.statusNumber{
    margin-left: 1rem;
}
.status_more{
    margin-top: 0.25rem;
    background-color: #ebf3f6;
    border-radius: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 0.375rem 0.5rem;
}
.status{
    font-size: 0.8rem;
    font-weight: 500;
}
.blueText{
    color: #425772;
    
}
.basicStatus{
    padding: 0.4rem;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 2px;
    font-family: RoGSanSrfStd-Bd;
    
    
}
.titleDiv{
    
}
.title{
    text-align: center;
    background-color: #2c4c72;
    color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 2px;
    font-family: RoGSanSrfStd-Bd;
}
.boxLean{
    transform: skewX(-8deg);
    border-radius: 3px;
}
.rightScr{
    background-color: #d0e8f0;
    margin-top: 2.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    height: fit-content;
    z-index: 1;
}
.characterImg{
    width: 23rem;
    padding-left: 4rem;
}
.Hina{
    padding-left: 0rem;
    width: 45rem;
    /* padding-top: 2rem; */
    
}
.Hina31{
    width: 23rem;
    padding-left: 4rem;
}
.Ako, .Ayane, .Yoshimi{
    width: 15rem;
    padding-left: 6rem;
}
.Alice, .Cherino, .Hasumi{
        width: 30rem;
    padding-left: 1rem;
}
.characterImgDiv{
   z-index: -1;
}
.infoMore{
    position: absolute;
    top: 50%;
    left: 2.75rem;
    font-size: 1rem;
}
.leftScr{
    position: relative;
    
    
}

.character .character_right {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 1.5rem;
    overflow: hidden;
    margin-right: 2rem;
}


/* .button-borders:after {
 content: "";
 position: absolute;
 width: calc(100% + 0.5em);
 height: 50%;
 left: -0.3em;
 bottom: -0.3em;
 border: 1px solid #0E1822;
 border-top: 0px;
    opacity: 0.3;
 z-index: 0;
} */

/* Slide css */
.slideConten{
    position: relative;
}
.closeButton{
    position: fixed;
    top: 50%;
    right: 2%;
    background-image: url(data:image/png;base64,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);
    background-size: 100% 100%;
    background-color: Transparent;
    border-radius: 0%;
    width: 1.2666666667rem;
    height: 1.4666666667rem;
    cursor: pointer;
    border: none;
}
.shape {
 fill: #0E1822;
}

.character{
    overflow: hidden;
}
.character_body {
  font-family: "Lato", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  
}

.sidebar {
  height: 85%;
  width: 0;
  
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: .5s;
  padding-top: 3rem;
  position: absolute;
  
}

::-webkit-scrollbar {
    display: none;
}

.sidebarOut{
    z-index: 9;
    width: 100%;
    background-color: white;
    opacity: 1;
}


#main {
  transition: margin-left .5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {

}



.character[data-v-220d0f1b] {
    width: 100%;
    font-size: 1.66667rem;
    height: 36rem;
    display: flex;
    background: url(../img/character_bk.bb649dd0.png) 0% 0% / 100% 100%;
}
.character .character_left[data-v-220d0f1b] {
    margin-left: 2.26667rem;
    z-index: 2;
    height: 100%;
    /* background: rgba(255, 255, 255, 0.7); */
    /* width: 2.2667rem; */
    box-sizing: border-box;
    padding: 3.33333rem 0px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    align-items: flex-start;
}
/* .character .character_left .red[data-v-220d0f1b] {
    width: 6.66667rem;
    opacity: 1;
}
.character .character_left .College-logo[data-v-220d0f1b] {
    margin: 0px auto;
    width: 5.66667rem;
    cursor: pointer;
    opacity: 0.6;
} */


/* .imgs_s {
    z-index: 2;
    height: 5.46667rem;
    width: 34.6333rem;
    position: absolute;
    bottom: 1.1rem;
    left: 2.13333rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.imgs_s a[data-v-220d0f1b] {
    width: 5.46667rem;
    height: 5.46667rem;
    display: inline-block;
    margin: 0px 10px;
    position: relative;
    cursor: pointer;
}
.imgs_s a .pager[data-v-220d0f1b] {
    width: 100%;
    height: 100%;
    border-radius: 15.5%;
}
.imgs_s a .pagers[data-v-220d0f1b] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out 0s;
    border-radius: 15.5%;
}

.imgs_s a .pagers:hover {
    opacity: 1;
} */


.character .character_lefts[data-v-220d0f1b] {
    display: none;
}


/* Button CSS From cssbuttons.io by @faizanullah1999 */

.primary-button {
 
 color: white;
 cursor: pointer;
 font-size: 0.5rem;
 font-weight: bold;
 letter-spacing: 0.05rem;
 border: 1px solid #0E1822;
 padding: 0.8rem 1.2rem;
 background-image: url("data:image/png;base64,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");
 background-color: #0E1822;
 background-color: rgba(20,39,59,.8);
 background-size: 200%;
 background-position: 200%;
 background-repeat: no-repeat;
 transition: 0.2s ease-in-out;
 transition-property: all, border, color;
 position: relative;
 z-index: 1;
 border-radius: 50%;
 border: none;
 font-family: RoGSanSrfStd-Bd;
}

.primary-button:hover {
 border: none;
 color: white;
 background-position: 40%;
 box-shadow: 0px 0px 20px 0.5px #fff;
 
}

.primary-button:before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 0.2rem;
    height: 0.2rem;
    top: -0.05rem;
    left: -0.05rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0px 0px 0.05rem 0.05rem #00d7fb;
}

.primary-button:after {
 content: "";
 position: absolute;
 background-color: #fff;
 width: 0.2rem;
 height: 0.2rem;
 bottom: -0.05rem;
 right: -0.05rem;
 transition: background-color 0.2s ease-in-out;
 box-shadow: 0px 0px 0.05rem 0.05rem #00d7fb;

}


.primary-button:hover:before {
 background-color: white;
 box-shadow: 0px 0px 7px 3px #00d7fb;
 
}


.primary-button:hover:after {
 background-color: white;
 box-shadow: 0px 0px 7px 3px #00d7fb;

}

.button-borders:hover:before{
    box-shadow: 0px 0px 12px 8px #00d7fb;
}

.button-borders {
 width: fit-content;
 height: fit-content;
 position: fixed;
    top: 100px;
    left: 3rem;
}

.button-borders:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.5em);
    height: 40%;
    left: -0.4em;
    top: -0.3em;
    border: 5px solid #fff;
    border-bottom: 0px;
    opacity: 0.9;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0px 0px 12px 6px #00d7fb;
    transition: background-color 0.2s ease-in-out;
}

.nonedisplay{
    display: none;
}

@media screen and (max-width: 600px){
.character[data-v-220d0f1b] {
    overflow: hidden;
    width: 100%;
    /* font-size: 2.962962963rem; */
    height: 113.7777777778rem;
    background: url(../img/character_bks.b688892f.png);
    background-size: 100% 100%;
    display: flex;
}
.character_right{
    overflow: visible!important;
}
.character_left{
    height: 0!important;
    position: relative;
}
.maxGrid{
    display: block;
    position: static;

}
.leftScr{
    float: none;
    position: static;
}
.characterImgDiv {
    z-index: 0;
    position: absolute;
    bottom: -20rem;
    left: 10rem;

}
.characterImg[data-v-1f49fc30] {
    width: auto;
    height: 120.1777777778rem;
    
}
.infoMore[data-v-1f49fc30] {
    position: absolute;
    top: -3rem;
    left: 60%;
    font-size: 1rem;
}
.button-borders{
    top: 50%;
    left: 7rem;
}

.Hina, .Hasumi {
    margin-left: -285px;
}
.Alice, .Asuna8, .Azusa11{
    margin-left: -100px;
}
.Ako, .Ayane, .Yoshimi {
    padding-left: 20rem;
}





/* Button */
.primary-button {
 
 color: white;
 cursor: pointer;
 font-size: 1.5rem;
 font-weight: bold;
 letter-spacing: 1px;
 border: 1px solid #0E1822;
 padding: 8px 16px;
 background-image: url("data:image/png;base64,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");
 background-color: #0E1822;
 background-color: rgba(20,39,59,.8);
 background-size: 200%;
 background-position: 200%;
 background-repeat: no-repeat;
 transition: 0.2s ease-in-out;
 transition-property: all, border, color;
 position: relative;
 z-index: 1;
 border-radius: 50%;
 border: none;
 font-family: RoGSanSrfStd-Bd;
}

.primary-button:hover {
 border: none;
 color: white;
 background-position: 40%;
 box-shadow: 0px 0px 20px 0.5px #fff;
 
}

.primary-button:before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 4px;
    height: 4px;
    top: -2px;
    left: -2px;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0px 0px 2px 2px #00d7fb;
}

.primary-button:after {
 content: "";
 position: absolute;
 background-color: #fff;
 width: 4px;
 height: 4px;
 bottom: -2px;
 right: -2px;
 transition: background-color 0.2s ease-in-out;
 box-shadow: 0px 0px 2px 2px #00d7fb;

}

.detailInfoDiv{
    font-family: RoGSanSrfStd-Bd;
}
.detailTitleDiv{
    text-align: center;
}
.detailTitle{
    position: relative;
    font-size: 2rem;
    font-weight: 800;
}

.tableInfoDiv{
    padding: 1rem 1rem;
}
.tableInfo{

}
.tableInfoRow{
    margin: 0.5rem 0;
}
.infoTitle{
    padding-left: 8px;
    color: #34445b;
    position: relative;
}
.infoTitle:before {
    display: block;
    content: '';
    width: 2px;
    height: 60%;
    background: #a3dff6;
    position: absolute;
    top: 50%;
    left: 0;
    /* left: 50%; */
    transform: translateY(-50%);
}
.infoNumber{
    margin-left: 10px;
    color: #38393c
}
.dialog{
    margin-top: -45px;
}

.detailTitle::after {
 display: block;
   content: '';
  width: 100%;
  height: 3px;
  background: #fcef62;
  position: absolute;
  bottom: -5px;
  left: 0;
}
.infoNumber, .infoTitle{
    font-size: 1.7rem;
}
}
</style>