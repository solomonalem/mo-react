import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import Lists from './components/Lists';


class App extends Component {
  constructor(){
    super();
    this.state = { 
      value:0
  
    }
  }

  handleInc = () =>{
    this.setState({
      value:this.state.value+1
    })
  }
  handleDec = () =>{
    this.setState({
      value:this.state.value-1
    })
  }
  render() { 
    return (
      <div className="mx-auto">
        
          <Navbar value={this.state.value}/>
          <Counters value1={this.state.value} handleInc={this.handleInc} handleDec={this.handleDec}/>
          <Lists/>
         
      </div>
     );
  }
}
 
export default App;