import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderLayout from "../component/HeaderComponent/HeaderLayout";
import SidebarLayout from "../component/SidebarComponent/SidebarLayout";
import { StyledLayout } from "./GridLayout.styled";

const Layout = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const authToken = localStorage.getItem('token')
    if (!authToken) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [navigate])



  return (
    <StyledLayout>
      <SidebarLayout />

      <div id="content">
        <HeaderLayout />
        <Outlet />
      </div>
    </StyledLayout>
  );
};

export default Layout;
