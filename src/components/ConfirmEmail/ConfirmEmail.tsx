import { useSelector } from "react-redux";
import { IState } from "../../redux/store";

export const ConfirmEmail = () => {
  const email = useSelector((state: IState) => state.authReducer.email);

  return (
    <div>
      <h1>Registration Confirmation</h1>
      <p>Please activate your account with {email}</p>
      <p>the activation link in the email</p>
      <p>Please, check your email</p>
    </div>
  );
};
