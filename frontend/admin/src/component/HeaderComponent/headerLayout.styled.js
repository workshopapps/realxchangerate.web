import styled from 'styled-components'

export const StyledHeaderWrapper = styled.div`
    position: relative;
    padding: 24px 10px 14px 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: ${props => props.theme.$styled.breakpoints.lg}) {
        padding-inline: 32px;
    }
    @media (min-width: ${props => props.theme.$styled.breakpoints.md}) {
       justify-content: start;
    }
`

export const StyledHeaderTools = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    .headerNotif {
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
    }
    .headerNotif:hover {
        animation: bounce 1s infinite;

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
    }
`
