import React, { Component } from 'react';
import Pagination from '../common/pagination';
// import List from './List';
// import { paginate } from '../utils/paginate';

class ListDonator extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{ title: 'Ahmed Nuru' },
				{ title: 'Milyon Gebreyesus' },
				{ title: 'Temesgen Yemane' },
				{ title: 'Meron Yohannes' },
				{ title: 'Solomon Alem' },
				{ title: 'Mohhamed Morthin' },
				{ title: 'Mergeta yosief' },
				{ title: 'Siem Mussie' },
				{ title: 'Mussie Grmay' },
				{ title: 'Danial Belay' },
				{ title: 'Biniam Asmelash' },
				{ title: 'Merhawi Haiyle' },
				{ title: 'Ermias Raesu' },
				{ title: 'Nebiat Girmation' },
				{ title: 'Aron Brhane ' },
				{ title: 'Yonas Tekeste' },
				{ title: 'Eiseyas Araya' },
				{ title: 'Aster Gebre' },
				{ title: 'Yoel Brhane' },
				{ title: 'Jaefer kerar' },
				{ title: 'Dawit Haile' },
				{ title: 'Mhiret Girmation ' },
				{ title: 'Temesgen Gerikan' },
				{ title: 'Sami(samama)' },
				{ title: 'Abeba Tewelde' },
				{ title: 'Abi Shewha' },
				{ title: 'Mhretab Mahari ' },
				{ title: 'Sirak Sieym' },
				{ title: 'Aynom Berhe ' },
				{ title: 'Fetah huka' },
				{ title: 'Aibrahim Salh' },
				{ title: 'Munasiye Embaye' },
				{ title: 'Azana Asmelash' },
				{ title: 'Meikle Kiflit ' },
				{ title: 'Wedi Yacob' },
				{ title: 'Alex Kiflay' },
				{ title: 'Zerit Camera' },
				{ title: 'Michael Mekonnen ' },
				{ title: 'Medhanie Mekonnen ' },
				{ title: 'Medhanie Habtemariam' },
				{ title: 'Binyam Gulbet' },
				{ title: 'Bannuna' },
				{ title: 'Memhr Grmay ' },
				{ title: 'Makiyato' },
				{ title: 'Teweldemedin Mhreatab ' },
				{ title: 'Dawit Gersisu' },
				{ title: 'Estifanos Sbhatu ' },
				{ title: 'Habtom Abrha ' },
				{ title: 'Noah Mahari' },
				{ title: 'Musiye Andebrhan' },
				{ title: 'Tsehay kebede' },
				{ title: 'Lula Hadug' },
				{ title: 'Samson Keleta' },
				{ title: 'Israel Hedera' },
				{ title: 'Essays Gebrab' },
				{ title: 'kirros' },
				{ title: 'Noeh Asgodom ' },
				{ title: 'Ellen Yebio' },
				{ title: 'Aman zereu camera' },
				{ title: 'Wedi Gonche' },
				{ title: 'Hana Tesfay' },
				{ title: 'Mohammed Ismaeil (barbery)' },
				{ title: 'Fkadu Mengestab' },
				{ title: 'Eazy' },
				{ title: 'Filmon Brhane' },
				{ title: 'Smret Mesfun' },
				{ title: 'Awet Mesfun ' },
				{ title: 'Ngsti Eayass (Alem)' },
				{ title: 'Robel Brhane' },
				{ title: 'Yordanos Tsehaye' },
				{ title: 'Sami Andebrhan' },
				{ title: 'Saron Tekle' },
				{ title: 'Naod Mengis' },
				{ title: 'Tsegay Gebremedhin' },
				{ title: 'Fanus Arefayne' },
				{ title: 'Msgna Jamboo ' },
				{ title: 'Mimi' },
				{ title: 'Yonas (zion Market)' },
				{ title: 'Gidey laundry' },
				{ title: 'Tamrat (Sara Market)' },
				{ title: 'Mhretab Fesseha' },
				{ title: 'Ephrem Mirach' },
				{ title: 'chekan' },
				{ title: 'Mehari Habtom' },
				{ title: 'Wedi Haleka' },
				{ title: 'Lula Restaurant' },
				{ title: 'Filmon krar' },
				{ title: 'Samuel Mebrahtu' },
				{ title: 'Tekle Gebrezgabhier' },
				{ title: 'Miakle Abrhaley ' },
				{ title: 'Teklay Mogos' },
				{ title: 'Hager Yakob' },
				{ title: 'Michael wedi Feraday' },
				{ title: 'Nebisile' },
				{ title: 'Medhanie Brhane' },
				{ title: 'Keren' },
				{ title: 'Sirak Estifanos ' },
				{ title: 'Zemam Cafe' },
				{ title: 'Brhane Gebrgrgiss' },
				{ title: 'Wedi Keshi' },
			],

			pageSize: 10,
			currentPage: 1,
		};
	}
	// async componentDidMount() {
	// 	try {
	// 		const data = await fetchData();
	// 		this.setState({ users: data });
	// 	} catch (error) {}
	// }
	// handlePageChange = page => {
	// 	this.setState({ currentPage: page });
	// };

	render() {
		const { users, pageSize, currentPage } = this.state;
		// const pageUsers = paginate(users, currentPage, pageSize);

		return (
			<>
				{users.map((user, idx) => (
					<div className='font-weight-bold display-4'>
						<p className='mx-5 bg-light p-2 d-flex justify-content-between align-left'>
							<div>
								<span className='font-weight-light'>{idx + 1}.</span>
								<span className='text-capitalize ml-5 font-weight-bold display-4'>
									{user.title}
								</span>
							</div>
							<div>$ 20</div>
						</p>
					</div>
				))}

				{/* {pageUsers.map((user, idx) => (
					<List user={user} key={idx} />
				))}
				<Pagination
					pageSize={this.state.pageSize}
					itemsCount={this.state.users.length}
					onPageChange={this.handlePageChange}
					currentPage={this.state.currentPage}
				/> */}
			</>
		);
	}
}

function fetchData() {
	return fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
		response.json(),
	);
	// .then(users => {
	// 	console.log(users);
	// 	this.setState({ users: users });
	// });;
}

export default ListDonator;
