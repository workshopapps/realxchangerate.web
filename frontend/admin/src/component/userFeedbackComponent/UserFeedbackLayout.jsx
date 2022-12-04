import React, { useEffect, useState } from 'react';
import { Card, CardSkeleton } from './card/Card';
import { StyledCardsWrapper, StyledWrapper } from './UserFeedback.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/actions/contactActions';
import { toast } from 'react-toastify';
import Pagination from '../../shared/Pagination';
import Status from './Status';

export default function UserFeedbackLayout() {
	const dispatch = useDispatch();
	const { contacts, requestStatus } = useSelector((state) => state.contacts);
	const [data, setData] = React.useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	useEffect(() => {
		if (contacts?.length > 0) {
			setData(contacts);
		} else {
			dispatch(getContacts());
		}

		// eslint-disable-next-line
	}, [contacts]);

	if (requestStatus === 'failed') {
		toast.error('error fetching contacts');
	}

	const indexOfLastUser = currentPage * postsPerPage;
	const indexOfFirstUser = indexOfLastUser - postsPerPage;
	const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

	// change page
	const paginate = (value) => setCurrentPage(value);

	return (
		<StyledWrapper>
			<h2>Users’ Contact Us Information</h2>
			<Status />
			<StyledCardsWrapper>
				{!contacts ? (
					<>
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
					</>
				) : (
					currentUsers.map((item, index) => (
						<Card key={index} data={item} stats={item.status} />
					))
				)}
			</StyledCardsWrapper>
			<div className='paginationBox'>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={data.length}
					paginate={paginate}
				/>
			</div>
		</StyledWrapper>
	);
}
