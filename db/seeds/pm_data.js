
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pm').del()
    .then(function () {
      // Inserts seed entries
      return knex('pm').insert([
        {task: 'task1'},
        {task: 'task2'},
        {task: 'task3'}
      ]);
    });
};
