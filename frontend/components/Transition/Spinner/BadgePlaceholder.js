const BadgePlaceholder = () => {
  return (
    <>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className="ph-col-2"></div>
            <div className="ph-col-3 mr-2"></div>
            <div className="col-1 mr-2"></div>
            <div className="ph-col-4 mr-2"></div>
            <div className="ph-col-2 mr-2"></div>
            <div className="col-1 mr-2"></div>
            <div className="ph-col-4 mr-2"></div>
            <div className="col-1 mr-2"></div>
            <div className="ph-col-2 mr-2"></div>
            <div className="col-3 mr-2"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ph-item {
          direction: ltr;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          overflow: hidden;
          margin-bottom: 0px;
          background-color: #fff;
          border: 0px solid;
        }
        .ph-item > * {
          padding-left: 10px;
        }
        .ph-row div {
          height: 20px;
          margin-bottom: 5px;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default BadgePlaceholder;
