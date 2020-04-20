import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css'

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }

  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTodo]
    });
  };

  toggleTodo = itemId => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  clearTodo = () => {
    this.setState({
      ...this.state,
      data: this.state.data.filter(todo => {
        return !todo.completed
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addItem = {this.addTodo} />
        <TodoList
        data = {this.state.data}
        toggleTodo = {this.toggleTodo}
        clearTodo = {this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
