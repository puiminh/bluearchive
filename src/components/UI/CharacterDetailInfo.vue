<template>
  <div class="character_right"> 
    <div class="infoMore">
        <more-info-vue 
            school="abydos"
            studentName="Shirasu Azusa"
            :star="2"
            striker="STRIKER"
            role="ATTACKER"
            position="MIDDLE"
            atk="EXPLOSION"
            def="SPECIAL"
            city="A"
            desert="D"
            indoor="S"
        ></more-info-vue>
    </div>
    <el-row class="maxGrid">
        <el-col :span="12" class="leftScr">
            <div class="characterImgDiv">
                <img src="https://bluearchive.wikiru.jp/attach2/E382B7E383ADE382B3_E382B7E383ADE382B35F302E706E67.png" alt=""
                 class="characterImg">
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
                                <span class="statusNumber">15154</span>
                            </el-col>
                            <el-col :span="12" class="def">
                                <span class="blueText">ATK</span> 
                                <span class="statusNumber">2332</span>                                
                            </el-col>
                        </el-row>
                        <el-divider class="marginLess" />
                        <el-row class="def_heal">
                            <el-col :span="12" class="def">
                                <span class="blueText">DEF</span> 
                                <span class="statusNumber">66</span>                              
                            </el-col>
                            <el-col :span="12"  class="heal">
                                <span class="blueText">HEAL</span> 
                                <span class="statusNumber">3571</span> 
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="3" class="moreSearch">
                        
                        <button class="buttonDetail boxLean" @click="dialogTableVisible = true">
                            <box-icon class="iconSearch" name='search-alt-2' color='#32435f' ></box-icon>
                            <h3 class="buttonDetailText">Detail</h3>
                        </button>
                    </el-col>
                </el-row>
            </div>    
            <div class="skillDiv">
                <el-row class="skill" :gutter="20">


                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            skillName="Drone: Fire Support" 
                            img="https://static.miraheze.org/bluearchivewiki/thumb/0/0a/SKILLICON_SHIROKO_EXSKILL.png/88px-SKILLICON_SHIROKO_EXSKILL.png"
                            type="EX SKILL"
                            cost="2"
                            whereToPop="top"
                            ex="true"
                            use="Deals damage equal to 400% of her attack power against single enemy."
                            color="red">
                            
                        </student-skill-vue>
                    </el-col>
                    

                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            skillName="Hand Grenade" 
                            img="https://static.miraheze.org/bluearchivewiki/thumb/9/9c/COMMON_SKILLICON_CIRCLE.png/88px-COMMON_SKILLICON_CIRCLE.png"
                            type="NORMAL SKILL"
                            
                            whereToPop="top"
                            
                            use="Deals 193% of ATK as DMG to enemies in a round-shaped area every 25 sec."
                            color="blue">
                            
                        </student-skill-vue>
                    </el-col>
                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            skillName="Pinpoint" 
                            img="https://static.miraheze.org/bluearchivewiki/thumb/3/39/COMMON_SKILLICON_WEAPONBUFF.png/88px-COMMON_SKILLICON_WEAPONBUFF.png"
                            type="PASSIVE SKILL"
                            cost="2"
                            whereToPop="top"
                            ex="true"
                            use="Increase CRIT.R by 14%."
                            color="yellow">
                            
                        </student-skill-vue>
                    </el-col>
                    <el-col :span="6" class=" ExSkill">
                        <student-skill-vue 
                            skillName="Hi-Rapid Fire" 
                            img="https://static.miraheze.org/bluearchivewiki/thumb/3/39/COMMON_SKILLICON_WEAPONBUFF.png/88px-COMMON_SKILLICON_WEAPONBUFF.png"
                            type="SUB SKILL"
                            cost="2"
                            whereToPop="top"
                            ex="true"
                            use="Has a 20% chance to increase ATK SPD by 30.2% when dealing Normal Attack. Last for 30 sec (CD 25 sec)."
                            color="red">
                            
                        </student-skill-vue>
                    </el-col>
                    
                </el-row>
            </div>
            <div class="gunDiv">
                <el-row class="gun">
                    <el-col :span="5" class="gunTextDiv">
                        <h3 class="gunText">AR</h3>
                    </el-col>
                    <el-col :offset="0" :span="19">
                        <div class="gunImgDiv">
                            <img 
                                src="https://static.miraheze.org/bluearchivewiki/5/5b/Weapon_Icon_10010.png" 
                                alt=""
                                class="gunImg">
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="equipDiv">
                <el-row class="equip" :gutter="10" justify="center">
                    <!-- <el-col :span="6" class="schoolDiv">
                        <div class="boxLean schoolImgDiv">
                            <img class="eqImg" src="https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/75px-Abydos.png">
                        </div>
                    </el-col> -->
                    <el-col :span="6" class="eqDiv">
                        <div class="boxLean eqImgDiv">
                            <img class="eqImg" 
                                src="https://static.miraheze.org/bluearchivewiki/thumb/f/fd/Equipment_Icon_Hat_Tier1.png/93px-Equipment_Icon_Hat_Tier1.png">
                        </div>
                    </el-col>
                    <el-col :span="6" class="eqDiv">
                        <div class="boxLean eqImgDiv">
                            <img class="eqImg" src="https://static.miraheze.org/bluearchivewiki/thumb/1/1b/Equipment_Icon_Hairpin_Tier1.png/93px-Equipment_Icon_Hairpin_Tier1.png">
                        </div>
                    </el-col>
                    <el-col :span="6" class="eqDiv">
                        <div class="boxLean eqImgDiv">
                            <img class="eqImg" src="https://static.miraheze.org/bluearchivewiki/thumb/c/c5/Equipment_Icon_Watch_Tier1.png/93px-Equipment_Icon_Watch_Tier1.png">
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import MoreInfoVue from './MoreInfo.vue';
import StudentSkillVue from './StudentSkill.vue';
export default {
    components: {
        MoreInfoVue,
        StudentSkillVue,
    }
}
</script>

<style scoped>

</style>