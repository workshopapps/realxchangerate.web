import React, { useEffect, useState } from "react";
import { LoginSection } from "./Components/loginPageStyle";
import viewIcon from "../../assets/icons/password_view.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/actions/userActions";
import { useNavigate, NavLink } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [passwordState, setPasswordState] = useState("password");

  const { email, password } = formState;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loginStatus, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (loginStatus === "success") {
      navigate("/admin");
    } else {
      console.log(error);
      if (error && loginStatus === "failed") {
        toast.error(error.detail, {
          pauseOnFocusLoss: false,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  }, [loginStatus, error, navigate]);

  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      alert("please enter your email and password");
    }
    dispatch(loginUser({ email, password }));
    // setLoading(false);
  };

  const handleViewPassword = () => {
    if (passwordState === "text") {
      setPasswordState("password");
    } else {
      setPasswordState("text");
    }
  };

  return (
    <LoginSection>
      <div className="login-modal">
        <h2>
          Street<span>Rates</span>{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="login-form-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="login-form-field">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordState}
                name="password"
                id="password"
                value={password}
                onChange={handleOnChange}
              />
              <div className="view-icon" onClick={handleViewPassword}>
                <img src={viewIcon} alt="" />
              </div>
            </div>
          </div>
          <NavLink to="/admin/forgotpassword">
            <p>Forgot password?</p>
          </NavLink>

          <div className="login-pass-check">
            <input type="checkbox" name="verify" id="verify" />
            <label htmlFor="verify">Always keep me logged in</label>
          </div>
          {loginStatus === "loading" && (
            <CircularProgress sx={{ m: "0 auto" }} />
          )}
          <LoadingButton type="submit" onSubmit={handleSubmit}>
            Login
          </LoadingButton>
        </form>
        <div className="signup">
          <p>Don’t have an account?</p>
          <p className="signup-btn">Sign up</p>
        </div>
      </div>
    </LoginSection>
  );
};

export default LoginPage;
