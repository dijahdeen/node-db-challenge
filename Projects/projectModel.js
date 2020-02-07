const db = require('../data/dbConfig.js')

module.exports = {
    find,
    postProject
    
    
}

function find() {
    return db('projects')
}


async function postProject(project) {
    const [id] = await db('projects').insert(project)
    return findById(id)
}
