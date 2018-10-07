
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {name: 'Quang', age: '6', gender: 'Male'},
        {name: 'Thuong', age: '69', gender: 'Female'},
        {name: 'Bopdan', age: '5', gender: 'Female'}
      ]);
    });
};
