import {defineStore} from "pinia";
export const useStatesStore = defineStore("states", {
    state: () => {
        return {
            stateLists: [],
            directives: [],
            state: {}
        };
    },

    actions: {
        getStateList: async function () {
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/states/integration/states",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    }
                }
            );

            this.stateLists = await data.value
        },

        getStateByID: async function (id:number) {
            const token = useCookie("token")
            const stateID = useCookie<number>("stateID")
            stateID.value = id
            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/states/integration/states/${id}`,
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                }
            );

            this.state = await data.value
        },

        getDirectiveLists: async function () {
            const token = useCookie("token")
            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/states/integration/directives`,
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                }
            );

            this.directives = await data.value
        },

    },
});
