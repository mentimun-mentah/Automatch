import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Modal,
  NavDropdown,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { BackdropModal } from "../Transition";

import Link from "next/link";
import Signup from "./Signup";
import Signin from "./Signin";

const Header = React.memo(() => {
  const router = useRouter();

  const [isTop, setIsTop] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [changeView, setChangeView] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const inTop = window.scrollY < 50;
      if (inTop !== isTop) {
        setIsTop(inTop);
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        setIsTop(true);
      });
    };
  }, [isTop]);

  const logoutHandler = () => {
    router.replace("/", "/");
  };

  const showModalHandler = () => {
    document.body.classList.add("modal-open");
    setModalShow(true);
  };

  const closeModalHandler = () => {
    document.body.classList.remove("modal-open");
    setModalShow(false);
  };

  const changeViewHandler = () => {
    setChangeView(!changeView);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={isTop ? "navbar-default" : "navbar-scrolled"}
      >
        <Container>
          <Navbar.Brand>
            <Link href="/" as="/">
              <img
                src={
                  isTop
                    ? "/static/images/logo-navbar-white.png"
                    : "/static/images/logo-navbar.png"
                }
                width="160"
                height="40"
                className="d-inline-block align-top"
                alt="Automatch Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Link href="/" as="/">
                <Nav.Link as="a" className="hov_pointer mr-sm-3">
                  Home
                </Nav.Link>
              </Link>
              <Link href="/#features" as="/#features">
                <Nav.Link as="a" className="hov_pointer mr-sm-3">
                  Features
                </Nav.Link>
              </Link>
              <Link href="/#pricing" as="/#pricing">
                <Nav.Link as="a" className="hov_pointer mr-sm-3">
                  Pricing
                </Nav.Link>
              </Link>
              <Link href="/#workflows" as="/#workflows">
                <Nav.Link as="a" className="hov_pointer mr-sm-3">
                  Workflows
                </Nav.Link>
              </Link>
              <Form inline>
                <Button
                  variant="primary"
                  className="rounded-pill mr-sm-3"
                  onClick={showModalHandler}
                >
                  Sign up
                </Button>
              </Form>
              <NavDropdown
                alignRight
                title={
                  <img
                    src="/static/images/default.png"
                    width="40"
                    height="40"
                    className="rounded-circle"
                    alt="avatar"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Link href="/profile" as="/profile">
                  <NavDropdown.Item className="text-hvr-none" as="span">
                    Profile
                  </NavDropdown.Item>
                </Link>
                <Link href="/jobs" as="/jobs">
                  <NavDropdown.Item className="text-hvr-none" as="span">
                    Job List
                  </NavDropdown.Item>
                </Link>
                <Link href="/logout">
                  <NavDropdown.Item
                    className="text-hvr-none"
                    as="span"
                    onClick={logoutHandler}
                  >
                    Logout
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AnimatePresence exitBeforeEnter>
        {modalShow ? (
          <motion.div
            className="modal"
            style={{ display: "block" }}
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="bar top"></div>
                <div className="bar right delay1"></div>
                <div className="bar bottom delay2"></div>
                <div className="bar left"></div>
                <Modal.Header
                  className="border-0 pb-0 ml-auto"
                  closeButton
                  onClick={closeModalHandler}
                ></Modal.Header>
                <div className="col-md-8 mx-auto">
                  <Modal.Body>
                    <AnimatePresence exitBeforeEnter key={changeView}>
                      {changeView ? (
                        <Signin viewed={changeViewHandler} view={changeView} />
                      ) : (
                        <Signup viewed={changeViewHandler} view={changeView} />
                      )}
                    </AnimatePresence>
                  </Modal.Body>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {modalShow ? (
          <motion.div
            className="modal-backdrop fade show"
            initial="initial"
            animate="in"
            exit="out"
            variants={BackdropModal}
          ></motion.div>
        ) : null}
      </AnimatePresence>

      <style jsx>{`
        :global(.navbar-default) {
          transition: 500ms ease;
          background: #021927;
        }
        :global(.navbar-default .nav-link) {
          color: white !important;
        }
        :global(.navbar-scrolled) {
          transition: 500ms ease;
          background: white;
          box-shadow: rgb(76, 76, 76) 0px 1px 2px;
        }
        :global(.navbar-scrolled .nav-link) {
          color: black !important;
        }
        .modal-content {
          border: none !important;
          border-radius: 0px !important;
          overflow: hidden !important;
        }
        :global(.dropdown-toggle::after) {
          display: none !important;
        }
        :global(.dropdown-menu) {
          padding: 0.5rem !important;
        }
        :global(.nav-item
            .show
            .dropdown-menu
            .dropdown-item, .dropdown-item:hover) {
          background-color: #113951;
          color: #ffffff;
          cursor: pointer;
        }
        .bar {
          position: absolute;
          width: 50px;
          height: 5px;
          background: #23ace6;
          transition: all 2s linear;
          -webkit-animation-duration: 2s;
          animation-duration: 2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
        .bar.delay1 {
          animation-delay: 1.4s;
          -webkit-animation-delay: 1.4s;
        }
        .bar.delay2 {
          animation-delay: 1.1s;
          -webkit-animation-delay: 1.1s;
        }
        .top {
          top: 0px;
          left: -5px;
        }
        .right {
          top: 18px;
          right: -23px;
          transform: rotate(90deg);
        }
        .bottom {
          bottom: 0px;
          left: -5px;
        }
        .left {
          top: 180px;
          left: -23px;
          transform: rotate(90deg);
        }
        @-webkit-keyframes h-move {
          0% {
            left: -50px;
          }
          100% {
            left: 100%;
          }
        }
        @keyframes h-move {
          0% {
            left: -50px;
          }
          100% {
            left: 100%;
          }
        }
        .top,
        .bottom {
          -webkit-animation-name: h-move;
          animation-name: h-move;
        }
        @-webkit-keyframes v-move {
          0% {
            top: -30px;
          }
          100% {
            top: 110%;
          }
        }
        @keyframes v-move {
          0% {
            top: -30px;
          }
          100% {
            top: 110%;
          }
        }
        .right,
        .left {
          -webkit-animation-name: v-move;
          animation-name: v-move;
        }
      `}</style>
    </>
  );
});

export default Header;
