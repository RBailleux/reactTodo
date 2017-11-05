import React, { Component, type Node } from 'react';

const TodoList = props => {
  console.log(props.todos)
  const isEmpty = !!props.todos && props.todos.length === 0;
  return (
    <ul className="todolist">
      {isEmpty && (
        <li>
          <span>Aucun élément à afficher !</span>
        </li>
      )}
      {!!props.todos && props.todos.map((item, index) => {
        if(item.complete){
          return <li key={index} className="complete">{item.label}</li>;
        }
        else{
          return <li key={index} onClick={(e) => {e.target.className='complete'}}>{item.label}</li>;
        }
      })}
    </ul>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.todoDone = this.todoDone.bind(this);
    this.state = {
      todos: [],
      complete: false
    }
  } 

  componentWillMount() {

  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  componentWillUpdate(nextProps, nextState){

  }

  componentWillUnmount() {

  }

  componentDidMount() {
  var that = this;
  var url = 'https://api.myjson.com/bins/9l2ez'

  fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
    let arrayData = Object.keys(data.todos).map(function(k) { return data.todos[k] });
    that.setState({ todos: arrayData });
  });
}
  
  todoDone = (e) => {
      console.log(123)
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />;
      </div>
    );
  }
}

export default Todo;
