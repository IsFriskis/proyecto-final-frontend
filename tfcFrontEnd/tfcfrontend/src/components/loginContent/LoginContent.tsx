import "./loginContent.scss";

export function LoginContent(){
  return (
    <>
        <div className="general">
          <div className="title">
            <h2>LOGIN</h2>
          </div>
          <div className="user">
            <div className="user__title">Username</div>
            <div className="user__input"><input placeholder="Username"></input></div>
            <div className="user__error">ERR_MESSAGE</div>
          </div>
          <div className="password">
            <div className="password__title">Password</div>
            <div className="password__input"><input placeholder="Password"></input></div>
            <div className="password__error">ERR_MESSAGE</div>
          </div>
          <div className="submit">
            <div className="submit__button"><button>Potatoe</button></div>
            <div className="submitText">
              <div className="forgotPassword">FORGOT PASSWROD</div>
            <div className="signUp">SIGNUP TEXT</div>
            </div>
            
          </div>
        </div>
        
    </>
  );
}