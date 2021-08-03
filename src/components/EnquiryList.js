import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteEnquiryAction,
  getAllEnquiryAction,
  updateRefEnquiry,
} from "../redux/EnquiryReducer";

export function EnquiryList() {
  const state = useSelector((state) => state);
  const history = useHistory();
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEnquiryAction());
  }, []);

  const deleteEnquiry = (item, index) => {
    dispatch(deleteEnquiryAction(item));
  };

  const updateEnquiry = (item, index) => {
    dispatch(updateRefEnquiry(item));
    history.push("/enquiry");
  };
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-warning">Enquiry List</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col"> </th>
              <th scope="col">ENQUIRY_DESC</th>
              <th scope="col">ADMIN_RESPONSE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[...state.enquiry.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.enquiry_id}</th>
                <td>{item.user_id}</td>
                <td>{item.enquiry_desc}</td>
                <td>{item.admin_response} </td>
                <td>
                  <input
                    type="button"
                    onClick={() => updateEnquiry(item)}
                    value="Edit"
                    className="btn btn-link"
                  />{" "}
                  /
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => deleteEnquiry(item, index)}
                    className="btn btn-link text-danger"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
