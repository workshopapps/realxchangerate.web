import { Container } from './formStyles';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { userForgotPassword } from '../../../store/actions/passwordActions';

const Form = () => {
	// const [reset, setReset] = useState(false);
	// const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(userForgotPassword({ email }));
		console.log('heyy');
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
