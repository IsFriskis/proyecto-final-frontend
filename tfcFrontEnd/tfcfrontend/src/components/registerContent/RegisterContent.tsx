import { useEffect, useState } from "react";
import "./registerContent.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterProps, register } from "./actions";
import { LoginProps, login } from "../loginContent2/actions";
import { RegisterPropsToLoginProps } from "./transformRegisterToLoginProps";

export function RegisterContent() {
  const [form, setForm] = useState<RegisterProps>({
    username: "",
    mail: "",
    password: "",
  });
  const [formLogin, setFormLogin] = useState<LoginProps>({
    login: "",
    password: "",
  });
  const ERROR_MESSAGE = "Check again, there's something wrong";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerInfo, error, loading} = useSelector((state: any) => state.register);

  useEffect(() => {
    if ((registerInfo != null || registerInfo === "") && registerInfo !== "error") {
      navigate("/home");
      localStorage.setItem('loginInfo', `${form.mail},${form.username}`);
    }
    if (error != null && registerInfo === "error") {
      const errorMessage = document.getElementById("error") as HTMLInputElement;
      errorMessage.innerHTML = ERROR_MESSAGE;
    }
  }, [registerInfo, navigate]);

  const handleSubmitClick = () => {
    dispatch(register(form));
  };
  return (
    <div className="containerLogin">
      <div className="page">
        <div className="container2">
          <div className="left">
            <div className="login">Register</div>
            <div className="eula">
              The username is unique as the email address. The password must contain at least a capital letter and a number in it.
            </div>
          </div>
          <div className="right-register">
            <div className="form">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                id="username"
                className="form_email"
                onChange={(e) => {
                  setForm({
                    ...form,
                    username: e.target.value,
                  });
                  setFormLogin({
                    ...formLogin,
                    login: e.target.value,
                  });
                }}
              />
               <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form_email"
                onChange={(e) => {
                  setForm({
                    ...form,
                    mail: e.target.value,
                  });
                }}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form_password"
                onChange={(e) => {
                  setForm({
                    ...form,
                    password: e.target.value,
                  });
                  setFormLogin({
                    ...formLogin,
                    password: e.target.value,
                  });
                }}
              />
              <input
                type="submit"
                id="submit"
                value="Submit"
                onClick={handleSubmitClick}
              />
              <span className="errorBox" id="error"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
