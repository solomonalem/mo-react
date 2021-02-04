import React, { Component } from 'react'
import List from './List'
 class Lists extends Component {


    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({users:data}));
    }

    render() {
        return (
            <>
                {this.state.users.map(user=> <List user={user} key={user.id}/> )}
               
                <ul className="pagination justify-content-center my-5">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
                
            </>
        )
    }
}

export default Lists;