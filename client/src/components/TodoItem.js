
import React, { Component } from 'react'
import TodoItemActions from './TodoItemActions';

export default class TodoItem extends Component {
  render() {

    const {item, onSelect, onDelete, ...rest} = this.props;

    return (
      <li style={{
        opacity: item.checked ? 0.5 : 1,
        backgroundColor : "red"
      }} onClick={() => onSelect(item)}>
        { item.text }
      <TodoItemActions onSelect={() => onSelect(item)} onDelete={() => onDelete(item)}></TodoItemActions>
      </li>
    )
  }
}
