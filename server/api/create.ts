import createFile from "~/composables/fileOperations";
import updateFile from "~/composables/updateFile";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const isFileCreated = createFile(body.fileName)
    const isFileUpdated = updateFile(body.fileName)

    return {
        status: isFileCreated && isFileUpdated
    }
})
