import styled from 'styled-components'

export const StyledWrapper = styled.div`
    padding-block: 30px;
`;

export const StyledGrid = styled.div`
    display: grid;

    gap: 76px;

    grid-template-columns: 1fr 1fr;
`;

export const StyledFaq = styled.div`

    h3 {
        font-weight: 600;
        font-size: 28px !important;
        line-height: 34px;

        color: #262A36;
    }

    p {
        font-weight: 400;
        font-size: 16px !important;
        line-height: 27px;

        color: #000000;
    }

    div.search {
        display: flex;
        align-items: center;
        gap: 11.5px;

        .icon{}
        .search{}
        button{}
    }
`;
export const StyledFaqImage = styled.div`

`;