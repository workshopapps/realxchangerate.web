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
import { Button, Skeleton, Stack } from '@mui/material';
import calIcon from '../../../assets/calendarIcon.svg';
// import { Data } from '../../../pages/userFeedbacks/mockData';

export function Card({ data }) {
	const navigate = useNavigate();
	const date = new Date(data['last_updated']);

	return (
		<StyledCardWrapper>
			<div className='align-top'>
				<div className='align'>
					<div>
						<Name>Name: {data.name}</Name>
						<Email>Email: {data.email}</Email>
					</div>
					<Status $stats={data.status}>{data.status}</Status>
				</div>
				<StyledCardMessage>{data.message}</StyledCardMessage>
			</div>
			<div className='align alignBottom'>
				<div className='date'>
					<img src={calIcon} alt='icon' />
					<span>Date: {date.toLocaleDateString('en-US')}</span>
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

export function CardSkeleton() {
	return (
		<StyledCardWrapper>
			<Stack spacing={1.5}>
				<Skeleton width='30%' variant='text' sx={{ fontSize: '1.5rem' }} />
				<Skeleton variant='rounded' height={120} />

				<Stack>
					<Skeleton
						sx={{ marginLeft: 'auto', marginTop: '10px' }}
						variant='rounded'
						width='25%'
						height={30}
					/>
				</Stack>
			</Stack>
		</StyledCardWrapper>
	);
}
