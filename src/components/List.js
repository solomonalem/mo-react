import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div className="px-5">
                <p className="mx-5 bg-light p-2 d-flex justify-content-between align-left">
                <span className="text-capitalize">{this.props.user.name}</span>
                 <span>{this.props.user.company.name}</span> 
                 <span>{this.props.user.email}</span>
                 </p>
            </div>
        )
    }
}
