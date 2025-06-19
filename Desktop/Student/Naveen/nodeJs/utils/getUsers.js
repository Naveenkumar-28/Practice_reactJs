
const fsPromises = require('fs/promises')

const getUsers = async () => {
    try {
        const data = await fsPromises.readFile('Users.json', "utf-8")
        if(!data)return []
        return JSON.parse(data)

    } catch (error) {

        throw error
    }
}

module.exports = { getUsers }