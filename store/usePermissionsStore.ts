import {defineStore} from "pinia";
export const usePermissionsStore = defineStore("permissions", {
    state: () => {
        return {
            permissionLists: [],
        };
    },

    actions: {
        getPermissionList: async function () {
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/permissions/gel-all",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                }
            );

            this.permissionLists = await data.value
        },

        createPermission: async function( descriptions: any ){
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/permissions/create",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: {
                        descriptions,
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
