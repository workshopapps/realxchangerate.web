import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import editIcon from '../../assets/editIcon.svg';
import { mockData } from './mockData';
import { Container, Integration } from './currStyles';
// import Button from '@mui/material/Button';
import SharedButton from '../../shared/Button';
// import add from '../../assets/add.svg';
import Card from './Card';
import createIcon from '../../assets/create_new.svg';
import updateIcon from '../../assets/update.svg';
import ModalUi from './Modal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		// backgroundColor: theme.palette.common.white,
		backgroundColor: theme.palette.action.hover,
		fontSize: 15,
		color: theme.palette.common.black,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(even)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function CreateCurrency() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	const handleClose = () => {
		setOpen(!open);
	};

	return (
		<>
			<Integration>
				<Card
					icon={createIcon}
					title={'Create New Integration'}
					desc={'Get new users on board and integrated into the system'}
					link={'Create Integration'}
				/>
				<Card
					icon={updateIcon}
					title={'Update Integration'}
					desc={'Update information on all user integrations easily'}
					link={'Update Integration'}
				/>
				<Card
					icon={createIcon}
					title={'Manage Integration'}
					desc={'Update and make changes to user integration'}
					link={'Manage Integration'}
				/>
			</Integration>
			<Container>
				<div className='topSect'>
					<div>
						<h1>Currency Overview</h1>
						<p>Create and edit currency exchange rates</p>
					</div>
					<ModalUi
						handleOpen={handleOpen}
						handleClose={handleClose}
						open={open}
					/>
				</div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 500 }} aria-label='customized table'>
						<TableHead>
							<TableRow>
								<StyledTableCell sx={{ fontWeight: '700' }}>
									Country
								</StyledTableCell>
								<StyledTableCell align='left' sx={{ fontWeight: '700' }}>
									Code
								</StyledTableCell>
								<StyledTableCell align='left' sx={{ fontWeight: '700' }}>
									Rate/₦
								</StyledTableCell>
								<StyledTableCell align='right'>
									{/* Carbs&nbsp;(g) */}
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{mockData.map((row) => (
								<StyledTableRow key={row.name}>
									<StyledTableCell component='th' scope='row'>
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<img
												src={row.flag}
												alt='flag'
												style={{ width: '30px', marginRight: '10px' }}
											/>
											<span>{row.name}</span>
										</div>
									</StyledTableCell>
									<StyledTableCell align='left'>{row.code}</StyledTableCell>
									<StyledTableCell align='left'>{row.rate}</StyledTableCell>
									<StyledTableCell align='right'>
										<img src={editIcon} alt='edit' />
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<SharedButton variantType={'text'} text={'view more currencies'} />
			</Container>
		</>
	);
}
