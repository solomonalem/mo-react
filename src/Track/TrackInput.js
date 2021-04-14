import react, { useState } from 'react';

const TrackInput = ({ addList }) => {
	const [content, setContent] = useState('');

	const handleChange = e => {
		setContent(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setContent('');

		addList(content);
	};
	return (
		<div className='p-3'>
			<h3>Input</h3>
			<input onChange={handleChange} value={content} type='text' />
			<button className='btn btn-success mx-3 px-5' onClick={handleSubmit}>
				ADD
			</button>
			<div>{JSON.stringify(content, null, 2)}</div>
		</div>
	);
};

export default TrackInput;
