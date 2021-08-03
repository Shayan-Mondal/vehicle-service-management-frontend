import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteServiceRequestAction,
  getAllServiceRequestAction,
  updateRefRequest,
} from "../redux/ServiceRequestReducer";

export function ServiceRequestList() {
  const state = useSelector((state) => state);
  const history = useHistory();
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceRequestAction());
  }, []);

  const deleteRequest = (item, index) => {
    dispatch(deleteServiceRequestAction(item));
  };

  const updateRequest = (item, index) => {
    dispatch(updateRefRequest(item));
    history.push("/servicerequest");
  };

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-warning">Service Request List</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col"> </th>
              <th scope="col"> </th>
              <th scope="col">PRICE</th>
              <th scope="col"></th>
              <th scope="col">STATUS</th>
              <th scope="col">SERVICE TYPE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[...state.ServiceRequest.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.service_req_id}</th>
                <td>{item.vehicle_reg_no}</td>
                <td>{item.service_catalog_id}</td>
                <td>{item.servicetype.service_price} </td>
                <td>{item.mechanicsId} </td>
                <td>{item.status} </td>
                <td>{item.servicetype.service_id} </td>
                <td>
                  <input
                    type="button"
                    onClick={() => updateRequest(item)}
                    value="Edit"
                    className="btn btn-link"
                  />{" "}
                  /
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => deleteRequest(item, index)}
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
