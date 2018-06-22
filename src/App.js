import React, { Component } from 'react'; 
import Person from './Person/Person';
import './App.css';

class App extends Component {
state = {
  persons: [
    { name: 'matt', age: 27},
    { name: 'pat', age: 32},
    { name: 'sam', age: 26}
  ]
}
switchNameHandler = (newName) => {
  // console.log('was clicked');
  this.setState({
    persons: [
      { name: newName, age: 27},
      { name: 'pat', age: 55},
      { name: 'sam', age: 39}
    ]
  })
}
  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <button onClick={this.switchNameHandler.bind(this, "max")}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this)}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
