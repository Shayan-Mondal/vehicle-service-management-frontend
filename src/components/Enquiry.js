import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createEnquiryAction,
  updateEnquiryAction,
} from "../redux/EnquiryReducer";

export function Enquiry() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formService = useRef();
  const state = useSelector((state) => state);

  const [user_id, setUserid] = useState(state.enquiry.refenq.user_id);
  const [enquiry_desc, setEnquiry_desc] = useState(
    state.enquiry.refenq.enquiry_desc
  );
  const [admin_response, setAdmin_Response] = useState(
    state.enquiry.refenq.admin_response
  );

  const [successOperation, setSuccessOperation] = useState(false);
  const [unsuccessoperation, setUnSuccessOperation] = useState(false);
  //const updateUserId = (e) => setUserid(e.target.value);
  const updateEnquiry_desc = (e) => setEnquiry_desc(e.target.value);
  const updateAdminResponse = (e) => setAdmin_Response(e.target.value);

  const addEnquiry = (e) => {
    if (formService.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formService.current.classList.add("was-validated");
      setUnSuccessOperation(true);
      setTimeout(() => {
        setUnSuccessOperation(false);
      }, 5000);
    } else {
      dispatch(
        createEnquiryAction({
          enquiry_desc,
          user_details: {
            userId: 1,
          },
        })
      );

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 1000);

      history.push("/enquirylist");

      //setUserid("");
      setEnquiry_desc("");
    }
  };

  const updateEnquiry = () => {
    dispatch(
      updateEnquiryAction({
        enquiry_id: state.enquiry.refenq.enquiry_id,
        admin_response,
        enquiry_desc,
        user_details: {
          userId: 1,
        },
      })
    );
    history.push("/enquirylist");
    setAdmin_Response("");
    setEnquiry_desc("");
  };
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">
          {state.enquiry.refenq.enquiry_id
            ? "Update enquiry"
            : "Create Enquiry"}
        </h3>
        {successOperation && (
          <div className="alert alert-success">Enquiry Submitted</div>
        )}
        <form ref={formService} className="needs-validation" noValidate>
          <div className="mb-1">
            {state.enquiry.refenq.enquiry_id ? (
              <input
                type="text"
                value={admin_response}
                onChange={(e) => updateAdminResponse(e)}
                className="form-control"
                placeholder="Enter admin response"
                required
              />
            ) : (
              " "
            )}
          </div>
          <div className="mb-1" style={{ marginTop: "30px" }}>
            <textarea
              value={enquiry_desc}
              onChange={(e) => updateEnquiry_desc(e)}
              className="form-control"
              placeholder="Enter Enquiry"
              required
            />
          </div>
          <div className="mb-1">
            {state.enquiry.refenq.enquiry_id ? (
              <input
                type="button"
                className="btn btn-success w-100"
                value="Update Enquiry"
                onClick={() => updateEnquiry()}
              />
            ) : (
              <input
                type="button"
                className="btn btn-success w-100"
                value="Submit Enquiry"
                onClick={(e) => addEnquiry(e)}
              />
            )}
          </div>
        </form>
      </div>

      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
