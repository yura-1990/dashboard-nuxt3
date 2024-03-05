import {defineStore} from "pinia";


export interface UserCreateInterface {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    roles: Object
}

export const useUserListStore = defineStore("userList", {
    state: () => {
        return {
            userLists: {},
            error: null
        };
    },

    actions: {
        getUserList: async function (page: number) {
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/users/list",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                    params: {
                        page: page
                    }
                }
            );

            this.userLists = await data.value
        },

        createUser: async function({name, email, password, password_confirmation, roles}: UserCreateInterface){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/users/create",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: { name, email, password, password_confirmation, roles},
                }
            );

            if (data.value){
                if (data.value.errors) {
                    this.error = await data.value.errors
                } else {
                    this.error = null
                    this.userLists = await data.value
                }
            }

        }

    },
});
