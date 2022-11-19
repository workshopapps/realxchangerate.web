import styled from "styled-components";

const SupportWrappper = styled.section`
margin-top: 113px
margin-left: auto;
margin-right: auto;
// background-color: red;


.support-container {
    padding-top: 84px;
    padding-bottom: 50px;
    text-align: center;
}

.support-container h1 {
    font-weight: 400;
    font-size: 3.125rem;
    line-height: 3.8rem;
    color: #0062FF;
}

.support-container p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
}

.support-img {
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.support-img img {
    width: 100%;
}

@media (max-width: 600px) {
    margin-top: 51px

    .support-container {
        padding-top: 36px;
        padding-bottom: 56px;
    }

    .support-container h1 {
        font-size: 1.5rem;
        line-height: 1.8rem;
    }

    .support-container p {
        font-size: 1rem;
        line-height: 1.2rem;
    }
}

`;

export default SupportWrappper;
