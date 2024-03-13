import {defineStore} from "pinia";

export const useSalaryManagementStore = defineStore("salary-management", {
    state: () => {
        return {
            salaryManagementLists: [],
            error: null,
        };
    },

    actions: {
        getRoleList: async function () {
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/salary-management/get-all",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                }
            );

            this.salaryManagementLists = await data.value
        },
    }
});
