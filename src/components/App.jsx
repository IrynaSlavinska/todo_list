import { Component } from 'react';
import shortid from 'shortid';
import initialTodos from '../todos.json';
import { TodoList } from './TodoList';
import { TodoCreator } from './TodoCreator';
import { Filter } from './Filter';

// export const App = () => {
//   return <TodoList />;
// };

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = { id: shortid.generate(), text, completed: false };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter(({ text }) =>
      text.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodosCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodosCount = this.getCompletedTodosCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <div>
        <TodoCreator onSubmit={this.addTodo} />
        <div>
          <p>General count of todos: {totalTodoCount}</p>
          <p>Count of completed todos: {completedTodosCount}</p>
        </div>
        <Filter filter={filter} changeFilter={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          // todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}
