
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  //todo list routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_task)
    .put(todoList.update_task)
    .delete(todoList.delete_task);
};
