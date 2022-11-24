import styled from 'styled-components'

export const StyledAvatarProfile = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
    gap: 16px;

    background: ${props => props.theme.palette.primary.main};
    
`
export const StyledAvatarProfilePreview = styled.div`
    h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme.$styled.colors.text50};
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;  
        letter-spacing: 0.001em;

        color: ${props => props.theme.$styled.colors.text50};
    }
`