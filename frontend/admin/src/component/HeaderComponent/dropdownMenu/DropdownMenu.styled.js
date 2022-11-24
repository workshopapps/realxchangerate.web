import styled from 'styled-components'

export const StyledWrapper = styled.div`
    padding-block: 16px 24px;
    background-color: ${props => props.theme.$styled.colors.sideBarBackground};

    .search {
        margin-inline: 24px;
        margin-bottom: 12px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;

        width: 190px;
        margin-inline: auto;
    }
`

export const StyledMenuOption = styled.li`
    position: relative;
    padding: 12px;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    border-radius: ${props => props.theme.$styled.borderRadius.sm}; 
    transition: all 250ms;

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        width: 0;
        border-radius: ${props => props.theme.$styled.borderRadius.sm};
        background-color: ${props => props.theme.palette.primary.main};
        z-index: 2;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 500ms;
        transform-origin: 50% 50%;
    }

    &:hover {
        .option {
            font-weight: 600;
            color: #fff;
        }

        &:before {
            left: 0;
            width: 100%;
        }
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
`