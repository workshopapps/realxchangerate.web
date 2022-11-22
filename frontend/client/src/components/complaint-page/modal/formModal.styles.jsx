import styled from "styled-components";
 
const FormWrapper = styled.section`
 position: fixed;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 z-index: 10;
 backdrop-filter: blur(5px);
 
 .modal-wrapper {
   background-color: #fff;
   width: 80%;
   max-width: 500px;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   padding: 20px 10px;
   gap: 10px;
 }
 
 .modal-top {
   display: flex;
   padding: 10px;
   justify-content: space-between;
   align-items: center;
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 30px;
   color:#0062ff;
 }
 
 .modal-top div {
   cursor: pointer;
 }
 
 form{
     margin: 0 auto;
 
 }
 
 .form-container {
   display: flex;
   flex-direction: column;
   gap: 25px;
  
 }
 
 .form-container input, textarea {
   padding: 0.6rem 1rem;
 }
 .form-container input:focus, textarea:focus {
   outline: none;
 }
 
 .form-container button {
   background-color: #0062ff;
   font-weight: 600;
   font-size: 1rem;
   line-height: 1.5rem;
   height: 3rem;
   color: white;
   border-radius: 12px;
   cursor: pointer;
 }
 
//   .form-container textarea {
//     width: 250px;
//   }
 
.form-container p {
   color: red;
   font-weight: 600;
 }
 
 .message {
   color: green !important;
   // display: none;
 }
 
 @media (max-width: 600px) {
   form {
     width: 90%;
   }
 }
 
 @media (min-width: 768px) {
   form {
     width: 60%;
   }
 }
`;
 
export default FormWrapper;
