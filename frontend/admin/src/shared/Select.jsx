import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
	const [country, setCountry] = React.useState('');

	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120, background: '#FAFAFA' }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Country</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={country}
					label='country'
					onChange={handleChange}>
					<MenuItem value={10} sx={{ fontSize: 14 }}>
						Nigeria
					</MenuItem>
					<MenuItem value={20} sx={{ fontSize: 14 }}>
						Canada
					</MenuItem>
					<MenuItem value={30} sx={{ fontSize: 14 }}>
						Japan
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
