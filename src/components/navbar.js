import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() { 
        return (<nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand"  to ="/">COUNTER</Link>
            <Link to ="/login">Login</Link>
            <button className="btn mx-5 text-light px-3 rounded-circle bg-dark">{this.props.value}</button>

        </nav> );
    }
}
 
export default Navbar;