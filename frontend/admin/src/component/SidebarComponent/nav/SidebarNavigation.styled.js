import styled from 'styled-components'

export const StyledSidebarNavigation = styled.div`
    width: fit-content;
    margin-top: 30px;
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    gap: 23px;

    nav {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px 12px;

        @media screen and (min-width: ${props => props.theme.$styled.breakpoints.lg}) {
            margin-top: 0px;
            min-width: 195px;
        }
    }
`;

export const StyledSidebarNavigationOption = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 12px;
    overflow: hidden;

    display: flex;
    gap: 12px;
    align-items: center;

    border-radius: ${props => props.theme.$styled.borderRadius.sm}; 
    transition: all 250ms;

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.$isActive ? '100%' : 0};
        border-radius: ${props => props.theme.$styled.borderRadius.sm};
        background-color: ${props => props.theme.palette.primary.main};
        z-index: 2;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 350ms;
    }

    &:hover {
        background-color: ${props => !props.$isActive && props.theme.$styled.colors.body};
    }
    
    .icon{
        position: relative;
        z-index: 4;
        width: 24px;
        height: 24px;
    }
    .option{
        white-space: nowrap;
        position: relative;
        z-index: 4;
        font-weight: ${props => props.$isActive ?
        600 : 400};;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.$isActive ?
        '#fff' : props.theme.$styled.colors.text600};
    }

    @media screen and (min-width: ${props => props.theme.$styled.breakpoints.md}) {
        .icon {
            &:hover {
                transition-duration: 100ms;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transform: scale(1.07);
            }
        }
        
    }
`