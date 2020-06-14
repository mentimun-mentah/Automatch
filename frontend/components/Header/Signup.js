import { useState, useCallback } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "../Transition";

import swal from "sweetalert";
import validator from "validator";
import cx from "classnames";
import style from "./Header.module.css";
import axios from "../../store/axios-instance";

const formSignup = {
  username: { value: "", isValid: true, message: "" },
  email: { value: "", isValid: true, message: "" },
  password: { value: "", isValid: true, message: "" },
  confirm_password: { value: "", isValid: true, message: "" },
};

const Signin = (props) => {
  const [signup, setSignup] = useState(formSignup);
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    resetValidation();
    if (formIsValid()) {
      setLoading(true);
      const data = {
        username: signup.username.value,
        email: signup.email.value,
        password: signup.password.value,
        confirm_password: signup.confirm_password.value,
      };
      axios
        .post("/register", data)
        .then((res) => {
          setLoading(false);
          props.closed();
          swal({
            title: "Awesome!",
            text: "Check your email to activated your account.",
            icon: "success",
          });
          console.log("success", res.data);
        })
        .catch((err) => {
          console.log("error register", err.response);
          setLoading(false);
          const state = JSON.parse(JSON.stringify(signup));
          if (err.response && err.response.data) {
            for (let key in err.response.data) {
              if (state[key]) {
                state[key].value = state[key].value;
                state[key].isValid = false;
                state[key].message = err.response.data[key];
              }
            }
          }
          setSignup(state);
        });
    }
  };

  let buttonValid = true;
  for (let key in signup) {
    buttonValid = signup[key].isValid && buttonValid && signup[key].value && buttonValid;
  }

  const inputHandler = (event) => {
    const { name, value } = event.target;
    const data = {
      ...signup,
      [name]: {
        ...signup[name],
        value: value,
        isValid: true,
        message: "",
      },
    };
    setSignup(data);
  };

  const resetValidation = () => {
    const state = JSON.parse(JSON.stringify(signup));
    for (let key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        state[key].isValid = true;
        state[key].message = "";
      }
    }
    setSignup(state);
  };

  const formIsValid = () => {
    const username = { ...signup.username };
    const email = { ...signup.email };
    const password = { ...signup.password };
    const confirm_password = { ...signup.confirm_password };
    let isGood = true;

    if (validator.isEmpty(username.value)) {
      username.isValid = false;
      username.message = "Username can't be empty";
      isGood = false;
    }
    if (!validator.isEmail(email.value)) {
      email.isValid = false;
      email.message = "Email isn't valid";
      isGood = false;
    }
    if (!validator.isLength(password.value, { min: 6, max: undefined })) {
      password.isValid = false;
      password.message = "Password at least 6 characters";
      isGood = false;
    }
    if (validator.isEmpty(confirm_password.value)) {
      confirm_password.isValid = false;
      confirm_password.message = "Password can't be empty";
      isGood = false;
    }
    if (!validator.equals(confirm_password.value, password.value)) {
      confirm_password.isValid = false;
      confirm_password.message = "Password isn't matches";
      isGood = false;
    }

    if (!isGood) {
      setSignup({ username, email, password, confirm_password });
    }

    return isGood;
  };

  const switchToSignin = useCallback(() => {
    props.viewed();
    resetValidation();
  }, [props, resetValidation]);

  const { username, email, password, confirm_password } = signup;
  const usernameInvalid = cx({ "is-invalid": !username.isValid });
  const emailInvalid = cx({ "is-invalid": !email.isValid });
  const passwordInvalid = cx({ "is-invalid": !password.isValid });
  const confirmInvalid = cx({ "is-invalid": !confirm_password.isValid });

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h2 className={`text-center ${style.ff_yeseva}`}>Welcome Recruiters.</h2>
            <p className="text-center text-muted lh-15">
              <small>
                Register as company to start Recruiting hundred of workers more easier, faster and
                more accurate.
              </small>
            </p>
          </Col>
        </Row>

        <Col className="mx-auto mt-1">
          <Form onSubmit={submitHandler}>
            <Form.Row>
              <Row className="row-cols-2">
                <Form.Group as={Col}>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={inputHandler}
                    className={usernameInvalid}
                    value={username.value}
                  />
                  {!username.isValid && (
                    <small className="form-text text-muted mt-0 mb-n2">{username.message}</small>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={inputHandler}
                    className={emailInvalid}
                    value={email.value}
                  />
                  {!email.isValid && (
                    <small className="form-text text-muted mt-0 mb-n2">{email.message}</small>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={inputHandler}
                    className={passwordInvalid}
                    value={password.value}
                  />
                  {!password.isValid && (
                    <small className="form-text text-muted mt-0 mb-n2">{password.message}</small>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    onChange={inputHandler}
                    className={confirmInvalid}
                    value={confirm_password.value}
                  />
                  {!confirm_password.isValid && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {confirm_password.message}
                    </small>
                  )}
                </Form.Group>
              </Row>
              <Button
                block
                variants="primary"
                type="submit"
                className="mt-3 mb-3"
                disabled={!buttonValid}
              >
                Register{" "}
                {loading && <Spinner as="span" animation="border" size="sm" aria-hidden="true" />}
              </Button>
            </Form.Row>
          </Form>
        </Col>

        <Row className="justify-content-md-center">
          <Col>
            <p className="text-center text-muted lh-15">
              <small>
                To make Automatch work, we log user data and share it with service providers. Click{" "}
              </small>
              <small>
                <span className={`${`text-info`} ${style.hov_pointer} `} onClick={switchToSignin}>
                  {" "}
                  “Sign in”{" "}
                </span>
              </small>
              <small>above to accept Automatch’s Terms of Service &amp; Privacy Policy.</small>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Signin;
