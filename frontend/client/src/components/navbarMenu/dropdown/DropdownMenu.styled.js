import styled from 'styled-components'

export const StyledWrapper = styled.li`
    margin: 8px 10px;
    /*
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px; */
    width: fit-content;
`;

export const StyledMenuOption = styled.div`

    /* --color: #333333; */
    --color: ${props => props.$darkMode ? '#0062ff' : '#333333'};

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    font-family: inherit;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 5px auto;
    position: relative;
    overflow: hidden;
    /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); */
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);

    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--color);
        height: 150px;
        width: 200px;
        border-radius: 50%;
        top: 100%;
        left: 100%;
        transition: all .7s;
    }

    &:hover {
        .option {
            font-weight: 600;
            color: #fff !important;
        }

        &:before {
            top: -30px;
            left: -30px;
        }
    }

    &:active {
        &:before{
            background: #3a0ca3;
            transition: all 0s; 
        } 
    }
    
    .option{
        color: ${props => props.$darkMode ? '#fff' : '#333333'};
        white-space: nowrap;
        position: relative;
        z-index: 4;
        
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`