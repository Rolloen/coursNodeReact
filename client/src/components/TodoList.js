import React from 'react';
import TodoItem from "./TodoItem";
import TodoForms from "./TodoForms";


class TodoList extends React.Component {

    state = {
        todo : [
            {'text' : 's 1'},
            {'text' : 'todo 2', 'checked' : true}
        ]
    }

    handleNew = (text) => {
        const todo = {
            text: text,
            checked: false
        }
        
        this.setState({
            todo: [...this.state.todo, todo]
        });
    }

    handleSelect = (item) => {
        this.setState({
            todo: this.state.todo.map(todo => {
                if(todo.text === item.text) {
                    todo.checked = !todo.checked;
                }
                return todo;
            })
        });
    }

    handleDelete = (item) => {
        this.setState({
            todo: this.state.todo.filter(todo => {
                return todo.text !== item.text;
            })
        });
    }

    render() {

        return <>
            {/* <button onClick={this.handleNew}>{'Add Item'}</button> */}
            <TodoForms onNew={this.handleNew}></TodoForms>
            <ul>
                {
                    this.state.todo.map((item, index) => 
                        <TodoItem key={index} item={item} 
                            onSelect={this.handleSelect} 
                            onDelete={this.handleDelete}></TodoItem>
                    )
                }
            </ul>
        </>
    }
}

export default TodoList;