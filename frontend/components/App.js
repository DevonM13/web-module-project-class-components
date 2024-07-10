import React from 'react';
import TodoList from './TodoList';

let id = 0;
let getId = () => ++id;

const completedList = [
  {
    name: 'clean living space',
    id: getId(),
    completed: false
  },
  {
    name: 'attend to child',
    id: getId(),
    completed: false
  },
  {
    name: 'grocery shopping',
    id: getId(),
    completed: false
  }
]

export default class App extends React.Component {
  // creating state
  constructor() {
    super()
    this.state = {
      completedList: completedList
    }
   
  } 
  addTodo = (name) => {
    this.setState({
      ...this.state,
      completedList: this.state.completedList.concat({ id: getId(), completed: false, name })
    })
  }
  onClick = (itemId) => {
    this.setState({
      ...this.state,
      completedList: this.state.completedList.map(todo => {
        if (itemId == todo.id) return { ...todo, completed: !todo.completed }
        return todo;
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList onClick={this.onClick}completedList={this.state.completedList} addTodo={this.addTodo}/>
      </div>
    )
  }
}
