import styled from 'styled-components'

export const StyledWrapper = styled.div`
    padding: 32px 16px 32px 16px;

    @media (min-width: ${props => props.theme.$styled.breakpoints.lg}){
        padding: 32px 32px 32px 32px;
    }
`

export const StyledGrid = styled.div`
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    "tvl"
    "graph";

    gap: 35px;

    #tvl {
        grid-area: tvl;
    }
    #graph {
        grid-area: graph;
    }

    @media(min-width: ${props => props.theme.$styled.breakpoints.lg}){
        
        grid-template-columns: auto 1fr;
        grid-template-areas: 
            "tvl graph"
        ;
    }

`
// export const StyledFlex = styled.div`
//     margin-block: 16px 32px;
//     display: flex;
//     align-items: center;
// `

export const StyledTrendCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    @media (min-width: ${props => props.theme.$styled.breakpoints.md}) {
        flex-direction: row;
    }
    @media (min-width: ${props => props.theme.$styled.breakpoints.lg}) {
        align-items: start;
        flex-direction: column;
    }
`

export const StyledCard = styled.div`
    width: 100%;
    max-width: 340px;
    min-width: 200px;

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 18px 14px 18px 14px;
    gap: 12px;

    border: 0.5px solid ${props => props.theme.$styled.colors.text300};
    border-radius: 12px;

    h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;

        color: ${props => props.theme.$styled.colors.text900};
    }

    p {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -0.02em;

        color: ${props => props.theme.palette.primary.main};
    }

    span {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;

        letter-spacing: -0.02em;
        color: ${props => props.theme.$styled.colors.green500};
    }
`