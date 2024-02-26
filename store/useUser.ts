import { defineStore } from 'pinia'
export const useUserData = defineStore('UserData', {
    state: () => {
        return {
            currentUser: {},
            loading: false,
        }
    },
    getters: {
        getUser(state){
            return state.currentUser
        }
    },
    actions: {
        async fill (userData: {} | undefined) {
            // @ts-ignore
            this.currentUser = userData

        },
        async clear (){
            this.currentUser = {}
        }
    },

})



