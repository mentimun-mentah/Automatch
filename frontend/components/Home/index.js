import { Row, Col, NavLink, Table } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <h1 className="text-center text-white">
          Recruiting Workers is now Easier, Faster <br />
          and more Accurate
        </h1>
        <p className="text-center text-white">Sign up now to get started</p>
        <div className="text-center">
          <a className="btn btn-primary mr-sm-3 rounded-pill ml-auto text-white">
            Get Started
          </a>
        </div>
      </section>
      <section className="container">
        <Row className="justify-content-center">
          <Col md={7}>
            <div className="halign-center">
              <h2 className="font-weight-bold">What is Automatch ?</h2>
              <p className="text-justify">
                Imagine you are a recruiter with hundreds or even thousands of
                applicants data to screen and process. You may need to spend
                weeks or months just to filter & sort the best & most suitable
                candidates. Automatch comes to save you from those enormous &
                mundane tasks. You would just provide your Linked job post URLs
                and Automatch will manage them for you! Automatch will also
                automate the extracting & ranking process of candidates in just
                a few clicks!{" "}
              </p>
            </div>
          </Col>
          <Col md={3}>
            <img
              src="/static/images/about.png"
              className="img-fluid mx-auto d-block"
              alt="about"
            />
          </Col>
        </Row>
        <div id="features"></div>
      </section>

      <section className="container">
        <h2 className="font-weight-bold text-center">Features Automatch</h2>
        <p className="text-center mb-5">
          Explore all the Automatch features and feel the big impact
        </p>
        <Row className="row-cols-2">
          <Col className="p-4">
            <Row>
              <Col md={4}>
                <img
                  src="/static/images/features-image/ai.png"
                  alt="ai"
                  className="mx-auto d-block"
                />
              </Col>
              <Col>
                <h5 className="font-weight-bold text-left">
                  We use AI to understand your job description
                </h5>
                <p className="text-left">
                  Natural Language uses machine learning to reveal the structure
                  and meaning of text. You can extract information about
                  important keyword and concept of text.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="p-4">
            <Row>
              <Col md={4}>
                <img
                  src="/static/images/features-image/extract.png"
                  alt="extract"
                  className="mx-auto d-block"
                />
              </Col>
              <Col>
                <h5 className="font-weight-bold text-left">
                  Extract all data from the web
                </h5>
                <p className="text-left">
                  Turn any corner of the web into a useful source of data. Use
                  it for your company, data analytics, decision and much more.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="p-4">
            <Row>
              <Col md={4}>
                <img
                  src="/static/images/features-image/calculation.png"
                  alt="calculation"
                  className="mx-auto d-block"
                />
              </Col>
              <Col>
                <h5 className="font-weight-bold text-left">
                  Automate calculation any data you provide
                </h5>
                <p className="text-left">
                  We use NumPy the most popular data science to make your
                  decision more accurate and reliable.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="p-4">
            <Row>
              <Col md={4}>
                <img
                  src="/static/images/features-image/export.png"
                  alt="export"
                  className="mx-auto d-block"
                />
              </Col>
              <Col>
                <h5 className="font-weight-bold text-left">
                  Export you report to pdf
                </h5>
                <p className="text-left">
                  Download scraped data you need as pdf and bring your report
                  anywhere and everywhere.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <div id="pricing"></div>
      </section>

      <section className="container">
        <h2 className="font-weight-bold text-center">Pricing Automatch</h2>
        <p className="text-center mb-5">
          Plans tailored for all business, built to scale with your needs
        </p>
        <Row className="row-cols-5">
          <Pricing />
        </Row>

        <div className="text-center mt-5">
          <NavLink
            href="#detail-pricing"
            className="font-weight-bold text-teal text-hvr-none"
          >
            View Detail pricing <i className="far fa-arrow-down text-teal"></i>
          </NavLink>
        </div>
        <div id="detail-pricing"></div>
      </section>

      <section className="container">
        <h2 className="font-weight-bold text-center mb-5">Detail Pricing</h2>
        <Table borderless>
          <thead>
            <tr className="text-center">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Free Forever</th>
              <th scope="col">Growth Hacker</th>
              <th scope="col">Business</th>
              <th scope="col">Enterprise</th>
              <th scope="col">Premium</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="table-teal">
              <td className="text-blue-dark text-left">
                Url Job{" "}
                <i
                  className="fas fa-question-circle"
                  data-multiline="true"
                  data-effect="float"
                  data-tip="You can save the result of<br /> scraping data from job<br /> portal depends on which<br /> subscription you are on"
                ></i>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>2 Job</td>
              <td>8 Job</td>
              <td>10 Job</td>
              <td>20 Job</td>
              <td>Access Unlimited</td>
            </tr>
            <tr>
              <td className="text-blue-dark text-left">
                Url Profile{" "}
                <i
                  className="fas fa-question-circle"
                  data-multiline="true"
                  data-effect="float"
                  data-tip="You can scraping data from <br/>linkedin profile applicant it<br/> depends on which<br/> subscription you are on"
                ></i>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>5 Profile</td>
              <td>10 Profile</td>
              <td>15 Profile</td>
              <td>30 Profile</td>
              <td>Accces Unlimited</td>
            </tr>
            <tr className="table-teal">
              <td className="text-blue-dark text-left">Report To Pdf</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <i className="far fa-times"></i>
              </td>
              <td>
                <i className="far fa-times"></i>
              </td>
              <td>
                <i className="far fa-times"></i>
              </td>
              <td>
                <i className="far fa-check"></i>
              </td>
              <td>
                <i className="far fa-check"></i>
              </td>
            </tr>
            <tr>
              <td className="text-blue-dark text-left">Email Notification</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <i className="far fa-check"></i>
              </td>
              <td>
                <i className="far fa-check"></i>
              </td>
              <td>
                <i className="far fa-check"></i>
              </td>
              <td>
                <i className="far fa-check"></i>
              </td>
              <td>
                <i className="far fa-check"></i>
              </td>
            </tr>
            <tr className="table-teal">
              <td className="text-blue-dark text-left">Support</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Community</td>
              <td>Email</td>
              <td>Email</td>
              <td>Email</td>
              <td>Priority chat via WA</td>
            </tr>
          </tbody>
        </Table>
        <div id="workflows"></div>
      </section>

      <section className="container">
        <h2 className="font-weight-bold text-center">Workflow Automatch</h2>
        <p className="text-center">
          With effortless you can use our service, only just few step
        </p>
        <Row>
          <Col md={12}>
            <div className="main-timeline5">
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">1</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Input url job</h3>
                  <p className="description">
                    Enter the url job that you post from Linkedin or any job
                    portal and we scrape all information you need
                  </p>
                </div>
              </div>

              <div className="t1 timeline">
                <div className="timeline-icon">
                  <span className="year">2</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Input profile Linkedin</h3>
                  <p className="description">
                    Enter url profile from your applicant and we scrape any data
                    such as Name, Image, Experience, Education, Licenses,
                    Skills, Accomplishments, Language
                  </p>
                </div>
              </div>

              <div className="t2 timeline">
                <div className="timeline-icon">
                  <span className="year">3</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Match applicant with job desk</h3>
                  <p className="description">
                    Automatch will calculation and ranking your candidates
                    according to the job desk
                  </p>
                </div>
              </div>

              <div className="t3 timeline">
                <div className="timeline-icon">
                  <span className="year">4</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Save to our cloud</h3>
                  <p className="description">
                    You can see history from our website and export history to
                    pdf if you premium member
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="bg-color text-white">
        <h2 className="font-weight-bold text-center">Ready to get started?</h2>
        <p className="text-center">
          Automatch gives you a simple way to recruiting your applicants.
        </p>
        <div className="text-center">
          <a className="btn btn-trp hvr mr-sm-3 rounded-pill ml-auto">
            Try it free
          </a>
        </div>
      </section>

      <ReactTooltip effect="solid" uuid="mytt" />

      <style jsx>
        {`
          .hero-section {
            margin-top: 4rem;
            background-image: url("/static/images/dot.png");
            background-repeat: repeat-x;
          }
          .halign-center {
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 100%;
          }
          :global(.text-teal) {
            color: #1cb9ce !important;
          }
          .text-hvr-none:hover {
            color: #1cb9ce !important;
            text-decoration: none;
          }
          .table-teal {
            background-color: #f2fafb !important;
          }

          .main-timeline5 {
            overflow: hidden;
            position: relative;
          }
          .main-timeline5 .timeline {
            position: relative;
          }
          .main-timeline5 .t1 {
            margin-top: -89px;
          }
          .main-timeline5 .t2 {
            margin-top: -77px;
          }
          .main-timeline5 .t3 {
            margin-top: -53px;
          }
          .main-timeline5 .timeline:first-child {
            margin-top: 0;
          }
          .main-timeline5 .timeline-icon,
          .main-timeline5 .year {
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
          .main-timeline5 .timeline:after,
          .main-timeline5 .timeline:before {
            content: "";
            display: block;
            width: 100%;
            clear: both;
          }
          .main-timeline5 .timeline:before {
            content: "";
            width: 100%;
            box-shadow: -8px 0 5px -5px rgba(0, 0, 0, 0.5) inset;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
          }
          .main-timeline5 .timeline-icon {
            width: 210px;
            height: 210px;
            border-radius: 50%;
            border: 25px solid transparent;
            border-top-color: #23ace6;
            border-right-color: #23ace6;
            z-index: 1;
            transform: rotate(45deg);
          }
          .main-timeline5 .year {
            display: block;
            width: 110px;
            height: 110px;
            line-height: 110px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
            font-size: 30px;
            font-weight: 700;
            color: #23ace6;
            text-align: center;
            transform: rotate(-45deg);
          }
          .main-timeline5 .timeline-content {
            width: 35%;
            float: right;
            background: #23ace6;
            padding: 30px 20px;
            margin: 48px 0;
            z-index: 1;
            position: relative;
          }
          .main-timeline5 .timeline-content:before {
            content: "";
            width: 20%;
            height: 15px;
            background: #23ace6;
            position: absolute;
            top: 50%;
            left: -20%;
            z-index: -1;
            transform: translateY(-50%);
          }
          .main-timeline5 .title {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            margin: 0 0 10px;
          }
          .main-timeline5 .description {
            font-size: 16px;
            color: #fff;
            line-height: 24px;
            margin: 0;
          }
          .main-timeline5 .timeline:nth-child(2n):before {
            box-shadow: 8px 0 5px -5px rgba(0, 0, 0, 0.5) inset;
          }
          .main-timeline5 .timeline:nth-child(2n) .timeline-icon {
            transform: rotate(-135deg);
            border-top-color: #1d91c2;
            border-right-color: #1d91c2;
          }
          .main-timeline5 .timeline:nth-child(2n) .year {
            transform: rotate(135deg);
            color: #1d91c2;
          }
          .main-timeline5 .timeline:nth-child(2n) .timeline-content {
            float: left;
          }
          .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
            left: auto;
            right: -20%;
          }
          .main-timeline5 .timeline:nth-child(2n) .timeline-content,
          .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
            background: #1d91c2;
          }
          .main-timeline5 .timeline:nth-child(3n) .timeline-icon {
            border-top-color: #167096;
            border-right-color: #167096;
          }
          .main-timeline5 .timeline:nth-child(3n) .year {
            color: #167096;
          }
          .main-timeline5 .timeline:nth-child(3n) .timeline-content,
          .main-timeline5 .timeline:nth-child(3n) .timeline-content:before {
            background: #167096;
          }
          .main-timeline5 .timeline:nth-child(4n) .timeline-icon {
            border-top-color: #105572;
            border-right-color: #105572;
          }
          .main-timeline5 .timeline:nth-child(4n) .year {
            color: #105572;
          }
          .main-timeline5 .timeline:nth-child(4n) .timeline-content,
          .main-timeline5 .timeline:nth-child(4n) .timeline-content:before {
            background: #105572;
          }
          @media only screen and (max-width: 1199px) {
            .main-timeline5 .timeline {
              margin-top: -103px;
            }
            .main-timeline5 .timeline-content:before {
              left: -18%;
            }
            .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
              right: -18%;
            }
          }
          @media only screen and (max-width: 990px) {
            .main-timeline5 .timeline {
              margin-top: -127px;
            }
            .main-timeline5 .timeline-content:before {
              left: -2%;
            }
            .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
              right: -2%;
            }
          }
          @media only screen and (max-width: 767px) {
            .main-timeline5 .timeline {
              margin-top: 0;
              overflow: hidden;
            }
            .main-timeline5 .timeline:before,
            .main-timeline5 .timeline:nth-child(2n):before {
              box-shadow: none;
            }
            .main-timeline5 .timeline-icon,
            .main-timeline5 .timeline:nth-child(2n) .timeline-icon {
              margin-top: -30px;
              margin-bottom: 20px;
              position: relative;
              transform: rotate(135deg);
            }
            .main-timeline5 .timeline:nth-child(2n) .year,
            .main-timeline5 .year {
              transform: rotate(-135deg);
            }
            .main-timeline5 .timeline-content,
            .main-timeline5 .timeline:nth-child(2n) .timeline-content {
              width: 100%;
              float: none;
              border-radius: 0 0 20px 20px;
              text-align: center;
              padding: 25px 20px;
              margin: 0 auto;
            }
            .main-timeline5 .timeline-content:before,
            .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
              width: 15px;
              height: 25px;
              position: absolute;
              top: -22px;
              left: 50%;
              z-index: -1;
              transform: translate(-50%, 0);
            }
          }
          .bg-color {
            background-image: radial-gradient(
              ellipse at top,
              #1086ce -60%,
              #0c6398 55%
            ) !important;
          }
          .btn-trp {
            color: #fff !important;
            background-color: transparent !important;
            border-color: #fff !important;
          }
          .hvr:hover {
            color: #000000 !important;
            background-color: #fff !important;
          }
        `}
      </style>
    </>
  );
};

export default Home;

