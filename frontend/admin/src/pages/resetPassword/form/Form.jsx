import { Container } from './formStyles';
import { useState } from 'react';

const Form = () => {
	// const [reset, setReset] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		// setEmail(email);
	};

	return (
		<Container>
			<form className='form' onSubmit={(e) => handleSubmit(e)}>
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
				<button className='button' onClick={() => alert('hey broo')}>
					Reset password
				</button>
			</form>
			<p>Don’t have an account? Sign up</p>
		</Container>
	);
};

export default Form;
