
exports.up = function(knex) {
        return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .notNullable()
            tbl.text('description')
                .notNullable()
            tbl.boolean('completed')
                .defaultTo('false')
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .notNullable()
            tbl.text('description')
                
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.integer('projects_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')

            tbl.text('description')
                .notNullable()
            tbl.text('notes')
            tbl.boolean('completed')
                .notNullable()
                .defaultTo('false')
        })

        .createTable('projectresources', tbl => {
            tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')

            tbl.integer('resources_id')
              .unsigned()
              .notNullable()
              .references('id')
              
              .inTable('resources')
          
            
            tbl.primary(['resources_id', 'project_id']);
          });

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projectresources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    
    

    
};
