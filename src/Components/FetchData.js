import React, { Component } from 'react';
import Container from '../Components/Container.js';


class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: [],
        }   
    }

  
    fetchData(){
        const url = "https://api.coinmarketcap.com/v1/ticker/?limit=5";
        const tmp=[];
        fetch(url)
          .then(response =>response.json())
          .then(inf=>{
            inf.forEach(item=>tmp.push(item));
              this.setState({mainData:tmp})
          })
      }
   componentDidMount(){
      this.fetchData();
        
   } 



    render(){
         console.log(this.state.mainData)
        return (
            <div>
            <div className="MainContainer">
       <h1> {this.state.mainData[0] && this.state.mainData[0].name}</h1>
       <h1> {this.state.mainData[1] && this.state.mainData[1].name}</h1>
       <h1> {this.state.mainData[2] && this.state.mainData[2].id}</h1>
       <h1> {this.state.mainData[3] && this.state.mainData[3].id}</h1>
       <h1> {this.state.mainData[4] && this.state.mainData[4].id}</h1>
        </div>

        <div>    <Container mainData = {this.state.mainData} /> </div>

            </div>
        )
    }

}

export default FetchData;