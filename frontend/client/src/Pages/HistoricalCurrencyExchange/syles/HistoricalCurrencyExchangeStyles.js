import styled from "styled-components";
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import {blue} from "../constants"
import TabsListUnstyled from '@mui/base/TabsListUnstyled';

export const currencyImage = styled.div`
display:flex;
flex-direction:row;

.flag{
  margin-right:10px;
}

`


export const TopComponentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 84%;
  justify-content:center;
  align-items:center;
  @media (max-width: 765px){
    align-items:center;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction:column;
  }
`;

export const MainComponentWrapper = styled.section`
  margin-top:24px;
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  @media (max-width: 425px){
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Table = styled.table`
  width: 100%;
  font-size:18px;
  font-weight:400;
  .table_row {
    font-size:18px;
    background-color:#F8FAFC;
    height:44px;
    text-align:center;
  }
  @media (max-width: 765px){
    display:none;
  }
  .table_header{
    width:33.33%;
  }
  .one{
    text-align:left;
  }
  .two{
    text-align:center;
  }
  .three{
    text-align:right;
  }
  .table_row_two{
    height:46px;
    border:solid;
    border-bottom:4px;
    border-color:gray;
  }

`

export const MobileTable = styled.table`
  width: 100%;


`

export const ConverterWrapper = styled.div`
margin-top:30px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:right;

@media (max-width: 765px){
  justify-content:center;
  flex-direction:column;

}
.convert{
  height:44px;
  width:380px;
}
.arrow{
  margin-left:14px;
  margin-right:14px;

  @media (max-width: 765px){
    margin-top:20px;
    margin-bottom:10px;
    transform: rotate(90deg);
  }
}


`

export const MobileViewWrapper = styled.table`
  width: 100%;
  .rates{
    height:44px;
    text-align:center;
  }
  .rates2{
    margin-left:15px;
  }
  display:none;

  @media (max-width: 765px){
    justify-content:center;
    display:flex;
  }
  .mobile_table{
    background-color:#F8FAFC;
    height:44px;
    font-size:18px;
  }
`

export const NewTab = styled(TabUnstyled)`
  font-family: Inter, sans-serif;
  color: #64748b;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabsList = styled(TabsListUnstyled)`
  min-width: 400px;
  background-color: ${blue[400]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
