const EmptyCard = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-12">
        <div
          className="card shadow text-center pt-5 pb-5"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="card-body">
            <img
              src="/static/images/job-seeking.png"
              width="120"
              className="rounded mx-auto d-block mb-3"
              alt="job seeking"
            />
            <p className="font-weight-bold">Sorry we can't find the Job.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;

