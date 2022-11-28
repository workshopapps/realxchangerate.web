import { TextField } from '@mui/material';
import React from 'react';

const Input = ({ text }) => {
	return (
		<TextField
			id='outlined-basic'
			label={text}
			variant='outlined'
			sx={{ background: '#FAFAFA' }}
			size='small'
		/>
	);
};

export default Input;
