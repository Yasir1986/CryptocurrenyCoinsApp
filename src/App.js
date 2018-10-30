import React, { Component } from 'react';
import Container from './Components/Container';
import './App.css';
import Footer from './Components/Footer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mainData: []
    }
}

componentDidMount(){
          
  const url = "https://api.coinmarketcap.com/v1/ticker/?limit=2000";
    fetch(url)
      .then(response =>response.json())
      .then(coins=>{  
          this.myData = coins;
          this.setState({mainData:this.myData});
      });
    
} 

// Search Function

handleinputchange(e){
  this.setState({mainData:this.myData.filter(coin => (coin.name).toUpperCase().match((e.target.value.toUpperCase())) != null)})
}


// sortByName Function

sortByName(){
  this.setState({mainData:this.state.mainData.sort(( a , b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB){
      return -1;
    } 
    if (nameA > nameB){
    return 1;
    }
    return 0;
  })})
}

// sortByPrice 

sortByPrice(){
    this.setState({mainData:this.state.mainData.sort(( a , b) => {
    return a.price_usd - b.price_usd ; 
    })})
}

// sortbyRank

sortByRank(){
  this.setState({mainData:this.state.mainData.sort(( a , b) => {
  return a.rank - b.rank ; 
})})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cryptocurrency Coins App</h1>
        </header>

        <div>
            <input className="search" type = "text" placeholder = "Search Coins" onInput = {this.handleinputchange.bind(this)} />
            </div>

        {/* <Search /> */}

        <div className ="buttons">
            <button onClick={this.sortByName.bind(this)} className ="byName">Sort by Name</button>
            <button onClick={this.sortByPrice.bind(this)}className = "byPrice">Sort by Price</button>
            <button onClick={this.sortByRank.bind(this)} className = "byRank">Sort by Rank</button>
        </div>
    
        
        <Container coins = {this.state.mainData}/>


        
         <Footer /> 

      </div> 
    ); 
  }
  
}


export default App;
