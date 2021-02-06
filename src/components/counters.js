import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        return (
             <div style={{backgroundColor:"#F0F5F9"}}>
                <Counter value2={this.props.value1} handleInc={this.props.handleInc} handleDec={this.props.handleDec}/>
            </div> 
            );
    }
}
 
export default Counters;