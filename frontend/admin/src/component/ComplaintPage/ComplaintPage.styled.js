import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 32px 16px 0px 16px;
    margin-bottom: 52px;

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

export const StyledComplaintForm = styled.form`

    h3 {
        padding-block: 24px;
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

    &:hover {
        border: 1px solid #333333;
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
    
`;

export const StyledSelect = styled.select`
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
    background-color: #fff;

    .option {
        padding: 20px 12px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;

    color: #0F172A;
    }
`;

// export const StyledOption = styled.option`

//     padding: 20px 12px;

//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 20px;
//     text-align: center;
//     letter-spacing: -0.02em;

//     color: #0F172A;
// `

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