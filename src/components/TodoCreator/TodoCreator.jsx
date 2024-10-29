import { Component } from 'react';
import { Form, CreateButton } from './TodoCreator.styled';

export class TodoCreator extends Component {
  state = {
    title: '',
    text: '',
  };

  handleChangeText = e => {
    this.setState({ text: e.currentTarget.value });
  };

  handleChangeTitle = e => {
    this.setState({ title: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.title, this.state.text);

    this.setState({ title: '', text: '' });
  };

  render() {
    const { title, text } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChangeTitle}
            required
            maxLength={15}
            autoFocus
          />
        </label>
        <label>
          Text
          <textarea
            name="text"
            value={text}
            required
            onChange={this.handleChangeText}
            maxLength={60}
          ></textarea>
        </label>
        <CreateButton type="submit">Create</CreateButton>
      </Form>
    );
  }
}
