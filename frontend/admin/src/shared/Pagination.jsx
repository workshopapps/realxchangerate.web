import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({
	postsPerPage,
	totalPosts,
	paginate,
}) {
	const [page, setPage] = React.useState(1);
	const PageNumber = Math.ceil(totalPosts / postsPerPage);
	const handleClick = (event, value) => {
		setPage(value);
		paginate(value);
		// console.log(page);
	};

	return (
		<Stack spacing={2}>
			<Pagination
				count={PageNumber}
				variant='outlined'
				shape='rounded'
				onChange={handleClick}
				page={page}
			/>
		</Stack>
	);
}
