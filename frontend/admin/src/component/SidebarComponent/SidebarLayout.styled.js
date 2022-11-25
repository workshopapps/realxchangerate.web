import styled from 'styled-components'

export const StyledSidebarWrapper = styled.div`
    background-color: ${(props) => props.theme.$styled.colors.sideBarBackground};

    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
    user-select: none;

    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.9);
    border-right: 1px solid rbg(219, 219, 219);

    @media (max-width: ${props => props.theme.$styled.breakpoints.md}) {
        display: none;
    }
`;

// TOP
export const StyledSidebarTopBlock = styled.div`
    margin: 36px 0px 12px;
`
export const StyledSidebarTopBlockLogo = styled.div`
    cursor: pointer;
    width: fit-content;
    margin-inline: auto;

    animation: bounce 1s;
    animation-iteration-count: 3.5;
    animation-fill-mode: none;

    @keyframes bounce {
        0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
    }

`