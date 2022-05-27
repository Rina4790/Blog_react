import { NavLink, useHistory } from "react-router-dom";
import { LoginTitle } from "../LoginTitle/LoginTitle";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Container } from "../templates/Container/Container";
import styles from "./Login.module.css";
import { useCallback, useEffect, useState } from "react";
import { validationService } from "../../services/validation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { IState } from "../../redux/store";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state: IState) => state.authReducer.error);
  const history = useHistory();

  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  const onChangeEmail = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);

    const error = validationService.validateEmail(value);

    setErrors((errors) => ({ ...errors, email: error }));
  }, []);

  const onChangePassword = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    };

    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === "");

    if (isValid) {
      dispatch(login(email, password));
    }
  };

  const errorValues = error ? Object.values(error).flat() : "";

  return (
    <div className={styles.login}>
      <Container isImage={true}>
        <div className={styles.mainForm}>
          <div className={styles.title}>
            <LoginTitle />
          </div>

          <div className={styles.form}>
            <Input
              type="email"
              label="Email"
              onChange={onChangeEmail}
              value={email}
              error={errors.email}
            />
            <Input
              type="password"
              label="Password"
              onChange={onChangePassword}
              value={password}
              error={errors.password}
            />
            <p>{errorValues}</p>
            <Button text="Login" onClick={onClick} />
          </div>

          <p className={styles.info}>
            Forgot your password?{" "}
            <NavLink to="/reset-password">Reset password</NavLink>
          </p>
        </div>
      </Container>
    </div>
  );
};
