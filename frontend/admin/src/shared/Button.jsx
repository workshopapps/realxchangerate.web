import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import arrow from '../assets/arrow_forward.svg';
import arrow2 from '../assets/arrow_inv.svg';
import styled from 'styled-components';

const Contain = styled.div`
	.image {
		margin-left: 10px;
		
`;

const SharedButton = ({ variantType, text, invertColor }) => {
	return (
		<Contain>
			<Stack spacing={2} direction='row' sx={{ my: 2 }}>
				<Button variant={variantType} sx={{ width: '100%' }}>
					<span style={{ fontSize: '0.8rem' }}>{text}</span>

					{invertColor ? (
						<img src={arrow2} alt='arrow' className='image' />
					) : (
						<img src={arrow} alt='arrow' className='image' />
					)}
				</Button>
			</Stack>
		</Contain>
	);
};

export default SharedButton;
