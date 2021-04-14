import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import Lists from './components/Lists';
import Movies from './hoc/Movies';
import Clock from './components/Clock';
import NameForm from './components/NameForm';
import ListDonator from './components/ListDonator';
import Track from './Track/index';
import Table from './components/Table';

class App extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			userId: '',
			title: '',
			completed: '',
			datas: [
				{ userId: 1, id: 1, title: 'lol', completed: 23 },
				{ userId: 1, id: 2, title: 'lol', completed: 23 },
				{ userId: 1, id: 3, title: 'lol', completed: 23 },
				{ userId: 1, id: 4, title: 'lol', completed: 23 },
				{ userId: 1, id: 5, title: 'l3KNKNl', completed: 333 },
			],
		};
	}
	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/todos')
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		this.setState({ datas: data });
		// 		console.log(data);
		// 	});
	}
	removeItem = id => {
		console.log(id);
		const arr = this.state.datas.filter(data => data.id !== id);

		this.setState({ datas: arr });
	};
	handleChange = e => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const { userId, title, completed } = this.state;
		const newArr = this.state.datas.concat({
			userId,
			title,
			completed,
		});
		this.setState({ datas: newArr });
		this.setState({
			userId: '',
			title: '',
			completed: '',
		});
	};
	handleInc = () => {
		this.setState({
			value: this.state.value + 1,
		});
	};
	handleDec = () => {
		this.setState({
			value: this.state.value - 1,
		});
	};
	render() {
		return (
			<div className='mx-auto'>
				<Navbar value={this.state.value} />
				<Table datas={this.state.datas} removeItem={this.removeItem} />
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.userId}
						onChange={this.handleChange}
						name='userId'
					/>
					<input
						value={this.state.title}
						onChange={this.handleChange}
						name='title'
					/>
					<input
						value={this.state.completed}
						onChange={this.handleChange}
						name='completed'
					/>
					<button type='submit'>submit</button>
				</form>
				<div>{JSON.stringify(this.state, null, 2)}</div>
				<Track />
				<NameForm />
				<Counters
					value1={this.state.value}
					handleInc={this.handleInc}
					handleDec={this.handleDec}
				/>
				<Movies />
				{/* <Clock /> */}
				<Lists />
				{/* <h1 className='p-5 display-2 font-weight-bold text-success text-center'>
					HELP FOR ERITREAN FAMILY
				</h1>
				<ListDonator /> */}
			</div>
		);
	}
}

export default App;
