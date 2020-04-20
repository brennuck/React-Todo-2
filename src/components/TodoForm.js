import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
    }

    handleChanges = e => { // updates state with each keystroke
        this.setState({
            newItem: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: "" // clears the input when you add item
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="item"
                        value={this.state.newItem}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;