import { useEffect, useCallback } from "react";
import { ListGroup, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import cron from "node-cron";
import Link from "next/link";

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(actions.logout());
  const refresh_token = useSelector((state) => state.auth.refresh_token);
  const access_token = useSelector((state) => state.auth.access_token);
  const onGetUser = (access_token) => dispatch(actions.getUser(access_token));
  const onTryAutoSignin = useCallback(() => dispatch(actions.authCheckState()), [dispatch]);

  const user = useSelector((state) => state.auth.user);

  const task = cron.schedule("10 * * * * *", () => {
    dispatch(actions.refreshToken(refresh_token));
  });
  if (refresh_token === undefined) {
    task.destroy();
  }
  if (refresh_token) {
    task.start();
  }

  useEffect(() => {
    onTryAutoSignin();
  }, [onTryAutoSignin]);

  useEffect(() => {
    if (access_token) {
      onGetUser(access_token);
    }
  }, [access_token]);

  const logoutHandler = () => {
    onLogout();
  };

  return (
    <div className="d-flex" id="wrapper">
      <div className="border-right col-2" id="sidebar-wrapper">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky pt-0 pl-3 pr-3">
            <div className="sidebar-heading">
              <img src="/static/images/logo-navbar-white.png" className="rounded d-block mx-auto" width="130" height="35" alt="automatch" />
            </div>
            <ListGroup variant="flush">
              <Link href="/" as="/">
                <ListGroup.Item action className="sidebar-item">
                  <i className="fas fa-arrow-left mr-2"></i> Home
                </ListGroup.Item>
              </Link>
              <Link href="/profile/dashboard" as="/profile/dashboard">
                <ListGroup.Item action className="sidebar-item">
                  <i className="fal fa-chart-pie-alt mr-2"></i> Dashboard
                </ListGroup.Item>
              </Link>
              <Link href="/profile/[user]" as={`/profile/${user.username}`}>
                <ListGroup.Item action className="sidebar-item">
                  <i className="fal fa-user mr-2"></i> User Profile
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
        </nav>
      </div>

      <div id="page-content-wrapper" className="main-dashboard">
        <Navbar expand="lg" className="border-bottom bg-white navbar-profile mb-3">
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title={user.username} alignRight>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {children}

        <footer className="footer bg-white">
          <div className="container-fluid nav-right text-center pt-3 pb-3 border-top">
            <span className="text-muted">Designed by </span>
            <a href="#!" className="text-dec-none text-info">
              Automatch.
            </a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        :global(button:focus) {
          outline: 1px solid transparent;
        }
        :global(.list-group-item-action:focus) {
          color: white;
        }
        #sidebar-wrapper {
          min-height: 100vh;
          margin-left: -15rem;
          background-color: #021927 !important;
        }

        #sidebar-wrapper .sidebar-heading {
          padding: 1.1rem 1.25rem;
          font-size: 1.2rem;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
        }

        #sidebar-wrapper .list-group {
          width: 15rem;
        }

        #page-content-wrapper {
          min-width: 100vw;
        }

        #wrapper.toggled #sidebar-wrapper {
          margin-left: 0;
        }

        :global(.sidebar-item) {
          background-color: transparent !important;
          color: #fff;
        }

        :global(.sidebar-item:hover) {
          background-color: #005b92 !important;
          color: #fff;
        }

        :global(.main-dashboard) {
          background-color: rgb(247, 247, 248);
        }

        :global(.navbar-profile) {
          padding: 1rem 1rem;
        }

        .sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 100; /* Behind the navbar */
          padding: 0; /* Height of navbar */
          box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
          background-color: #021927 !important;
        }

        .sidebar-sticky {
          position: relative;
          top: 0;
          height: calc(100vh - 48px);
          padding-top: 0.5rem;
          overflow-x: hidden;
          overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
        }

        @media (min-width: 768px) {
          #sidebar-wrapper {
            margin-left: 0;
          }

          #page-content-wrapper {
            min-width: 0;
            width: 100%;
          }

          #wrapper.toggled #sidebar-wrapper {
            margin-left: -15rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
