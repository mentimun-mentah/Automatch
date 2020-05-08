const ArrowCard = () => {
  return (
    <div className="col-auto text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span className="badge badge-pill">
          <i className="far fa-arrow-alt-circle-right fa-lg"></i>
        </span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
  );
};

export default ArrowCard;
