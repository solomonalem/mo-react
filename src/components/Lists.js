import React, { Component } from 'react';
import Pagination from '../common/pagination';
import List from './List';
import { paginate } from '../utils/paginate';

 class Lists extends Component {


    constructor(){
        super();
        this.state = {
            users:[],
            pageSize:10,
            currentPage:1
            
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({users:data}));
    }
    handlePageChange= page => {
        console.log(page);
        this.setState({currentPage:page})
    }

    render() {

        const {users, pageSize , currentPage} = this.state;
        const pageUsers = paginate(users, currentPage, pageSize);

        return (
            <>
                {pageUsers.map(user=> <List user={user} key={user.id}/> )}
               <Pagination
                 pageSize={this.state.pageSize}
                 itemsCount={this.state.users.length} 
                 onPageChange={this.handlePageChange}
                 currentPage={this.state.currentPage}    
                 />              
            </>
        )
    }
}

export default Lists;