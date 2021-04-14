import react from 'react';

const SingleList = ({ track, remove }) => {
	return (
		<li key={track.id} onClick={() => remove(track.id)}>
			{track.content}
		</li>
	);
};

export default SingleList;
