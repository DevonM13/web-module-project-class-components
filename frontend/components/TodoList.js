import React from 'react';
import Todo from './Todo';
import Form from './Form';

export default class TodoList extends React.Component {
  state = {
    showAll: true
  }
  toggleShowAll = evt => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    })
  }
  render() {
    const { completedList, onClick, addTodo } = this.props
    const filtered = completedList.filter(td => !td.completed || this.state.showAll)
    return (
      <div>
        <h2>Todos:</h2>
        { 
          filtered.map((todo) => 
            (<Todo onClick={onClick} key={todo.id} todo={todo}/>))
        }
        <Form addTodo={addTodo}/>
       <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed' : 'Show Completed'}</button>
      </div>
    )
  }
}
