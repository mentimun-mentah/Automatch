import { Container, Col, Row, Table, Button } from "react-bootstrap";
import { savePDF } from "@progress/kendo-react-pdf";
import { Component } from "react";
import ReactDOM from "react-dom";

class Pdf extends Component {
  exportPDFWithMethod = () => {
    savePDF(ReactDOM.findDOMNode(this.container), {
      margin: 30,
      fileName: `Candidate report for ${this.props.job.company}`,
    });
  };

  renderDataCandidate = () => {
    const sortScore = this.props.applicant.slice(0);
    sortScore.sort((a, b) => {
      return b.score - a.score;
    });
    return sortScore.map((app, i) => {
      if (app.detail_score === null || app.detail_score === undefined) {
        <tr>
          <td colSpan="9">Calculate first!</td>
        </tr>;
      }
      if (app.detail_score) {
        const { name, detail_score, score } = app;
        return (
          <tr key={i}>
            <th>{i + 1}</th>
            <td>{name}</td>
            <td>{detail_score.current_position} %</td>
            <td>{detail_score.experience} %</td>
            <td>{detail_score.skill} %</td>
            <td>{detail_score.education} %</td>
            <td>{detail_score.honor} %</td>
            <td>{detail_score.license} %</td>
            <td>{score} %</td>
          </tr>
        );
      }
    });
  };

  render() {
    Date.prototype.getFormatDate = function () {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return (
        this.getDate() +
        " " +
        monthNames[this.getMonth()] +
        ", " +
        this.getFullYear()
      );
    };

    return (
      <>
        <Container
          className="mt-5 border-bottom w-80"
          ref={(container) => (this.container = container)}
        >
          <Row className="pt-3">
            <Col md={1} className="pl-0">
              <img src={this.props.job.image} width="80" height="80" />
            </Col>
            <Col className="pl-0" md={8}>
              <h3 className="mb-0">{this.props.job.company}</h3>
              <p className="mb-0">{this.props.job.title_job}</p>
              <p>{this.props.job.location}</p>
            </Col>
            <Col className="pr-0">
              <table className="table table-borderless table-sm mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Date</th>
                    <td>:</td>
                    <td>{new Date().getFormatDate()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Matcher</th>
                    <td>:</td>
                    <td>{this.props.user}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row>
            <Table responsive className="text-center mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>C. Possition</th>
                  <th>Experience</th>
                  <th>Skills</th>
                  <th>Education</th>
                  <th>Accomplish.</th>
                  <th>Licenses & Certif.</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{this.renderDataCandidate()}</tbody>
            </Table>
          </Row>
        </Container>
        <Container className="mt-5 pl-0">
          <Button
            variant="outline-dark"
            onClick={this.exportPDFWithMethod}
            className="rounded-0"
            block
          >
            Export Report
          </Button>
        </Container>
      </>
    );
  }
}

export default Pdf;
