const db = require('../data/dbConfig.js')


module.exports = {
    findTask,
    postTasks,
}



function findTask() {
    return db('tasks')
        .join('projects', 'project_id', 'projects.id')
        .select('tasks.descriptiondescription')
}


async function postTasks(actions) {
    const [id] = await db('actions').insert(actions)
    return findById(project_id)
}