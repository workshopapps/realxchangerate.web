import styled from 'styled-components';

export const StyledWrapper = styled.section`
	padding: 32px 32px 0px 32px;
	margin-bottom: 52px;
	input:disabled,
	textarea:disabled {
		background-color: inherit;
	}
	.cta {
		// border: 1px solid red;
		width: 48%;
		display: flex;
		justify-content: space-between;
		> * {
			width: 45%;
		}
	}

	@media (max-width: 500px) {
		.cta {
			width: 100%;
		}
	}
`;
export const ResponseTitle = styled.h2`
	font-size: clamp(0.9rem, 1.5vw, 1rem);
	margin: 1rem 0;
`;
export const StyledPageHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;

	margin-bottom: 36px;

	h3 {
		font-weight: 600;
		font-size: clamp(0.9rem, 1.5vw, 1rem);
		color: ${(props) => props.theme.$styled.colors.text900};
	}
`;

export const Form = styled.form`
	h3 {
		padding-block: 24px;
		font-weight: 600;
		line-height: 28px;
		color: ${(props) => props.theme.$styled.colors.text900};
	}

	label {
		display: block;
		// margin-bottom: px;
		font-weight: 400;
		font-size: clamp(0.8rem, 1vw, 0.9rem);
		line-height: 24px;
		color: #333333;
	}

	.resolve {
		font-weight: 600;
		font-size: 20px;
		line-height: 28px;

		color: ${(props) => props.theme.$styled.colors.text900};
	}
`;

export const StyledInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 20px 12px;

	border: 1px solid #cbd5e1;
	border-radius: 4px;

	input[type='text'],
	input[type='email'] {
		width: 100%;
		border: 0;
		outline: 0;
		font-weight: 400;
		font-size: 14px;
		color: #333333;
		outline: 0;
	}

	&:hover {
		border: 1px solid #333333;
	}
`;

export const StyledTextArea = styled.textarea`
	padding: 20px 12px;

	border: 1px solid #cbd5e1;
	border-radius: 4px;

	width: 100%;
	outline: 0;
	overflow: auto;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;

	letter-spacing: 0.001em;

	color: ${(props) => props.theme.$styled.colors.text600};
`;

export const StyledSelect = styled.select`
	padding: 20px 12px;

	border: 1px solid #cbd5e1;
	border-radius: 4px;
	width: 100%;
	outline: 0;
	overflow: auto;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.001em;

	color: ${(props) => props.theme.$styled.colors.text600};
	background-color: #fff;

	.option {
		padding: 20px 12px;

		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		letter-spacing: -0.02em;

		color: #0f172a;
	}
`;

export const StyledGrid = styled.div`
	margin-bottom: 24px;
	// border: 1px solid red;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px;

	@media (max-width: 780px) {
		grid-template-columns: 1fr;
		grid-gap: 24px;
	}
`;
