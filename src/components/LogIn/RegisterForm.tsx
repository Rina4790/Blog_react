import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const RegisterForm = () => {
  return (
    <>
      <Input type="text" text="User name" value="" onChange={() => {}} />
      <Input type="email" text="Email" value="" onChange={() => {}} />
      <Input type="password" text="Password" value="" onChange={() => {}} />
      <Input
        type="password"
        text="Confirm password"
        value=""
        onChange={() => {}}
      />
      <Button onClick={() => {}}>Registration</Button>
      <p>If you have account, you can login</p>
    </>
  );
};
