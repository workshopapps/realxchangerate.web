import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 32px 16px 0px 16px;
    margin-bottom: 32px;

    @media (min-width: ${props => props.theme.$styled.breakpoints.lg}){
        padding: 32px 32px 0px 32px;
    }
`

export const StyledPageHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    
    margin-bottom: 36px;

    h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;

        color: ${props => props.theme.$styled.colors.text900};
    }
`;

export const StyledCardDelete = styled.div`
    /* position: absolute; */
    /* top: 0;
    right: 0;
    transform: translateY(-30%) translateX(30%);
    z-index: 10; */

    /* display: flex;
    align-items: center;
    justify-content: center; */

    width: fit-content;
    margin-inline-start: auto;
    margin-bottom: 15px;

    /* background-color: red;
    border-radius: 50%;
    padding: 0; */
`
export const StyledDeleteQuestion = styled.p`
    font-size: 20px;
    font-weight: 500;

    text-align: center;
`;
export const StyledDeleteQuestionWrapper = styled.div`
    margin: 32px 0px 4px;
    display: flex;
    justify-content: center;
    gap: 16px;
    align-items: center;
`;

export const StyledDeleteNo = styled.button`
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #17171750;
    border-radius: 8px;
    min-width: 72px;
    padding: 8px 14px;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    &:hover{
        border: 1px solid #171717;
    }
`
export const StyledDeleteYes = styled.button`
    cursor: pointer;
    border-radius: 8px;
    background-color: #f00f00;
    border-color: transparent;
    min-width: 72px;
    padding: 8px 14px;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;

    &:hover{
        background-color: #f00f0098; 
    }
`


export const StyledComplaintForm = styled.form`

    h3 {
        margin-bottom: 24px;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;

        color: ${props => props.theme.$styled.colors.text900};
    }

    label {
        display: block;
        margin-bottom: 10px;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        /* text-align: center; */

        color: #000000;
    }

    .resolve {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;

        color: ${props => props.theme.$styled.colors.text900};
    }

   
`;

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px 12px;

    /* width: 492px; */

    border: 1px solid #CBD5E1;
    border-radius: 4px;

    input[type=text], input[type=email] {
        border: 0;
        outline: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #333333;

        &:focus {
            border: 0;
            outline: 0;
        }
    }
`;

export const StyledTextArea = styled.textarea`
    padding: 20px 12px;

    border: 1px solid #CBD5E1;
    border-radius: 4px;

    width: 100%;
    outline: 0;
    overflow: auto;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: 0.001em;

    color: ${props => props.theme.$styled.colors.text600};

    &:hover {
        border: ${props => props.disabled ? '1px solid #CBD5E1' : '1px solid #333333'};
    }
`;

export const StyledButtonWrapper = styled.div`
    margin-top: 70px;

    display: flex;
    align-items: center;
    gap: 14px;

    @media (max-width: ${props => props.theme.$styled.breakpoints.md}) {
       flex-wrap: wrap-reverse;
    }
`
export const StyledFormButtonSubmit = styled.button.attrs({ type: 'submit' })`
    max-width: 262px;
    width: 100%;
    padding: 15px 27px;
    cursor: pointer;

    border-radius: 8px;
    background: ${props => props.disabled ? '#aaa' : props.theme.palette.primary.main};
    border-color: transparent;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;

    &:hover{
        background: ${props => props.disabled ? '#aaa' : props.theme.palette.primary.dark}; 
    }

    @media(max-width: ${props => props.theme.$styled.breakpoints.md}){
        max-width: 100%;
    }
`;
export const StyledFormButtonCancel = styled.button`
    max-width: 163px;
    width: 100%;
    padding: 15px 27px;
    cursor: pointer;

    background: #FFFFFF;
    border: 1px solid #17171750;
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: #121212;

    &:hover{
        border: 1px solid #171717;
    }

    @media(max-width: ${props => props.theme.$styled.breakpoints.md}){
        max-width: 100%;
    }
`;


export const StyledGrid = styled.div`
    margin-bottom: 24px;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;

    @media (min-width: ${props => props.theme.$styled.breakpoints.lg}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 54px;
    }
`;

export const StyledGrayWrapper = styled.div`
    background-color: #F8FAFC;
    padding: 24px 12px 47px;

    margin-bottom: 54px;
`;