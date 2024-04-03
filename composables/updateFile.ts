import path from "node:path";
import os from "node:os";
import fs from "node:fs";

export default function updateFile(fileName: string) {
    const filePath = path.join(os.homedir(), '../../opt/dashboard-nuxt/dashboard-nuxt3/navigations/vertical', 'vertical.ts')

    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const newObj = {
            "title": ""+fileName+"",
            "icon": { "name": "material-symbols:lists-rounded", "size": "18" },
            "to": "/references/" + fileName.toLowerCase() + ""
        };

        const startIndex = data.indexOf('[');
        const endIndex = data.lastIndexOf(']') + 1;
        const arrayString = data.substring(startIndex, endIndex);
        const convertJson = await JSON.parse(arrayString)

        const editJsonFile = convertJson.map((el: { title: string; children: any[]; })=>{
            if (el.title === "references"){
                el.children.splice(-1, 0, newObj);
            }

            return el
        })

        const updatedContent = data.substring(0, startIndex) + JSON.stringify(editJsonFile, null, 4) + data.substring(endIndex);

        fs.writeFile(filePath, updatedContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File updated successfully.');
        });
    });

    return true
}
