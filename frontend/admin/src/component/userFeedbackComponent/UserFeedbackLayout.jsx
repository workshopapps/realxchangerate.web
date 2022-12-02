import React from 'react';
import Card from './card/Card';
import { StyledCardsWrapper, StyledWrapper } from './UserFeedback.styled';
import { Data } from '../../pages/userFeedbacks/mockData';

export default function UserFeedbackLayout() {
	return (
		<StyledWrapper>
			<h2>Users’ Contact Us Information</h2>

			<StyledCardsWrapper>
				{Data.map((item, index) => (
					<Card key={index} data={item} stats={item.status} />
				))}
			</StyledCardsWrapper>
		</StyledWrapper>
	);
}
