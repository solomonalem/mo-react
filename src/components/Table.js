import React, { useState, useEffect, useMemo } from 'react';

const Table = ({ datas, removeItem }) => {
	const memoizedData = useMemo(() => datas, [datas]);

	

	const renderHeader = dataInfo => {
		const data = dataInfo[0];
		let header = [];
		for (var i in data) {
			header.push(i);
		}
		return (
			<thead>
				<tr>
					{header.map((head, idx) => (
						<th key={idx}>{head}</th>
					))}
				</tr>
			</thead>
		);
	};

	const renderBody = dataInfo => {
		return (
			<tbody>
				{dataInfo.map((data, idx) => (
					<tr key={idx} onClick={() => removeItem(data.id)}>
						<td>{data.userId}</td>
						<td>{data.id}</td>
						<td>{data.title}</td>
						<td>{data.completed}</td>
					</tr>
				))}
			</tbody>
		);
	};
	if (!datas)
		return (
			<div className='bg-light w-100 h-100'>
				<h1 className='display-1'>LOADING.....</h1>
			</div>
		);
	return (
		<div>
			<table>
				{renderHeader(memoizedData)}
				{renderBody(memoizedData)}
			</table>
		</div>
	);
};
export default Table;
