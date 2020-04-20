import React from "react";
import ReactDOM from "react-dom";

import Todo from './components/Todo';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const items = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: items,
      newItem: "",
    };
  }

  addItem = newItemText => {
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
