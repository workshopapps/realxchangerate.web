import React, { useEffect } from 'react';
import { Card, CardSkeleton } from './card/Card';
import { StyledCardsWrapper, StyledWrapper } from './UserFeedback.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/actions/contactActions';
import { toast } from 'react-toastify';

export default function UserFeedbackLayout() {
	const dispatch = useDispatch();
	const { contacts, requestStatus } = useSelector((state) => state.contacts);
	// const [data, setData] = React.useState([]);

	useEffect(() => {
		dispatch(getContacts());
		// setData(contacts);
	}, [dispatch, contacts]);

	if (requestStatus === 'failed') {
		toast.error('error fetching complaints');
	}

	return (
		<StyledWrapper>
			<h2>Users’ Contact Us Information</h2>
			<StyledCardsWrapper>
				{!contacts ? (
					<>
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
					</>
				) : null}

				{contacts
					? contacts
							.slice(1)
							.map((item, index) => (
								<Card key={index} data={item} stats={item.status} />
							))
					: null}
			</StyledCardsWrapper>
		</StyledWrapper>
	);
}
