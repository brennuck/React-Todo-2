import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newTodo);
        this.setState({
            newTodo: ""
        });
    };

    render() {

        console.log("cheese", this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type = 'text'
                    name = 'todo'
                    value = {this.state.newTodo}
                    onChange = {this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;