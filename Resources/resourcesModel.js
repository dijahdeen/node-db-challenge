const db = require('../data/dbConfig.js')


module.exports = {
    findResourceByName,
    postResource,
}



function findResourceByName(name) {
    return db('projects')
        .where({ name })
}


async function postResource(action) {
    const [id] = await db('actions').insert(action)
    return findById(project_id)
}