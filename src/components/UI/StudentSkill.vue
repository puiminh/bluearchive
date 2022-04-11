<template>
  
                        <el-popover placement="top" :width="350" trigger="click" class="elPopover">
                            <template #reference>
                                <div class="skillIn boxLean">
                                    <div class="ExSkillTittle">
                                        {{type}}
                                    </div>
                                    <div :class="['skillImgDiv']">
                                        <img 
                                            :src="img" 
                                            alt=""
                                            :class="['skillImg', color]">
                                    </div>
                                </div>
                            </template>
                        <div class="skillDetailDiv">
                            <div class="skillDetailTitle">
                                {{skillName}}
                            </div>                      
                            <el-divider />
                            <div class="skillType">
                                <span class="whatSkill">
                                    {{type}}
                                </span>
                                <span v-if="ex" class="splash"> / </span>
                                <span v-if="ex" class="cost">
                                    COST: 
                                </span>
                                <span v-if="ex" class="costNumber">
                                    {{cost}}
                                </span>
                            </div>
                            
                            <div class="skillUse">
                                {{use}}
                            </div> 
                        </div>
                        </el-popover>

</template>

<script>
export default {
    
  props: ['ex','type','whereToPop','img','cost','skillName','use', 'color'],
    
  data(){
    return {
      
      
    }
  },
  computed: {
    // viewId(){
    //   return this.$store.getters.getViewId;
    // },
  },

}
</script>

<style scoped>
@media screen and (max-width: 600px){
.ExSkillTittle {
    display: none;
}
}
.skillDetailDiv{
    font-family: RoGSanSrfStd-Bd;
}
.skillDetailTitle{
    font-size: 16px;
    font-weight: 700;
}
.skillType{

}
.skillUse{
    margin-top: 15px;
    font-family: "Roboto",sans-serif;
    font-size: 14px;
}
.whatSkill{
    font-size:10px;
    color: #496f8d;
}
.cost{
    font-size:10px;
    color: #666767;
}
.costNumber{
    font-size:10px;
    color: #1b354f;
}
.splash{
    font-size: 8px;
    font-weight: 200;
}

.el-divider--horizontal{
    margin: 0!important;
    border-top-width: 3px!important;
}
.skillDiv{
    margin-top: 10px;
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
    border-radius: 0.5rem;
    margin: 5px;
    margin: 5px 0px;
    width: 2.5rem;
    
    
}
.red, .EXPLOSION, .LIGHT{
    background: #910d1c;
}
.yellow, .PENETRATION, .HEAVY{
    background: #be8801;
}
.blue, .MYSTIC, .SPECIAL, .MYSTERIES{
    background: #226f9b;
}

</style>