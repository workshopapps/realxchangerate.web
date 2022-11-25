import styled from 'styled-components';

export const StyledLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "main";

    height: 100vh;

    #sidebar {
        grid-area: sidebar;
    }
    #content {
        grid-area: main;
        overflow-y: auto;
    }


    @media screen and (min-width: ${props => props.theme.$styled.breakpoints.md}) {
        grid-template-columns: fit-content(15%) 1fr;

        grid-template-areas:
            "sidebar main main main"
            "sidebar main main main"
            "sidebar main main main"
            "sidebar main main main";

        /* grid-gap: 32px; */
    }

    @media screen and (min-width: ${props => props.theme.$styled.breakpoints.lg}) {
        grid-template-columns: fit-content(15%) 1fr;
    }

`

