import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 32px 16px 0px 16px;
    margin-bottom: 52px;

    h2 {
        margin-bottom: 32px;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        
        color: ${props => props.theme.$styled.colors.text900};
    }

    @media (min-width: ${props => props.theme.$styled.breakpoints.lg}){
        padding: 32px 32px 32px 32px;
    }
`

export const StyledCardsWrapper = styled.div`
    display: grid;

    grid-template-columns: 1fr;
    grid-gap: 40px;

    @media (min-width: ${props => props.theme.$styled.breakpoints.lg}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
    }
`