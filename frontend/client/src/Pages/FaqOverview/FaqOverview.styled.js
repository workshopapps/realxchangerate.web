import styled from 'styled-components'

export const StyledWrapper = styled.div`
    padding-block: 30px;

    .faqQuestion {
        width: 100% !important;
        font-weight: 700;
        font-size: 18px !important;
        line-height: 120%;
        display: flex;
        align-items: center;

        color: #0F172A
    }

    .faqAnswer {
        width: 100% !important;
        font-weight: 400;
        font-size: 16px !important;
        line-height: 140%;

        color: rgba(60, 60, 67, 0.85);
    }
`;

export const StyledGrid = styled.div`
    margin-bottom: 100px;

    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 76px;

    grid-template-areas: "mainSide imageSide";
    place-items: center;

    #mainXD {
        grid-area: mainSide;
    }
    #imageXD {
        max-width: 560px;
        grid-area: imageSide;
    }


    @media(max-width: 768px){
        grid-template-columns: 1fr;

        grid-template-areas: 
        "imageSide"
        "mainSide"
        ;

        #imageXD {
            min-width: 100%;
        }
    }

`;

export const StyledFaq = styled.div`
    display: flex;
    flex-direction:column;
    min-width: 400px;


    h3 {
        font-weight: 600;
        font-size: 28px !important;
        line-height: 34px;

        color: #262A36;
    }

    p {
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 16px !important;
        line-height: 27px;

        color: #000000;
    }

    div.searchWrapper {
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 11.5px;

        background: #F8FAFC;
        border-radius: 8px;

        .icon{
            width: 24px;
            height: 24px;
        }
        button{
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 16px 20px;
            min-width: 120px;

            background: #0062FF;
            border-radius: 8px;
            border: 0;
            outline: 0;
            color: #F8FAFC;
        }
    }

    @media(max-width: 768px){
        width: 100%;
        min-width: 100%;
    }
`;

export const StyledInput = styled.input.attrs({ type: 'text' })`
    color: #94A3B8;
    background: #F8FAFC;
    border: 0px solid #F8FAFC;
    outline: 0px solid #F8FAFC;
    width: 90%;
    min-width: 110px;
`

export const StyledFaqImage = styled.div`
    img {
        width: 100%;
        height: auto;

        object-fit: contain;
        object-position: center;
    }
`;

export const StyledFaqBottom = styled.div`
    margin-block: 100px 90px;
    padding: 24px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #E6EFFF;
    border-radius: 16px;

    div {
        h4{
            margin-bottom: 8px;
            font-weight: 600;
            font-size: 20px !important;
            line-height: 23px;

            color: #0F172A;
        }

        p {
            font-weight: 400;
            font-size: 16px !important;
            line-height: 19px;

            color: #555962; 
        }
    }

    button {
        padding: 16px 20px;
        cursor: pointer;

        background: #0062FF;
        border-radius: 8px;

        font-weight: 600;
        font-size: 16px !important;
        line-height: 24px;

        border: 0;
        outline: 0;
        color: #F8FAFC;
    }
`