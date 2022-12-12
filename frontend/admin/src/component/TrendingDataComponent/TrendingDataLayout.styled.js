import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 32px 16px 32px 16px;

	@media (min-width: ${(props) => props.theme.$styled.breakpoints.lg}) {
		padding: 32px 32px 32px 32px;
	}
`;

export const StyledGrid = styled.div`
	margin-bottom: 60px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'graph'
		'tvl';

	gap: 35px;

	#graph {
		grid-area: graph;
	}
	#tvl {
		grid-area: tvl;
	}

	@media (min-width: ${(props) => props.theme.$styled.breakpoints.lg}) {
		grid-template-columns: 1fr auto;
		grid-template-areas: 'graph tvl';
	}
`;
// export const StyledFlex = styled.div`
//     margin-block: 16px 32px;
//     display: flex;
//     align-items: center;
// `

export const StyledTrendCards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	// border: 1px solid red;

	@media (min-width: ${(props) => props.theme.$styled.breakpoints.md}) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	@media (min-width: ${(props) => props.theme.$styled.breakpoints.lg}) {
		align-items: start;
		flex-direction: column;
	}
`;

export const StyledCard = styled.div`
	width: 90%;
	max-width: 340px;
	min-width: 200px;
	// border: 1px solid red;
	// flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 18px 14px 18px 14px;
	gap: 12px;

	border: 0.5px solid ${(props) => props.theme.$styled.colors.text300};
	border-radius: 12px;

	h3 {
		font-weight: 600;
		font-size: clamp(1rem, 2vw, 1.125rem);

		color: ${(props) => props.theme.$styled.colors.text900};
	}

	// p {
	// 	font-weight: 700;
	// 	font-size: clamp(1.4rem, 2vw, 1.55rem);
	// 	// line-height: 32px;
	// 	// letter-spacing: -0.02em;
	// 	color: ${(props) => props.theme.palette.primary.main};
	// }

	span {
		font-weight: 700;
		font-size: clamp(1.4rem, 2vw, 1.55rem);
		line-height: 32px;

		// letter-spacing: -0.02em;
		color: ${(props) => props.theme.$styled.colors.green500};
	}
`;
