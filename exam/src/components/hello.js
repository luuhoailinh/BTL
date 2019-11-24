import React, {Component} from 'react';

class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            message : "Linh 's hello message"
        }
    }

    changeMsg(){
        this.setState({message : "thinh message"});
        console.log("change message fn");
        
    }
    
    changeMsgBack(){
        this.setState({message : "Linh message"});
        console.log("change message fn");
        
    }

    render(){
        return (
        <div>
            <button onClick = {() => this.changeMsg()} onDoubleClick = {() => this.changeMsgBack()} >Click me !</button>
            <h1>{this.state.message}</h1>
        </div>
        )
    }
}

export default Hello;