import React from 'react';
import SingleList from './SingleList';

const TrackLists = ({ tracks, remove }) => {
	return (
		<ul>
			{tracks.map(track => (
				<SingleList track={track} remove={remove} />
			))}
		</ul>
	);
};

export default TrackLists;
