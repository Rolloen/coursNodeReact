import React, { Component } from 'react'

export default class TodoItemActions extends Component {


    render() {
        const {onSelect, onDelete} = this.props;

        return (
            <div>
                <div onClick={onSelect}>Select</div> 
                <div onClick={onDelete}>Delete</div>
               
            </div>
        )
    }
}
