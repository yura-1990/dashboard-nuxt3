import {defineStore} from "pinia";
export const useRolesStore = defineStore("roles", {
    state: () => {
        return {
            roleLists: {},
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
            console.log(await data.value)
        },

    },
});
