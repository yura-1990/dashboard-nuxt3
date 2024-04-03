export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const form = new FormData()
    form.append('import_name', body.fileName)
    form.append('import', body.importFile, body.importFile.name)

    return await $fetch(`http://localhost:8000/api/imports/create`, {
        method: 'post',
        headers: {
            'Accept': '*/*',
            "Authorization": `Bearer ${body.token}`
        },
        body: form
    })

})
