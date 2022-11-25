import React from 'react';
import { Container } from './cardStyles';
import SharedButton from '../../shared/Button';
// import createIcon from '../../assets/create_new.svg';

const Card = ({ icon, title, desc, link }) => {
	return (
		<Container>
			<div className='integration_info'>
				<div className='icon'>
					<img src={icon} alt='icon' />
				</div>
				<div className='type'>
					<h2>{title}</h2>
					<p>{desc}</p>
					<SharedButton
						variantType='contained'
						text={link}
						invertColor={true}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Card;
