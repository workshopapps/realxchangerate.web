// import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import emailIcon from '../../../assets/icons8-mai.png';

const Container = styled.section`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	.popup {
		width: 90%;
		max-width: 300px;
		padding: 40px 0;
		background-color: #fff;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.close {
		position: absolute;
		right: 30px;
		color: #fff;
		top: 30px;
		cursor: pointer;
	}
`;

const Modal = ({ popup, setPopup }) => {
	// const [toggle, setToggle] = useState(state);
	return (
		<>
			(
			<Container>
				<FaTimes className='close' onClick={() => setPopup(!popup)} />
				<div className='popup'>
					<h1>check your inbox!</h1>
					<img src={emailIcon} alt='success' />
				</div>
			</Container>
			)
		</>
	);
};

export default Modal;
