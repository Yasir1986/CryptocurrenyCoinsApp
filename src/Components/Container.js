import React, { Component } from 'react';
import Cards from '../Components/Cards.js';

class Container extends Component {


    render(){ 
  
    return(
        <div className="Main">
        {this.props.coins.map(coin => 
           <Cards key={coin.id} myCoin = {coin} />
        )}
        </div>
    );
}
}

export default Container;




