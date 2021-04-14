import React, { Component } from 'react';
import Pagination from '../common/pagination';
import List from './List';
import { paginate } from '../utils/paginate';

class Lists extends Component {
	constructor() {
		super();
		this.state = {
			users: [],

			pageSize: 10,
			currentPage: 1,
		};
	}
	async componentDidMount() {
		try {
			const data = await fetchData();
			this.setState({ users: data });
		} catch (error) {}
	}
	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	render() {
		const { users, pageSize, currentPage } = this.state;
		const pageUsers = paginate(users, currentPage, pageSize);

		return (
			<>
				{pageUsers.map((user, idx) => (
					<List user={user} key={idx} />
				))}
				<Pagination
					pageSize={this.state.pageSize}
					itemsCount={this.state.users.length}
					onPageChange={this.handlePageChange}
					currentPage={this.state.currentPage}
				/>
			</>
		);
	}
}

function fetchData() {
	return fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
		response.json(),
	);
}

export default Lists;
