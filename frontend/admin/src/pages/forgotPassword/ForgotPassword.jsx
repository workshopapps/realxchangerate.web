import { useState } from 'react';
import { Container } from './forgotPasswordStyles';
import VerifyEmail from './verifyEmail/VerifyEmail';
import Form from './form/Form';

const ForgotPassword = () => {
	const [verify, setVerify] = useState(false);
	const toggle = () => setVerify(!verify);
	return (
		<Container>
			{!verify && <Form toggle={toggle} />}
			{verify && <VerifyEmail />}
		</Container>
	);
};

export default ForgotPassword;
