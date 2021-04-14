import React, { Component } from 'react';

export default class List extends Component {
	render() {
		return (
			<div className='px-5'>
				<p className='mx-5 bg-light p-2 d-flex justify-content-between align-left'>
					<div>
						<span>{this.props.user.id}</span>
						<span className='text-capitalize ml-5'>
							{this.props.user.title}
						</span>
					</div>
					<div>$20</div>
				</p>
			</div>
		);
	}
}
