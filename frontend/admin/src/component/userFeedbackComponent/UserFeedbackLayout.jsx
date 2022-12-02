import React, { useEffect } from 'react';
import { Card, CardSkeleton } from './card/Card';
import { StyledCardsWrapper, StyledWrapper } from './UserFeedback.styled';
// import { Data } from '../../pages/userFeedbacks/mockData';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/actions/contactActions';

export default function UserFeedbackLayout() {
	const dispatch = useDispatch();
	const { contacts, requestStatus } = useSelector((state) => state.contacts);

	const [data, setData] = React.useState([]);
	useEffect(() => {
		dispatch(getContacts());
		setData(contacts);

		//eslint-disable-next-line
	}, []);

	return (
		<StyledWrapper>
			<h2>Users’ Contact Us Information</h2>

			<StyledCardsWrapper>
				{requestStatus === 'pending' ? (
					<>
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
					</>
				) : (
					data
						.slice(1)
						.map((item, index) => (
							<Card key={index} data={item} stats={item.status} />
						))
				)}
			</StyledCardsWrapper>
		</StyledWrapper>
	);
}
