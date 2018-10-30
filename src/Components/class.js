// import React from React

// class 

// componentDidMount(){
//     fetch("")
//     .then(Response => Response.json())
//     .then(res => {
//         this.setStart({ name: res.name});
//     });
// }


// render (){
//     return <h1>name: (this.state.name)</h1>
// }

// componentDidMount(){
//     this.fetchData(this.props.personId);
// }

// componetDidUpdate(prevProps){

// }


import react from 'react';


class app extends component{
    
    constructor(props){
        super(props);
        // this.state ={
        //     firstName: ''                dont need with ref 
        };
        this.firstName = null;

    }
    
    componentDidMount (){
        console.log('this.firstName', this.firstName);
    }
    

handleSubmit (e){
    e.preventDefault();
}

    render(){
        return(
            
                <form onSubmit={this.handleSubmit.bind(this)} className="App"> 
                    type="text" 
                    name="firstName" 
                    placeholder="type your name" 
                    id="firstName" 
                    value="foo"
                    onChange={e => this.setState({ firstName: e.target.value})}   //this is controlled input
                    ref = {input => (this.firstName = firstName) }
                    />
    
        );
    }
}


// value can be add to inout then user can not input anything only defalut vlaue showns


{/* <textarea value="sdsdf" />  textarea is slefclosing tag */}

