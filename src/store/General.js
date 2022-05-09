import { defineStore } from 'pinia'


export const useGeneralStore = defineStore('general', {
    state:()=>({
        logo:'http://192.168.2.222/litoapps/img/logo_b.png',
    }),
    getters:{
        getLogo(state){
            return state.logo
        },
        isDarkMode() {
            return true;
        }
    }

});