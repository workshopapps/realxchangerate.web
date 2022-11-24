import styled from 'styled-components'

export const StyledFlagAndCountry = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    img {
        width: 37.67px;
        height: 28px;

        object-fit: cover;
    }
`
export const StyledGrowth = styled.p`
    color: ${props => props.theme.$styled.colors.green500};
`
export const StyledLoss = styled.p`
    color: ${props => props.theme.$styled.colors.red500};
`