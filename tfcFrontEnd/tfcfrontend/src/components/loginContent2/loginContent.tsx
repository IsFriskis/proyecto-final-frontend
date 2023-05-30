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
  const { userInfo, error } = useSelector((state: any) => state.login);

  useEffect(() => {
    if ((userInfo != null || userInfo === "") && userInfo !== "error") {
      navigate("/home");
      localStorage.setItem(
        "loginInfo",
        `${userInfo.mail},${userInfo.username}`
      );
    }
    if (error != null && userInfo === "error") {
      const errorMessage = document.getElementById("error") as HTMLInputElement;
      errorMessage.innerHTML = ERROR_MESSAGE;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo, navigate]);

  const handleSubmitClick = () => {
    dispatch(login(form));
  };
  return (
    <div className="containerLogin">
      <div className="page_login">
        <div className="container2_login">
          <div className="left_login">
            <div className="login_login">Login</div>
            <div className="eula_login">
              By logging in you agree to the ridiculously long terms that you
              didn't bother to read
            </div>
          </div>
          <div className="right_login">
            <div className="form_login_login">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form_email_login"
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
                className="form_password_login"
                onChange={(e) => {
                          setForm({
                            ...form,
                            password: e.target.value,
                          });
                        }
                      }
              />
              <input
                type="submit"
                id="submit_login"
                value="Submit"
                onClick={handleSubmitClick}
              />
              <span className="errorBox_login" id="error"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
