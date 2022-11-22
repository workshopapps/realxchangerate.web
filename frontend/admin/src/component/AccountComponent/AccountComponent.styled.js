import styled from 'styled-components'

export const StyledAccountWrapper = styled.div`
    /* padding-inline: 26px; */


    @media (min-width: 1005px ){
       padding-inline: 66px; 
    }
    
`

export const StyledAccountCoverPic = styled.div`
    max-width: 1000px;
    position: relative;

    img {
        width: 100%;
        height: auto;

        object-fit: cover;
        object-position: center;
    }

    h1 {
        position: absolute;
        z-index: 50;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        font-weight: 800;
        font-size: 5vw;
        line-height: 80px;

        letter-spacing: -0.04em;

        color: ${props => props.theme.$styled.colors.text50};
    }
`

export const StyledUserInfoWrapper = styled.div`
    margin-block: 8px;
    padding: 8px 16px;

    background-color: #fff;

    display: flex;
    justify-content: space-between;
`
export const StyledUserInfo1 = styled.div`
    width: 100%;
    max-width: 400px;

    .info {
        margin-top: 21px;
        padding: 8px;

        p {
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;

            color: ${props => props.theme.$styled.colors.text900};
        }
    }
`
export const StyledUserInfo2 = styled.div`
    width: 100%;
    max-width: 277px;

    .top{
        background-color: ${props => props.theme.$styled.colors.body};
        padding: 12px 24px;

        p{
            font-weight: 600;
            font-size: 12px;
            line-height: 150%;
            color: ${props => props.theme.$styled.colors.text800};
        }

        div {
            display: flex;
            align-items: center;
            gap: 10px;

            .icon{
                width: 16px;
                height: 16px;
            }
            p {
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.001em;
                color: ${props => props.theme.palette.primary.main};

            }
        }
    }

    .bottom{
        background-color: ${props => props.theme.$styled.colors.body};
    }
`