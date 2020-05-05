import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const scaleloader = () => {
  return (
    <div className="modal d-block ">
      <div className="modal-backdrop fade show"></div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div
          className="modal-content"
          style={{
            backgroundColor: "transparent",
            zIndex: "1060",
            border: "0px",
          }}
        >
          <div className="modal-body">
            <ScaleLoader css={override} height={100} width={10} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default scaleloader;
