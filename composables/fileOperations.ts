export function updateFile(filePath: string, updateFunction: (content: string) => string): void {
    const fullPath = path.join(__dirname, filePath);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const updatedContent = updateFunction(fileContent);

    // Write updated content back to the file
    fs.writeFileSync(fullPath, updatedContent);

    console.log(`File "${filePath}" updated successfully`);
}
