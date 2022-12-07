import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderLayout from "../component/HeaderComponent/HeaderLayout";
import SidebarLayout from "../component/SidebarComponent/SidebarLayout";
import { StyledLayout } from "./GridLayout.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (authToken) {
      // navigate('/')
      dispatch(getUser());
    } else {
      navigate("/admin/login");
      toast.error("Login required!");
    }
  }, [navigate, dispatch]);

  if (loginStatus === "failed") {
    navigate("/admin/login");
    toast.error("Login required!");
  }

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
