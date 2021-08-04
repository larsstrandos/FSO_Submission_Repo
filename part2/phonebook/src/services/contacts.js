const baseUrl = "http://127.0.0.1:3001/persons"

export const getAll = async() => {
    const request = await fetch(baseUrl).catch(err => console.log(err))
    return await request.json()
}

export const create = async(personObject) => {
    const request = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personObject)
    }).catch(err => console.log(err))
    return await request.json()
}

export const deletePerson = async(id) => {
    const url = `${baseUrl}/${id}`
    const request = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).catch(err => console.log(err))
    return await request.json()
}

export const updatePerson = async(personObject) => {
    const url = `${baseUrl}/${personObject.id}`
    const request = await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personObject)
    }).catch(err => console.log(err))
    return await request.json()
}