import { LoginProps } from "../loginContent2/actions";
import { RegisterProps } from "./actions";

export const RegisterPropsToLoginProps = (registerProps: RegisterProps): LoginProps =>{
    return {
        login: registerProps.mail,
        password: registerProps.password
    };
}