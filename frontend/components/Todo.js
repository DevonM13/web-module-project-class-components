import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { onClick } = this.props
    const {id, name, completed} = this.props.todo
    return (
      <div onClick={() => onClick(id)}>
        {name} {completed && '✓'}
      </div>
    )
  }
}
