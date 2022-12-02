import styled from 'styled-components'

export const StyledChartWrapper = styled.div`
    padding: 14px 0px 14px 19px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 16px;;

    flex-grow: 1;
    max-width: 100%;
    overflow: hidden;
`
export const StyledChartTop = styled.div`
    margin-bottom: 18px;
`
export const StyledTotalTvl = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px; */

    h4 {
        margin-bottom: 4px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;

        color: ${props => props.theme.$styled.colors.text900};
    }

    div {
        padding: 0;
        margin: 0;
        height: fit-content;
        display: flex;
        align-items: end;
        gap: 6px;

       .totalTvl {
            font-weight: 600;
            font-size: 28px;
            line-height: 32px;
            letter-spacing: -0.02em;

            color: ${props => props.theme.$styled.colors.text900};
        }
        .growth {
            
            font-weight: 700;
            font-size: 9.82823px;
            /* line-height: 11px; */
            line-height: 19px;

            color: ${props => props.theme.$styled.colors.green500};
        }
        .compare {
            
            font-weight: 400;
            font-size: 9.82823px;
            /* line-height: 11px; */
            line-height: 19px;
            letter-spacing: 0.06em;
            text-transform: uppercase;

            color: ${props => props.theme.$styled.colors.text500};
        }
    }
    
    

`

export const StyledTooltip = styled.div`
    background: #00296B;
    padding: 10px;
    border-radius: 8px;

    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;

        color: #FFFFFF;
    }
`