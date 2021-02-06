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
            <button className="btn rounded-circle  bg-white  mx-5 font-weight-bold">{this.props.value2}</button>
            <div><button className="btn mx-3 px-5" onClick={this.props.handleInc} style={{backgroundColor:"#B8DDE9"}}>Increment</button>
            <button className="btn mx-3 px-5" onClick={this.props.handleDec} style={{backgroundColor:"#FFC6ED"}}>Decrement</button></div>
            <Like liked={this.state.liked} onClick={this.handleLike} />
            
        </div> );
    }
}
 
export default Counter;