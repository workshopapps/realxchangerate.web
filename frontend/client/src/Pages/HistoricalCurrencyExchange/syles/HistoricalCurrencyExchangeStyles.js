import styled from "styled-components";

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
  width: 80%;
  justify-content:center;
  
}
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
