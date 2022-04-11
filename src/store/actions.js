
export default {
    async loadStudents(context){

        const res = await fetch(`https://bluearchivedata-default-rtdb.asia-southeast1.firebasedatabase.app/Main.json`);
    
        const responseData = await res.json();

        if(!res.ok) {
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }

        console.log('data :', responseData);
        const studentLists = [];

        for (const key in responseData){
            const newStudentList = {
                id: key,
                ACC: responseData[key].ACC,
                ATK: responseData[key].ATK,
                CRITR: responseData[key].CRITR,
                DEF: responseData[key].DEF,
                EVA: responseData[key].EVA,
                EXAnimation: responseData[key].EXAnimation,
                EXChar: responseData[key].EXChar,
                Equipment1: responseData[key].Equipment1,
                Equipment2: responseData[key].Equipment2,
                Equipment3: responseData[key].Equipment3,
                ExSkill: responseData[key].ExSkill,
                HEAL: responseData[key].HEAL,
                HP: responseData[key].HP,
                NormalSkill: responseData[key].NormalSkill,
                Outdoor: responseData[key].Outdoor,
                PassiveSkill: responseData[key].PassiveSkill,
                RANGE: responseData[key].RANGE,
                Rare: responseData[key].Rare,
                STABLE: responseData[key].STABLE,
                Shield: responseData[key].Shield,
                Student: responseData[key].Student,
                SubSkill: responseData[key].SubSkill,
                WeaponType: responseData[key].WeaponType,
                attack: responseData[key].attack,
                city: responseData[key].city,
                class: responseData[key].class,
                defense: responseData[key].defense,
                indoor: responseData[key].indoor,
                position: responseData[key].position,
                school: responseData[key].school,
                role: responseData[key].role,
                StudentAvatar: responseData[key].StudentAvatar,
                JapaneseName: responseData[key].JapaneseName,
                JapaneseReading: responseData[key].JapaneseReading,
                Hobbies: responseData[key].Hobbies,
                Age: responseData[key].Age,
                Birthday: responseData[key].Birthday,
                CharacterFull: responseData[key].CharacterFull,
                GunImg: responseData[key].GunImg,
                ExSkillImg: responseData[key].ExSkillImg,
                NormalSkillImg: responseData[key].NormalSkillImg,
                PassiveSkillImg: responseData[key].PassiveSkillImg,
                SubSkillImg: responseData[key].SubSkillImg,
                
                
            };
            studentLists.push(newStudentList);
        }

        context.commit('setStudents', studentLists);

    },

};