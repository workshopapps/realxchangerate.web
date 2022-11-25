import styled from 'styled-components';

export const Container = styled.div`
	width: 32%;
	max-width: 350px;
	padding: 45px 17px 20px 17px;
	border: 1px solid #cbd5e1;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-contents: center;
	align-items: center;
	.integration_info {
		display: flex;
		.icon {
			width: 40px;
			height: 30px;
			margin-right: 7px;
			border-radius: 50%;
			// border: 1px solid red;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.type {
			h2 {
				font-size: clamp(1rem, 1.5vw, 1.1rem);
				margin-bottom: 0.5rem;
			}
			p {
				font-size: clamp(0.85rem, 1vw, 1rem);
			}
		}
	}
	@media screen and (max-width: 930px) {
		width: 90%;
		max-width: 400px;
	}
`;
