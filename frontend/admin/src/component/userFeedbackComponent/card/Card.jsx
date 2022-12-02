import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	// StyledCardButton,
	StyledCardMessage,
	Name,
	Email,
	StyledCardWrapper,
	Status,
} from './Card.styled';
import { Button } from '@mui/material';
import calIcon from '../../../assets/calendarIcon.svg';

export default function Card({ data }) {
	const navigate = useNavigate();

	return (
		<StyledCardWrapper>
			<div className='align'>
				<div>
					<Name>Name: {data.title}</Name>
					<Email>Email: {data.email}</Email>
				</div>
				<Status $stats={data.status}>{data.status}</Status>
			</div>
			<StyledCardMessage>{data.message}</StyledCardMessage>
			<div className='align alignBottom'>
				<div className='date'>
					<img src={calIcon} alt='icon' />
					<span>Date: {data.date}</span>
				</div>
				<Button
					variant='outlined'
					size='small'
					sx={{
						width: '90px',
						fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
					}}
					disableElevation
					onClick={() => navigate(`/admin/contact/${data.id}`)}>
					Reply
				</Button>
			</div>
		</StyledCardWrapper>
	);
}

Card.propTypes = {
	data: PropTypes.object.isRequired,
};
