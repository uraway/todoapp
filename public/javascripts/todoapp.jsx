/*
constructure

 - todo list
    -todo item[1]
    -todo item[2]
    ...
    -todo item[n]
- todo form

*/

class TodoList extends React.Component {
  render(){
    return (
      <div>
        TodoList
          <li>TodoItem</li>
      </div>
    );
  }
}

class TodoForm extends React.Component {
  render(){
    return (
      <form>
        <input />
      </form>
    );
  }
}

class TodoApp extends React.Component {
  render(){
    return (
      <div>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('content'))
