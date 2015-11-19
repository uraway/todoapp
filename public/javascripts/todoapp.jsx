
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    let index = parseInt(this.props.index); //文字列を解析して整数を返す
    this.props.onClickClose(index);
  }
  onClickDone() {
    let index = parseInt(this.props.index);
    this.props.onClickDone(index);
  }

  render() {
    let itemClass = this.props.item.done ? 'done':'undone';
    return (
      <table className='item'>
        <tbody>
          <tr className={itemClass}>
            <td><span className='mark-done' onClick={this.onClickDone}>{'\u2714'}</span></td>
            <td><span className={itemClass}>{this.props.item.text}</span></td>
            <td><span className='close' onClick={this.onClickClose}>{'\u2718'}</span></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class List extends React.Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.state = ({
      inputValue: '',
    });
  }

  handleChange(e) {
      this.setState({
        inputValue: e.target.value
      });
    }

  addTodo(e) {
    e.preventDefault();
    let newItem = this.props.initItems.unshift({
      text: this.state.inputValue, //valueで揃えてないから詰まった
      done: false
    });
    this.setState({
      initItems: newItem,
      inputValue: ''
    });
  }

  deleteTodo(index) {
    this.props.initItems.splice(index, 1);
    this.setState({
      initItems: this.props.initItems
    });
  }

  doneTodo(index) {
    let todo = this.props.initItems[index];
    let item = this.props.initItems;
    item.splice(index, 1);
    todo.done = !todo.done;
    todo.done ? item.push(todo) : item.unshift(todo);
    this.setState({
      item: item
    });
  }

  render () {
    var items = this.props.initItems.map((item, index) => {
      return (
        <Item key={index}
              item={item}
              index={index}
              onClickClose={this.deleteTodo.bind(this,index)}
              onClickDone={this.doneTodo.bind(this)} />
      );
    });
    return (
      <div>
        <ul className="list-group"> {items} </ul>
        <form id='add-form' onSubmit={this.addTodo.bind(this)}>
          <input type='text'
            required
            placeholder='Add your todo!'
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}/>
            <button className='add-button'>Add Todo</button>
        </form>
      </div>
    );
  }
}

var todoItems = [];
todoItems.push({text: "learn react", done: false});
todoItems.push({text: "Go shopping", done: true});
todoItems.push({text: "buy flowers", done: true});

ReactDOM.render(
  <List initItems={todoItems} />,
  document.getElementById('content')
);
