import {defineStore} from "pinia";

export const useRolesStore = defineStore("roles", {
    state: () => {
        return {
            roleLists: {},
            error: null,
        };
    },

    actions: {
        getRoleList: async function () {
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/roles/get-all",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                }
            );

            this.roleLists = await data.value
        },

        createRole: async function( descriptions: any, permissions: any ){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/roles/create",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: {
                        descriptions,
                        permissions
                    },
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

    },
});
