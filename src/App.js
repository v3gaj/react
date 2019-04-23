import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: '0', name:'Max', age:28},
      {id: '1', name:'Manu', age:29},
      {id: '2', name:'Sthepanie', age:26}
    ],
    showPersons: true
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {name: name, age:28},
        {name:'Manu', age:29},
        {name:'Sthepanie', age:27}
      ]
    })
  }

  tooglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({showPersons: !show});
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    change={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'].backgroundColor = 'purple';
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length > 2) {
      classes.push('blue');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(' ')} >Mi first React App</h1>
          <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
          <button style={style} onClick={this.tooglePersonsHandler}>Toogle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
