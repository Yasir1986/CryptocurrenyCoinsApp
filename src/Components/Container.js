import React, { Component } from 'react';
import Cards from '../Components/Cards.js';

class Container extends Component {

    // constructor(props) {
    //     super(props);
    // }



    render(){ 
    //     const card = this.state.mainData.map((element) =>
    //     <Cards mainData = {element} key = {element.id} />
     
    // );
    //     return(
    //             {this.state.mainData.map((element) =>}
    //             <div className="div">
    //                     <ul className="card">{card} </ul>
    //            </div> 
    //     );
    // } 
    return(
        <div className="Main">
        {this.props.coins.map(coin => 
           <Cards key={coin.id} myCoin = {coin} />
           // <div key={coin.id}>
            // {coin.name}
            // </div>

        )}
        </div>
    );
}
}

export default Container;




