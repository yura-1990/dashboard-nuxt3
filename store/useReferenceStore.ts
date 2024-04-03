import {useCookie, useFetch } from "nuxt/app";
import {defineStore} from "pinia";

export const useReferenceStore = defineStore("references", {
    state: () => {
        return {
            references: [],
            directives: [],
            referenceEndpointLists: {},
            referenceKeys: {} ?? []
        };
    },

    actions: {
        getReferenceList: async function () {
            const token = useCookie("token")
            const {data}: any = await useFetch(
                "http://localhost:8000/api/references/lists",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    }
                }
            );

            this.references = await data.value
        },

        getReferenceByEndpoint: async function (endpoint:  string) {
            const token = useCookie("token")
            const referenceEndpoint = useCookie<string>("referenceEndpoint")
            referenceEndpoint.value = endpoint

            const {data, pending, error}: any = await useFetch(
                `http://localhost:8000/api/references/endpoint/${endpoint}`,
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token.value}`
                    },
                }
            );

            this.referenceEndpointLists = await data.value
            this.referenceKeys = Object.keys(await data.value[Object.keys(await data.value)[0]])
        },
    },
});
