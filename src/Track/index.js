import React, { useState } from 'react';
import TrackInput from './TrackInput';
import TrackLists from './TrackLists';
import { useSelector } from 'react-redux';

const Track = () => {
	// const tracks = useSelector(state => state.tracks);
	const [tracks, setTracks] = useState([
		{
			id: 1,
			content: 'lomi',
		},
		{
			id: 2,
			content: 'Jemira ',
		},
		{
			id: 3,
			content: ' interview ',
		},
	]);

	const addList = track => {
		let copy = [...tracks, { id: tracks.length + 1, content: track }];

		setTracks(copy);
	};
	const remove = id => {
		setTracks(tracks.filter(track => track.id !== id));
	};
	return (
		<div className='d-flex justify-content-around m-5 p-5'>
			<TrackLists tracks={tracks} remove={remove} />
			<TrackInput addList={addList} />
			<div>{JSON.stringify(tracks, null, 2)}</div>
		</div>
	);
};

export default Track;
