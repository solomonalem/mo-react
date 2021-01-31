import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return ( <div className="container d-flex justify-content-between m-4 p-4">
            <button className="btn px-5 mx-5 display-5">{this.props.value2}</button>
            <div><button className="btn btn-primary mx-3 px-5" onClick={this.props.handleInc}>Increment</button>
            <button className="btn btn-danger mx-3 px-5" onClick={this.props.handleDec}>Decrement</button></div>
            
        </div> );
    }
}
 
export default Counter;