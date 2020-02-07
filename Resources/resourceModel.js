const db = require('../data/dbConfig.js')


module.exports = {
    findResourceByName,
    postResource,
    findById,
    find
    
}



function findResourceByName(name) {
    return db('projects')
        .where({ name })
}

function findById(name) {
    return db('projects')
        .where({ name })
}

function find() {
    return db('resources')
        
}


async function postResource(action) {
    const [id] = await db('actions').insert(action)
    return findById(project_id)
}