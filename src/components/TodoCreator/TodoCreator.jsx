import { Component } from 'react';

export class TodoCreator extends Component {
  state = { message: '' };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}
