import { useEffect, useState } from "react";
import "./logincontent.scss";
import { login, LoginProps } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginContent2() {
  const [form, setForm] = useState<LoginProps>({
    login: "",
    password: "",
  });
  const ERROR_MESSAGE = "Check again, there's something wrong";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, loading, error } = useSelector((state: any) => state.login);

  useEffect(() => {
    if ((userInfo != null || userInfo === "") && userInfo !== "error") {
      navigate("/home");
    }
    if (error != null && userInfo === "error") {
      const errorMessage = document.getElementById("error") as HTMLInputElement;
      errorMessage.innerHTML = ERROR_MESSAGE;
    }
  }, [userInfo, navigate]);

  const handleSubmitClick = () => {
    console.log("Logging in with", form);

    dispatch(login(form));
  };
  return (
    <div className="containerLogin">
      <div className="page">
        <div className="container2">
          <div className="left">
            <div className="login">Login</div>
            <div className="eula">
              By logging in you agree to the ridiculously long terms that you
              didn't bother to read
            </div>
          </div>
          <div className="right">
            <div className="form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form_email"
                onChange={(e) => {
                  setForm({
                    ...form,
                    login: e.target.value,
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
