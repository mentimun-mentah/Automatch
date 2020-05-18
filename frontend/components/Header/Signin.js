import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "../Transition";

import Router from "next/router";
import cookie from "nookies";
import swal from "sweetalert";
import cx from "classnames";
import validator from "validator";
import style from "./Header.module.css";
import axios from "../../store/axios-instance";

const formSignin = {
  email: { value: "", isValid: true, message: "" },
  password: { value: "", isValid: true, message: "" },
};

const Signin = (props) => {
  const [signin, setSigin] = useState(formSignin);
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    resetValidation();
    if (formIsValid()) {
      setLoading(true);
      const data = {
        email: signin.email.value,
        password: signin.password.value,
      };
      axios
        .post("/login", data)
        .then((res) => {
          props.closed();
          setLoading(false);
          const { access_token, refresh_token, username } = res.data;
          cookie.set(null, "access_token", access_token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          cookie.set(null, "refresh_token", refresh_token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          swal({
            icon: "success",
            title: `Welcome ${username}`,
            timer: 3000,
          }).then(() => {
            Router.reload("/");
          });
        })
        .catch((err) => {
          setLoading(false);
          const state = JSON.parse(JSON.stringify(signin));
          if (err.response && err.response.data) {
            for (let key in err.response.data) {
              if (state[key]) {
                state[key].isValid = false;
                state[key].value = state[key].value;
                state[key].message = err.response.data[key];
              }
            }
          }
          if (err.response && err.response.data.message) {
            state.email.isValid = true;
            state.email.value = state.email.value;
            state.password.isValid = false;
            state.password.value = state.password.value;
            state.password.message = err.response.data.message;
          }
          setSigin(state);
        });
    }
  };

  let buttonValid = true;
  for (let key in signin) {
    buttonValid = signin[key].isValid && buttonValid && signin[key].value && buttonValid;
  }

  const inputHandler = (event) => {
    const { name, value } = event.target;
    const data = {
      ...signin,
      [name]: {
        ...signin[name],
        value: value,
        isValid: true,
        message: null,
      },
    };
    setSigin(data);
  };

  const resetValidation = () => {
    const state = JSON.parse(JSON.stringify(signin));
    for (let key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        (state[key].isValid = true), (state[key].message = "");
      }
    }
    setSigin(state);
  };

  const formIsValid = () => {
    const email = { ...signin.email };
    const password = { ...signin.password };
    let isGood = true;

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

    if (!isGood) {
      setSigin({ email, password });
    }
    return isGood;
  };

  const switchToSignup = () => {
    props.viewed();
    resetValidation();
  };

  const { email, password } = signin;
  const emailInvalid = cx({ "is-invalid": !email.isValid });
  const passwordInvalid = cx({ "is-invalid": !password.isValid });

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h2 className={`${`text-center`} ${style.ff_yeseva}`}>Welcome Recruiters.</h2>
            <p className="text-center text-muted lh-15">
              <small>Sign in to start Recruiting hundred of workers more easier, faster and more accurate.</small>
            </p>
          </Col>
        </Row>

        <Col className="mx-auto mt-1">
          <Form onSubmit={submitHandler}>
            <Form.Group as={Row}>
              <Form.Label column sm="4">
                Email Address
              </Form.Label>
              <Col sm="8">
                <Form.Control className={emailInvalid} type="email" name="email" placeholder="Email Address" onChange={inputHandler} />
                {email.message && <small className="form-text text-muted mt-0 mb-n2">{email.message}</small>}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4">
                Password
              </Form.Label>
              <Col sm="8">
                <Form.Control className={passwordInvalid} type="password" name="password" placeholder="Password" onChange={inputHandler} />
                {password.message && <small className="form-text text-muted mt-0 mb-n2">{password.message}</small>}
              </Col>
            </Form.Group>
            <Button type="submit" variant="primary" block className="mt-3 mb-3" disabled={!buttonValid}>
              Login {loading && <Spinner as="span" animation="border" size="sm" aria-hidden="true" />}
            </Button>
          </Form>
        </Col>

        <Row className="justify-content-md-center">
          <Col>
            <p className="text-center text-muted lh-15">
              <small>To make Automatch work, we log user data and share it with service providers. Click </small>
              <small>
                <span className={`${`text-info`} ${style.hov_pointer} `} onClick={switchToSignup}>
                  {" "}
                  “Sign Up”{" "}
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
