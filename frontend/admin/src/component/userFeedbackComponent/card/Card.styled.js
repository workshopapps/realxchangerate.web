import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
	background: #ffffff;
	border: 1px solid #cbd5e1;
	border-radius: 16px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	&:hover {
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.align {
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
	}
	.align-top {
		// margin-top: 0.5rem;
	}
	.alignBottom {
		// border: 1px solid red;
		margin-top: 1.5rem;
		// align-items: flex-end;
		.date {
			display: flex;
			align-items: center;
		}
		span {
			margin-left: 5px;
			font-size: 12px;
		}
	}
`;
export const Status = styled.span`
	height: max-content;
	padding: 2px 7px;
	border-radius: 7px;
	color: #2b2b2b;
	background: ${({ $stats }) => ($stats === 'unread' ? '#f9e5e4' : '#b7f7e2')};
	font-size: 12px;
`;

export const Name = styled.h3`
	font-weight: 500;
	font-size: clamp(0.95rem, 1.5vw, 1rem);
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.$styled.colors.text900};
`;
export const Email = styled.h3`
	margin-bottom: 1.5rem;
	font-weight: 500;
	font-size: 0.875rem;
	color: ${(props) => props.theme.$styled.colors.text900};
`;

export const StyledCardMessage = styled.p`
	margin-block-end: 8px;
	font-weight: 400;
	font-size: clamp(0.8rem, 1.5vw, 0.875rem);
	line-height: 20px;
	color: ${(props) => props.theme.$styled.colors.text600};
`;
