import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { isAuth } from "../../hoc/withAuth";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import axios from "../../store/axios-instance";
import validator from "validator";
import cx from "classnames";
import swal from "sweetalert";

const Profile = ({ image, imageHandler }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (user.company_name === null) {
    user.company_name = "";
  }
  if (user.company_site === null) {
    user.company_site = "";
  }
  if (user.position === null) {
    user.position = "";
  }
  const formUpdateProfile = {
    username: { value: user.username, isValid: true, message: "" },
    company_name: { value: user.company_name, isValid: true, message: "" },
    company_site: { value: user.company_site, isValid: true, message: "" },
    position: { value: user.position, isValid: true, message: "" },
  };

  const [profile, setProfile] = useState(formUpdateProfile);

  const access_token = useSelector((state) => state.auth.access_token);
  const refresh_token = useSelector((state) => state.auth.refresh_token);

  const onGetUser = (access_token) => dispatch(actions.getUser(access_token));
  const onCheckState = () => dispatch(actions.authCheckState());

  useEffect(() => {
    if (access_token === null || refresh_token === null || user === null) {
      onGetUser(isAuth());
      onCheckState();
    }
  }, [onGetUser, onCheckState]);

  const inputProfileHandler = (event) => {
    const { name, value } = event.target;
    const data = {
      ...profile,
      [name]: {
        ...profile[name],
        value: value,
        isValid: true,
        message: "",
      },
    };
    setProfile(data);
  };

  const saveProfileHandler = (event) => {
    event.preventDefault();
    resetValidation();
    if (profileIsValid) {
      const data = {
        username: profile.username.value,
        company_name: profile.company_name.value,
        company_site: profile.company_site.value,
        position: profile.position.value,
      };
      const headerCfg = {
        headers: { Authorization: `Bearer ${access_token}` },
      };
      axios
        .put("/update-profile", data, headerCfg)
        .then((res) => {
          const { message } = res.data;
          swal({
            title: "Yuhuu!",
            text: message,
            icon: "success",
            timer: 3000,
          });
          console.log("success save profile => ", res.data);
        })
        .catch((err) => {
          const state = JSON.parse(JSON.stringify(profile));
          if (err.response && err.response.data) {
            for (let key in err.response.data) {
              if (state[key]) {
                state[key].isValid = false;
                state[key].value = state[key].value;
                state[key].message = err.response.data[key];
              }
            }
          }
          setProfile(state);
          console.log("failed save profile => ", err);
        });
      console.log(data);
    }
  };

  const resetValidation = () => {
    const state = JSON.parse(JSON.stringify(profile));
    for (let key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        state[key].isValid = true;
        state[key].message = "";
      }
    }
    setProfile(state);
  };

  const profileIsValid = () => {
    const username = { ...profile.username };
    const company_name = { ...profile.company_name };
    const company_site = { ...profile.company_site };
    const position = { ...profile.position };
    let isGood = true;

    if (validator.isEmpty(username.value)) {
      username.isValid = false;
      username.message = "Username can't be empty";
      isGood = false;
    }
    if (validator.isEmpty(company_name.value)) {
      company_name.isValid = false;
      company_name.message = "Company name can't be empty";
      isGood = false;
    }
    if (validator.isEmpty(company_site.value)) {
      company_site.isValid = false;
      company_site.message = "Company site can't be empty";
      isGood = false;
    }
    if (!validator.isURL(company_site.value)) {
      company_site.isValid = false;
      company_site.message = "Company site isn't valid";
      isGood = false;
    }
    if (validator.isEmpty(position.value)) {
      position.isValid = false;
      position.message = "Position can't be empty";
      isGood = false;
    }
    if (!isGood) {
      setProfile({ username, company_name, company_site, position });
    }
    return isGood;
  };

  let avatar = "";
  if (image && image.includes("blob:")) {
    avatar = image;
  } else if (image) {
    avatar = `http://localhost:5000/static/avatars/${image}`;
  }

  const { username, company_name, company_site, position } = profile;
  const usernameInvalid = cx({ "is-invalid": !username.isValid });
  const cNameInvalid = cx({ "is-invalid": !company_name.isValid });
  const cSiteInvalid = cx({ "is-invalid": !company_site.isValid });
  const positionInvalid = cx({ "is-invalid": !position.isValid });
  return (
    <Container fluid>
      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card.Title>
            <h4>Profile Setting</h4>
          </Card.Title>
          <Card className="pt-4">
            <Card.Body className="pt-0">
              <img
                src={avatar}
                className="img-thumbnail rounded mx-auto d-block"
                alt="profile"
                width="130"
                height="130"
              />
              <div className="text-center">
                <button className="btn btn-primary btnrel rounded-pill">
                  <span>Change picture</span>
                  <input
                    className="upload"
                    type="file"
                    onChange={imageHandler}
                    accept=".jpg,.png,.jpeg"
                  />
                </button>
                <h5 className="title mt-2">{user.username}</h5>
                <p className="text-muted">{user.email}</p>
              </div>

              <Container className="pl-5 pr-5">
                <Row className="row-cols-2 mt-4">
                  <Form.Group as={Col}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      className={usernameInvalid}
                      onChange={inputProfileHandler}
                      value={username.value}
                    />
                    {!username.isValid && (
                      <small className="form-text text-muted mt-0 mb-n2">
                        {username.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      name="company_name"
                      className={cNameInvalid}
                      onChange={inputProfileHandler}
                      value={company_name.value}
                    />
                    {!company_name.isValid && (
                      <small className="form-text text-muted mt-0 mb-n2">
                        {company_name.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Position at Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Talent Manager"
                      name="position"
                      className={positionInvalid}
                      onChange={inputProfileHandler}
                      value={position.value}
                    />
                    {!position.isValid && (
                      <small className="form-text text-muted mt-0 mb-n2">
                        {position.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Company Site</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://www.company.com"
                      name="company_site"
                      className={cSiteInvalid}
                      onChange={inputProfileHandler}
                      value={company_site.value}
                    />
                    {!company_site.isValid && (
                      <small className="form-text text-muted mt-0 mb-n2">
                        {company_site.message}
                      </small>
                    )}
                  </Form.Group>
                </Row>
                <Button
                  variant="success"
                  className="float-right mt-2 mb-0"
                  onClick={saveProfileHandler}
                >
                  Save changes
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center mb-4">
        <Col md={8}>
          <Card.Title>
            <h4>Update Password</h4>
          </Card.Title>
          <Card className="pt-4">
            <Card.Body className="pt-0">
              <Container className="pl-5 pr-5">
                <Form.Group controlId="formGridCurrent">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Type your current password"
                  />
                </Form.Group>
                <Row className="row-cols-2 mt-4">
                  <Form.Group as={Col} controlId="formGridNew">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Type your new password"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridConfirm">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-type your new password"
                    />
                  </Form.Group>
                </Row>
                <Button variant="success" className="float-right mt-2 mb-0">
                  Save changes
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <style jsx>{`
        .btnrel {
          position: relative;
          cursor: pointer;
        }
        .upload {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0;
          margin: 0;
          cursor: pointer;
          opacity: 0;
        }
      `}</style>
    </Container>
  );
};

export default Profile;
