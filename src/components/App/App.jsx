import { Component } from 'react';
import shortid from 'shortid';
import { TodoList } from 'components/TodoList';
import { TodoCreator } from 'components/TodoCreator';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';
import { IconButton } from 'components/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { Container, Title, InfoContainer, Subtitle } from './App.styled';

export class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = (title, text) => {
    const todo = { id: shortid.generate(), title, text, completed: false };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));

    // this.toggleModal();
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
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.getCompletedTodosCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Title>Plan your time</Title>

        <InfoContainer>
          <p>
            General count of todos: <span>{totalTodoCount}</span>
          </p>
          <p>
            Count of completed todos: <span>{completedTodosCount}</span>
          </p>
        </InfoContainer>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <IconButton onClick={this.toggleModal}>
              <CloseIcon
                style={{
                  width: 20,
                  height: 20,
                  fill: 'var(--darkGreen)',
                }}
              />
            </IconButton>
            <TodoCreator onSubmit={this.addTodo} />
          </Modal>
        )}

        {visibleTodos.length > 0 && (
          <Filter filter={filter} changeFilter={this.changeFilter} />
        )}

        <IconButton onClick={this.toggleModal}>
          <AddIcon
            style={{ width: 40, height: 40, fill: 'var(--darkGreen)' }}
          />
        </IconButton>

        {visibleTodos.length > 0 ? (
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        ) : (
          <Subtitle>Create your first todo</Subtitle>
        )}
      </Container>
    );
  }
}
