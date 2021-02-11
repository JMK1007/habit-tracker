import React, { Component } from 'react';

class HabitAddForm extends Component {
  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input type="text" className="add-input" placeholder="Habit" />
          <button className="add-button"></button>
        </form>
      </div>
    );
  }
}

export default HabitAddForm;
