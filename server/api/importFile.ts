export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    return await $fetch(`http://localhost:8000/api/imports/get-imported-data-list/${body.fileName}`, {
        headers: {
            'Accept': '*/*',
            "Authorization": `Bearer ${body.token}`
        }
    })
})
