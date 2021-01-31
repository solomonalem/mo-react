import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        return ( <Counter value2={this.props.value1} handleInc={this.props.handleInc} handleDec={this.props.handleDec}/> );
    }
}
 
export default Counters;