// import { useState } from 'react';s
import { Container } from './forgotPasswordStyles';
// import VerifyEmail from './verifyEmail/VerifyEmail';
import Form from './form/Form';
// import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
	// const [verify, setVerify] = useState(false);
	// const toggle = (input) => {
	// 	if (input.length < 1) {
	// 		alert("fields can't be empty");
	// 	}
	// 	// else {
	// 	// 	setVerify(!verify);
	// 	// }
	// };
	return (
		<Container>
			{<Form />}
			{/* {verify && <VerifyEmail />} */}
		</Container>
	);
};

export default ForgotPassword;
