import React from 'react';
import './App.css';
import {CardList} from './Components/Card-list/card-list.component'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      monsters:[],
      search: '' 
 }


  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters:users}))
  }
  
  
  render(){
    const { monsters , search } = this.state;
// const monsters = this.state.monsters;
// const searchField = this.state.searchField;
console.log(this.state);
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
      <input type='search' 
             placeholder='search monsters' 
             onChange={e =>  this.setState({search: e.target.value})
    } />
      <CardList monsters={filteredMonsters}>
      </CardList>
      </div>
    );
  }
  }
  

export default App;
