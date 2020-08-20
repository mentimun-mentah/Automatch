import { useState } from "react";
import { Col } from "react-bootstrap";

const pricingState = [
  {
    image: "/static/images/pricing-image/free.png",
    title: "Free Forever",
    price: "0",
    job: "2 Job",
    profile: "5 Profile",
    bg: null,
    bestValue: false,
  },
  {
    image: "/static/images/pricing-image/growth.png",
    title: "Growth Hacker",
    price: "80.000",
    job: "8 Job",
    profile: "10 Profile",
    bg: "bg-salmon",
    bestValue: false,
  },
  {
    image: "/static/images/pricing-image/business.png",
    title: "Business",
    price: "150.000",
    job: "10 Job",
    profile: "15 Profile",
    bg: "bg-green",
    bestValue: true,
  },
  {
    image: "/static/images/pricing-image/enterprise.png",
    title: "Enterprise",
    price: "350.000",
    job: "20 Job",
    profile: "30 Profile",
    bg: "bg-blue",
    bestValue: false,
  },
  {
    image: "/static/images/pricing-image/premium.png",
    title: "Premium",
    price: "500.000",
    job: "Access",
    profile: "Unlimited",
    bg: "bg-orange",
    bestValue: false,
  },
];

const Pricing = () => {
  const pricing = useState(pricingState)[0];
  return pricing.map((priceList) => (
    <Col key={priceList.title} className="mb-3">
      <div className={"card text-center rounded shadow " + priceList.bg}>
        <div className={priceList.bestValue ? "card-body card-price" : "card-body"}>
          {priceList.bestValue ? <div className="ribbon">Best Value</div> : null}
          <img src={priceList.image} width="45" height="38" className="rounded mx-auto d-block" alt={priceList.title} />
          <h5 className="card-title font-weight-bold text-center mt-3 text-blue-dark">{priceList.title}</h5>
          <p className="card-text font-weight-bold text-blue-dark h4">IDR {priceList.price}</p>
          <p className="card-text">per month</p>
          <hr />
          <p className="card-text mb-0">{priceList.job}</p>
          <p className="card-text">{priceList.profile}</p>
          <a href="#" className="btn btn-hover btn-seconddark rounded-pill" onClick={(e) => e.preventDefault()}>
            Subscribe
          </a>
        </div>
      </div>
      <style jsx>{`
        .card-price {
          overflow: hidden;
          position: relative;
        }
        .ribbon {
          width: 160px;
          height: 25px;
          font-size: 12px;
          text-align: center;
          color: #fff;
          font-weight: bold;
          box-shadow: 0px 2px 3px rgba(136, 136, 136, 0.25);
          background: #4dbe3b;
          transform: rotate(45deg);
          position: absolute;
          right: -50px;
          top: 20px;
          padding-top: 3px;
        }
        .text-blue-dark {
          color: #173f53;
        }
        .bg-salmon {
          background-color: #ffe7e5 !important;
        }
        .bg-green {
          background-color: #ddf1e6 !important;
        }
        .bg-blue {
          background-color: #d9e5ef !important;
        }
        .bg-orange {
          background-color: #fff1de !important;
        }
        .btn-seconddark {
          border: 1px solid #173f53 !important;
          color: #173f53 !important;
        }
        .btn-hover:hover {
          background-color: #0065ff;
          color: #ffffff !important;
        }
      `}</style>
    </Col>
  ));
};

export default Pricing;
