import React, { Component } from 'react';
import Like from "../common/like"

class Counter extends Component {
    constructor(){
        super();
        this.state={
         liked:false
        }
    }

     handleLike = () =>{
     this.setState({liked: !this.state.liked})
    }
    render() { 
        return ( <div className="container d-flex justify-content-between m-4 p-4">
            <button className="btn px-5 mx-5 display-5">{this.props.value2}</button>
            <div><button className="btn btn-primary mx-3 px-5" onClick={this.props.handleInc}>Increment</button>
            <button className="btn btn-danger mx-3 px-5" onClick={this.props.handleDec}>Decrement</button></div>
            <Like liked={this.state.liked} onClick={this.handleLike} />
            
        </div> );
    }
}
 
export default Counter;