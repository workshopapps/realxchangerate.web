import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../shared/BackButton/BackButton';
import { toast } from 'react-toastify';
import {
	Form,
	StyledInputWrapper,
	StyledPageHeader,
	StyledGrid,
	StyledWrapper,
	StyledTextArea,
	ResponseTitle,
} from './feedbackPage.styled';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../store/actions/contactActions';
import { CardSkeleton } from '../userFeedbackComponent/card/Card';

function FeedbackPageLayout() {
	const [data, setData] = useState({});
	// const [stats, setStats] = useState('');
	const params = useParams();
	const dispatch = useDispatch();
	const { contact, requestStatus } = useSelector((state) => state.contacts);

	useEffect(() => {
		const idParams = params.id;
		if (!contact) {
			dispatch(getContact(idParams));
		} else {
			setData(contact);
		}

		// eslint-disable-next-line
	}, [contact, params]);

	if (requestStatus === 'failed') {
		toast.error('error fetching contacts');
	}

	const onMutate = (e) => {
		// setData((prev) => ({
		// 	...prev,
		// 	[e.target.name]: e.target.value,
		// }));
		// [e.target.name]: e.target.value
	};

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const date = new Date(data['last_updated']);

	return (
		<StyledWrapper>
			<StyledPageHeader>
				<BackButton />
				<h3>User Contact Us Feedback #{params.id}</h3>
			</StyledPageHeader>
			{!contact ? (
				<CardSkeleton />
			) : (
				<Form>
					<StyledGrid>
						<div>
							<label htmlFor='name'>Name</label>
							<StyledInputWrapper>
								<input
									type='text'
									id='name'
									name='name'
									value={data.name}
									// onChange={onMutate}
									disabled
								/>
							</StyledInputWrapper>
						</div>

						<div>
							<label htmlFor='name'>Email</label>
							<StyledInputWrapper>
								<input
									type='email'
									id='name'
									name='name'
									value={data.email}
									// onChange={onMutate}
									disabled
								/>
							</StyledInputWrapper>
						</div>
					</StyledGrid>

					<StyledGrid>
						<div>
							<label htmlFor='complaint'>Client's message</label>
							<StyledTextArea
								rows='4'
								id='message'
								name='message'
								// onChange={onMutate}
								defaultValue={data.message}
								disabled></StyledTextArea>
						</div>

						<div>
							<label htmlFor='id'>Date</label>
							<StyledInputWrapper>
								<input
									type='text'
									id='id'
									name='id'
									value={date.toLocaleDateString('en-US')}
									// onChange={onMutate}
									disabled
								/>
							</StyledInputWrapper>
						</div>
					</StyledGrid>

					<ResponseTitle>Feedback</ResponseTitle>

					<StyledGrid>
						<div>
							<label htmlFor='message'>Message</label>
							<StyledTextArea
								rows='4'
								id='message'
								name='message'
								// onChange={onMutate}
								defaultValue={''}></StyledTextArea>
						</div>

						<div>
							<label htmlFor='status'>Set Message Status</label>
							<Select
								fullWidth
								displayEmpty
								sx={{ border: '1px solid #CBD5E120' }}
								input={<OutlinedInput />}
								MenuProps={MenuProps}
								inputProps={{ 'aria-label': 'Without label' }}
								id='status'
								name='status'
								// value={data.status}
								value={'unread'}
								onChange={onMutate}>
								<MenuItem id='status' value='read'>
									read
								</MenuItem>
								<MenuItem id='status' value='unread'>
									unread
								</MenuItem>
							</Select>
						</div>
					</StyledGrid>
					<div className='cta'>
						<Button variant='outlined' onClick={() => window.history.go(-1)}>
							cancel
						</Button>
						<Button variant='contained'>send</Button>
					</div>
				</Form>
			)}
		</StyledWrapper>
	);
}

export default FeedbackPageLayout;
