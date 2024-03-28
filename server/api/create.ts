import { createFile } from "~/composables/fileOperations";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    createFile(body.fileName)
    return body.fileName
});
