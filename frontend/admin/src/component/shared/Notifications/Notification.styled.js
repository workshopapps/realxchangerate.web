import styled from 'styled-components'

export const StyledWrapper = styled.div`
    max-width: 568px;
    /* min-width: 290px; */
    width: 100%;

    background: #FFFFFF;


    .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 27px 14px 25px;

        h3 {
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;

            color: #000000;
        }
    }
`

export const StyledOptions = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const StyledOption = styled.li`
    padding: 13px 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    background-color: #FAFAFA;

    .preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;

        h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;

            color: ${props => props.theme.$styled.colors.text900};
        }
        p {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;

            color: ${props => props.theme.$styled.colors.text900};
        }
    }

    .btn {
        width: 100px;
    }
`
export const StyledOptionIcon = styled.div`
    padding: 4px;

    width: 32px;
    height: 32px;
   
    border-radius: ${props => props.theme.$styled.borderRadius.sm};

    &.message {
        background: ${props => props.theme.$styled.colors.blue50};
    }
    &.price {
        background: ${props => props.theme.$styled.colors.green50};
    }
`