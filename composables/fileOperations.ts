import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'

export function createFile(fileName: string){
    const folderPath = path.join(os.homedir(), '/Desktop/Nuxt/dashboard/pages/references/');
    const vueFilePath = path.join(folderPath, `${fileName}.vue`);
    const vueFileContent = `<template>\n  <div>\n    <h1>Data</h1>\n</div>\n</template>\n\n<script setup lang="ts">\n</script>\n`;
    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(vueFilePath, vueFileContent);
    return vueFilePath
}

export function updateFile(filePath:string){
    const folderPath = path.join(os.homedir(), '/Desktop/Nuxt/dashboard/pages/references/');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const updatedContent = data.replace('old content', 'new content');

        // Write the updated content back to the file
        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('File updated successfully!');
        });
    })
}

