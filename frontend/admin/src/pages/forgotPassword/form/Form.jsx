import { Container } from './formStyles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userForgotPassword } from '../../../store/actions/passwordActions';
import Modal from './Modal';

const Form = ({ toggle }) => {
	const [popup, setPopup] = useState(false);
	const dispatch = useDispatch();
	const { requestStatus } = useSelector((state) => state.password);
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(userForgotPassword({ email }));
		// console.log(requestStatus);
		if (requestStatus === 'success') {
			setPopup(true);
		}
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
				<button className='button' onClick={() => toggle(email)}>
					Reset password
				</button>
			</form>
			<p>Don’t have an account? Sign up</p>
		</Container>
	);
};

export default Form;
