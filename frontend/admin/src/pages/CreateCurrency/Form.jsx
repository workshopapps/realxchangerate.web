import { Button } from '@mui/material';
import React from 'react';
import Input from '../../shared/Input';
import BasicSelect from '../../shared/Select';
import { Container } from './formstyles';

const Form = () => {
	return (
		<Container>
			<h2>Add Currrency</h2>
			<div className='inputs'>
				<div className='select'>
					<BasicSelect />
				</div>
				<div>
					<Input text='Code' />
				</div>
				<div>
					<Input text='Rate' />
				</div>
			</div>
			<div class='addCurr'>
				<Button variant='outlined' sx={{ fontSize: 13 }}>
					Cancel
				</Button>
				<Button variant='contained' className='add' sx={{ fontSize: 13 }}>
					Add currency
				</Button>
			</div>
		</Container>
	);
};

export default Form;
