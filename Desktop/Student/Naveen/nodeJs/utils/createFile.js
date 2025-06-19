const fsPromises = require('fs/promises')

const CreateFile = async ({ fileName, data }) => {
    try {
        await fsPromises.writeFile(fileName, JSON.stringify(data), "utf-8")

    } catch (error) {
        throw error
    }
}

module.exports = { CreateFile }