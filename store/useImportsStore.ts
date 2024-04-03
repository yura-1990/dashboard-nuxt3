import {defineStore} from "pinia";

export const useImportsStore = defineStore("imports", {
    state: () => {
        return {
            dataImportedFile: [],
            fileImportData: []
        };
    },

    actions: {
        importFile: async function (importFile: any) {
            const token = useCookie("token")
            const body = new FormData()
            body.append('import_name', importFile.import_name)
            body.append('import', importFile.import, importFile.import.name)

            const {data, pending, error}: any = await useFetch(
                "http://localhost:8000/api/imports/create",
                {
                    method: "post",
                    headers: {
                        'Accept': '*/*',
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: body
                }
            );

            this.dataImportedFile = await data
        },
    },
});
