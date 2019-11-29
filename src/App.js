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


    return (
      <div className="App">
      <input type='search' placeholder='search monsters' onChange={e =>  this.setState({searchField: e.target.value}, () => console.log(this.state) )
    } />
      <CardList monsters={this.state.monsters}>
      </CardList>
      </div>
    );
  }
  }
  

export default App;
