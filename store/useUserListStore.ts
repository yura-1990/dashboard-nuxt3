import {defineStore} from "pinia";
export interface UserCreateInterface {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    roles: Object,
    id: number | null
}

export const useUserListStore = defineStore("userList", {
    state: () => {
        return {
            userLists: {},
            error: null,
            oneUser: {}
        };
    },

    actions: {
        getUserList: async function (page: number = 1) {
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

        getOneUser: async function(id: number){
            const token = useCookie("token")
            const userId = useCookie('userId')
            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/users/show/${id}`,
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    }
                }
            );

            console.log(data)

            if (data.value){
                // @ts-ignore
                userId.value = id
                if (data.value.errors) {
                    this.error = await data.value.errors
                } else {
                    this.error = null
                    this.oneUser = await data.value
                }
            }

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

        },

        updateUsers: async function({name, email, password, password_confirmation, roles, id}: UserCreateInterface){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/users/update/${id}`,
                {
                    method: "put",
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

        },

        deleteUsers: async function(id:number){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/users/soft-delete/${id}`,
                {
                    method: "delete",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    }
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

        },

        getTrashedUsers: async function(page:number = 1){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/users/trashed",
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

        restoreUsers: async function(id:number){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/users/restore/${id}`,
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    }
                }
            );

            if (data.value){
                if (data.value.errors) {
                    this.error = await data.value.errors
                } else {
                    this.error = null
                }
            }

        },

        restoreAllUsers: async function(){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/users/restore-all",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    }
                }
            );

            if (data.value){
                if (data.value.errors) {
                    this.error = await data.value.errors
                } else {
                    this.error = null
                }
            }

        }

    },
});
