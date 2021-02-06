import React, { Component } from 'react'

export default class Login extends Component {

    handleFormSubmit= event =>{
        event.preventDefault();
        this.props.history.replace('/')
    }
    render() {

        return (

            <di><div className="formcontainer  bg-light my-5">
            <form className="  m-5 py-5" onSubmit={(event)=>this.handleFormSubmit(event)}>
            <div className="form-group py-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            
            </div>
            <div className="form-group py-4">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            
            <button type="submit" className="btn btn-primary px-5 mx-5">Submit</button>
            </form>
            </div></di> )
    }
}
