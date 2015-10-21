    var todoModel = new hello_world.TodoModel();
    undefined
    todoModel.getContent();
    ""
    todoModel.isDone();
    false

    todoModel.setContent('hello world');
    undefined
    todoModel.getContent();
    "hello world"


    var view = {update: function(evt) {console.log('The model changed!');}};
    undefined
    maria.on(todoModel, 'change', view, 'update');
    undefined

    todoModel.setDone(true);
    "The model changed!"
    undefined



