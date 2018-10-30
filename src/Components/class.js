import react from 'react';


class app extends component{
    
    constructor(props){
        super(props);
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



