import { Component } from 'react';
import CardList from './Components/Card-List/CardList';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends Component{

  constructor(){
    super();

    this.state ={
      monsters:[],
      searchFeild:'',
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchFeild:e.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({monsters:users}))
  }


  render(){
    const { monsters,searchFeild } = this.state;
    const filterMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchFeild.toLowerCase()));
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={(e)=> this.handleChange(e)}
        />
        <CardList monsters={filterMonster}/>
      </div>
    );
  }
}

export default App;
