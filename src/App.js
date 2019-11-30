import React from 'react';
import './App.css';
import {CardList} from './Components/Card-list/card-list.component'
import { SearchBox } from './Components/Searchbox/search-box';

// error with searchfield
//check the state and the updates of the state when you have undefined errors
//when something is updated there should be counterpart in the state

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      monsters:[],
      searchField: '' 
 }


  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters:users}))
  }
  
  
  render(){
    const { monsters , searchField } = this.state;
// const monsters = this.state.monsters;
// const searchField = this.state.searchField;
console.log(this.state);
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value})}
      />
      <CardList monsters={filteredMonsters}>
      </CardList>
      </div>
    );
  }
  }
  

export default App;
