import styled from 'styled-components'

export const StyledWrapper = styled.div`
    transform: scale(0.4);
`

export const StyledHamburger = styled.div`

    width: 60px;
    height: 45px;
    position: relative;
    /* margin: 50px auto; */
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;


    span {
        display: block;
        position: absolute;
        height: 6px;
        width: 50%;
        
        /* background-color: #475569; */
        opacity: 1;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    span.two, span.four, span.six {
        left: 50%;
        border-radius: 0 9px 9px 0;
    }

    span.one, span.three, span.five {
        left:0px;
        border-radius: 9px 0 0 9px;
    }

    span.one, span.two {
        top: 0px;
    }

    span.three, span.four {
        top: 18px;
    }

    span.five, span.six {
        top: 36px;
    }

    &.open span.one,
    &.open span.six {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    &.open span.two, 
    &.open span.five {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    &.open span.one {
        left: 5px;
        top: 7px;
    }

    &.open span.two {
        left: calc(50% - 5px);
        top: 7px;
    }

    &.open span.three {
        left: -50%;
        opacity: 0;
    }

    &.open span.four {
        left: 100%;
        opacity: 0;
    }

    &.open span.five {
        left: 5px;
        top: 29px;
    }

    &.open span.six {
        left: calc(50% - 5px);
        top: 29px;
    } 
`