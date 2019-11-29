import React from 'react';
import './App.css';
import {CardList} from './Components/Card-list/card-list.component'

class App extends React.Component () {
  constructor(){
    super()

    this.state = {
      monsters:[] 

    }


  }

  ComponentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters:users}))
  }
  
  
  render(){


    return (
      <div className="App">
      <CardList monsters={this.state.monsters}>
      </CardList>
      </div>
    );
  }
  }
  

export default App;
