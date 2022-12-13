import { Container } from './formStyles';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../store/actions/passwordActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { requestStatus } = useSelector((state) => state.password);

	useEffect(() => {
		if (requestStatus === 'failed') {
			toast.error('error changing password');
		}
		if (requestStatus === 'success') {
			navigate('/admin/login');
		}
		// eslint-disable-next-line
	}, [requestStatus]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({ email, password }));
		console.log(requestStatus);
	};

	return (
		<Container>
			<form className='form' onSubmit={handleSubmit}>
				<h2>Reset password</h2>
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
					<label htmlFor='text'>New password</label>
					<input
						className='emailInput'
						type='text'
						id='text'
						// placeholder='eg. mail@example.com'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button className='button' onClick={handleSubmit}>
					Reset password
				</button>
			</form>
			<p>Don’t have an account? Sign up</p>
		</Container>
	);
};

export default Form;
