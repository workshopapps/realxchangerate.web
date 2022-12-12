// import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import emailIcon from '../../../assets/icons8-mai.png';
import { useNavigate } from 'react-router-dom';

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
		max-width: 600px;
		padding: 40px 0;
		background-color: #fff;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			font-weight: 600;
			font-size: clamp(0.9rem, 1.5vw, 1.2rem);
		}
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
	const navigate = useNavigate();
	const handleClick = () => {
		setPopup(!popup);
		navigate('/admin/resetpassword');
	};
	return (
		<>
			<Container>
				<FaTimes className='close' onClick={() => handleClick()} />
				<div className='popup'>
					<h1> we've sent a link to your email!</h1>
					<img src={emailIcon} alt='success' />
				</div>
			</Container>
		</>
	);
};

export default Modal;
