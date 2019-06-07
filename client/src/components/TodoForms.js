import React, { Component } from 'react';

class TodoForms extends Component {

    state = {
        text : ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onNew(this.state.text);
    }

    handleChange = (event) => {
        
        this.setState({
            text : event.target.value
        })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input value={this.state.text} onChange={this.handleChange}/>
            <button type="submit">Add</button>
        </form>
    }
}

export default TodoForms;
