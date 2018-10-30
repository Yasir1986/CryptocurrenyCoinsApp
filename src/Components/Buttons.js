import React, { Component } from 'react';


class Buttons extends Component {
    render(){
        return(
            <div className ="buttons">
            <button className = "byName">Sort by Name</button>
            <button className = "byPrice">Sort by Price</button>
            <button className = "byRank">Sort by Rank</button>
        </div>
        );
    }
}

export default Buttons;