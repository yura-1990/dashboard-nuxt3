import {defineStore} from "pinia";

export const useImportStore = defineStore("import", {
    state: () => {
        return {
            dataImportedFile: [],
        };
    },

    actions: {
        importFile: async function (importFile: any) {
            const token = useCookie("token")
            // const body = new FormData()
            // body.append('import_name', importFile.import_name)
            // body.append('import', importFile.import, importFile.import.name)
            //
            // const {data, pending, error}: any = await useFetch(
            //     "http://localhost:8000/api/imports/create",
            //     {
            //         method: "post",
            //         headers: {
            //             'Accept': '*/*',
            //             "Authorization": `Bearer ${token.value}`
            //         },
            //         body: body
            //     }
            // );

            // this.dataImportedFile = await data
        },

        createFile: function (folderPath: string, fileName: string, content: string) {
            // const directoryPath = path.join(__dirname, folderPath);
            // const vueFilePath = path.join(directoryPath, `${fileName.toLowerCase()}.vue`);
            //
            // // Create directory if it doesn't exist
            // if (!fs.existsSync(directoryPath)) {
            //     fs.mkdirSync(directoryPath, { recursive: true });
            // }
            //
            // // Write content to the Vue file
            // fs.writeFileSync(vueFilePath, content);
            //
            // console.log(`Vue file "${fileName}.vue" created successfully in ${folderPath}`);
        }
    },
});
