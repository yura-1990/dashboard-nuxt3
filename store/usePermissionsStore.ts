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

    },
});
