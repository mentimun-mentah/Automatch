const Jobs = ({ value, change, submit, clearLink, children }) => {
  return (
    <>
      <section className="container-fluid bg-color-top">
        <div className="row justify-content-md-center">
          <div className="col-lg-5 col-md-5 col-12">
            <div className="card border-0 bg-transparent text-center mt-5">
              <div className="card-body">
                <h2 className="font-weight-bold text-white">Job Link</h2>
                <form onSubmit={submit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control focus-none"
                      placeholder="Enter job link"
                      value={value}
                      onChange={change}
                    />
                    <div className="input-group-append" onClick={clearLink}>
                      <i className="far fa-times btn btn-outline-light btn-clear"></i>
                    </div>
                  </div>
                  <button
                    className="btn btn-submit submit-hvr rounded-pill btn-block"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">{children}</section>
      <style jsx>{`
        .bg-color-top {
          background-color: #113951;
        }
        .bg-tranparent {
          background-color: transparent;
        }
        .btn-submit {
          color: #fff !important;
          border-color: #fff !important;
          background-color: transparent !important;
        }
        .submit-hvr:hover {
          color: #fff !important;
          background-color: #195477 !important;
        }
        .text-blue-dark {
          color: #173f53;
        }
        .btn-seconddark {
          border: 1px solid #173f53;
          color: #173f53;
        }
        .btn-clear {
          color: #909090;
          border-top: 1px solid #ced4da;
          border-right: 1px solid #ced4da;
          border-bottom: 1px solid #ced4da;
          border-left: 0px solid;
          background-color: white;
          transition: all 0.2s;
          padding-left: 5px;
        }
        .btn-clear:hover {
          color: #dc3545;
          text-shadow: 0px 0px 5px #dc3545;
          transition: all 0.2s;
        }
        .focus-none {
          padding-right: 5px;
        }
        .focus-none:focus {
          color: #495057;
          background-color: #fff;
          border-color: #ced4da white #ced4da #ced4da;
          outline: 0;
          box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25);
        }
      `}</style>
    </>
  );
};

export default Jobs;
