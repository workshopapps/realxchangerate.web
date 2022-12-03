import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Status() {
	const [status, setStatus] = React.useState('');

	const handleChange = (event) => {
		setStatus(event.target.value);
	};

	return (
		<FormControl sx={{ my: 4, minWidth: 120 }} size='small'>
			<InputLabel id='demo-select-small'>status</InputLabel>
			<Select
				labelId='demo-select-small'
				id='demo-select-small'
				value={status}
				label='status'
				onChange={handleChange}>
				<MenuItem value={1} sx={{ fontSize: 14 }}>
					read
				</MenuItem>
				<MenuItem value={2} sx={{ fontSize: 14 }}>
					unread
				</MenuItem>
			</Select>
		</FormControl>
	);
}
