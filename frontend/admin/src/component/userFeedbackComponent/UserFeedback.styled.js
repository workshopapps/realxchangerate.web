import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 32px 32px 32px 32px;
	margin-bottom: 52px;

	h2 {
		margin-bottom: 1rem;
		font-weight: 600;
		font-size: clamp(1rem, 2vw, 1.25rem);
		line-height: 28px;

		color: ${(props) => props.theme.$styled.colors.text900};
	}

	.paginationBox {
		display: flex;
		justify-content: flex-end;
		margin: 1.5rem 0;
	}
`;

export const StyledCardsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;

	@media (max-width: 780px) {
		grid-template-columns: 1fr;
	}
`;
