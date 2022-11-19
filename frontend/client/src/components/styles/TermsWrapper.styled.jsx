import styled from "styled-components";

export const TermsWrapper = styled.div `
    margin-top: 20px;

    h2 {
        font-size: 32px;
        letter-spacing: -0.02em;
        color: #0F172A;
        font-family: 'inter-bold', sans-serif;

        @media(max-width: 600px) {
            font-size: 24px;
        }
    }
    h4 {
        font-size: 20px;
        line-height: 28px;
        color: #0F172A;
        font-family: 'inter-smbold', sans-serif;
    }
    p {
        font-size: 18px;
        line-height: 24px;
        color: #555962;

        @media(max-width: 600px) {
            font-size: 16px;
        }
    }
`