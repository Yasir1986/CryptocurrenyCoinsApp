import React, { Component } from 'react';




class Cards extends Component {
   
    render(){ 
        
        return(
               <div className="Main1" key={this.props.myCoin.id}>
               <p>Name:   {this.props.myCoin.name}</p>
               
               <p>Id:       {this.props.myCoin.id}</p>
                
               <p>Symbol:   {this.props.myCoin.symbol}</p>
                
               <p>Rank:     {this.props.myCoin.rank}</p>
                
               <p>Price:    {this.props.myCoin.price_usd}</p>
             </div>
   
        );
    } 
}


export default Cards;
