import React, { Component } from 'react';

class Navbar extends Component {

    render() { 
        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">COUNTER</a>
            <button className="btn mx-5 text-light px-3 rounded-circle bg-dark">{this.props.value}</button>

        </nav> );
    }
}
 
export default Navbar;