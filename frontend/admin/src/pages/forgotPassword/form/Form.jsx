import { Container } from './formStyles';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userForgotPassword } from '../../../store/actions/passwordActions';
import { toast } from 'react-toastify';
import Modal from './Modal';

const Form = () => {
	const [popup, setPopup] = useState(false);
	const dispatch = useDispatch();
	const { requestStatus } = useSelector((state) => state.password);
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (requestStatus === 'failed') {
			toast.error('user not found');
		}
		if (requestStatus === 'success') {
			setPopup(true);
		}
	}, [requestStatus]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(userForgotPassword({ email }));
	};

	return (
		<Container>
			{popup && <Modal popup={popup} setPopup={setPopup} />}
			<form className='form' onSubmit={(e) => handleSubmit(e)}>
				<h2>Forgot password</h2>
				<div className='validateInput'>
					<label htmlFor='email'>Email</label>
					<input
						className='emailInput'
						type='email'
						id='email'
						placeholder='eg. mail@example.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<button className='button'>Reset password</button>
			</form>
			{/* <p>Don’t have an account? Sign up</p> */}
		</Container>
	);
};

export default Form;
