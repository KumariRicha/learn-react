import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Data from './data/data';

class App extends Component {

  state = {
    persons: [{ title: "Person1", id: "P1" },
    { title: "Person2", id: "P2" },
    { title: "Person3", id: "P3" }],
    other: 'anything'
  }
  nameChanger = (event) => {
    this.setState({
      persons: [
        { title: event.target.value, id: "P11" },
        { title: "Person22", id: "P22" },
        { title: "Person33", id: "P33" }],
    })

  }
  switchNameHandler = () => {
    this.setState({
      persons: [{ title: "Person11", id: "P11" },
      { title: "Person22", id: "P22" },
      { title: "Person33", id: "P33" }],
      newState: 'richa is good'
    })
    console.log(this.setState)
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>I m React App</h1>
        <p>Working</p>
        <Data />
        {/* <button onClick={this.switchNameHandler}>BUTTON</button>
        <Person nameChanger={this.nameChanger} title={this.state.persons[0].title} id={this.state.persons[0].id} />
        <Person title={this.state.persons[1].title} id={this.state.persons[1].id}>Richa</Person>
        <Person title={this.state.persons[2].title} id={this.state.persons[2].id} /> */}
      </div>
    );
  }
}

export default App;
