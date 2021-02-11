import React, { Component } from 'react';

class Input extends Component {
  inputRef = React.createRef();

  handleAdd = (event) => {
    event.preventDefault();
    const id = this.props.habits.length + 1;
    const name = this.inputRef.current.value;
    const habit = { id, name, count: 0 };
    this.props.onAdd(habit);
  };
  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input ref={this.inputRef} type="text" placeholder="Habit" />
        <button>Add</button>
      </form>
    );
  }
}

export default Input;
