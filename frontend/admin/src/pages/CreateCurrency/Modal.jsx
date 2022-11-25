import { Modal, Box, Button } from '@mui/material';
// import Box from '@mui/material';
// import Button from '@mui/material';
import add from '../../assets/add.svg';
import Form from './Form';

const ModalUi = ({ open, handleOpen, handleClose }) => {
	return (
		<>
			<Button
				onClick={handleOpen}
				variant='contained'
				sx={{ height: 1 / 2, fontSize: 13 }}>
				Add currency
				<img src={add} alt='add' style={{ marginLeft: '10px' }} />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				sx={{
					height: '100vh',
					// border: '1px solid red',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Box
					sx={{
						width: '90%',
						maxWidth: '500px',
					}}>
					<Form />
				</Box>
			</Modal>
		</>
	);
};

export default ModalUi;
