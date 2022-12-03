import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../shared/BackButton/BackButton';
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

const mock = {
	id: '08213',
	name: 'Rapha Paula',
	complaint: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
	email: 'RaphaPaula@gmail.com',
	message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
	status: 'unread',
	date: '01/07/2019',
};

function FeedbackPageLayout() {
	const [data, setData] = useState(mock);
	const params = useParams();

	// TODO: useEffect to fetch data by id, then set state to data

	const onMutate = (e) => {
		console.log(e.target.value);
		console.log(e.target.name);

		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
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

	return (
		<StyledWrapper>
			<StyledPageHeader>
				<BackButton />
				<h3>User Contact Us Feedback #{params.id}</h3>
			</StyledPageHeader>

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
							id='complaint'
							name='complaint'
							// onChange={onMutate}
							defaultValue={data.complaint}
							disabled></StyledTextArea>
					</div>

					<div>
						<label htmlFor='id'>Date</label>
						<StyledInputWrapper>
							<input
								type='text'
								id='id'
								name='id'
								value={data.date}
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
							value={data.status}
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
		</StyledWrapper>
	);
}

export default FeedbackPageLayout;
