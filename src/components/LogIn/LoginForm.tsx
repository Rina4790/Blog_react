import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const LoginForm = () => {
  return (
    <div>
      <Input type="email" text="Email" value="" onChange={() => {}} />
      <Input type="password" text="Password" value="" onChange={() => {}} />
      <Button onClick={() => {}}>Login</Button>
      <p>Forgot your password? Reset password</p>
    </div>
  );
};
