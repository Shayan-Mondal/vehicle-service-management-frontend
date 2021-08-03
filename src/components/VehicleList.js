import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteVehicleAction,
  getAllVehicleAction,
  updateRefVehicle,
} from "../redux/VehicleReducer";
/*import {
  deleteEnquiryAction,
  getAllEnquiryAction,
  updateRefEnquiry,
} from "../redux/EnquiryReducer";*/

export function VehicleList() {
  const state = useSelector((state) => state);
  const history = useHistory();
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVehicleAction());
  }, []);

  const deleteVehicle = (item, index) => {
    dispatch(deleteVehicleAction(item));
  };

  const updateVehicle = (item, index) => {
    dispatch(updateRefVehicle(item));
    history.push("/vehicle");
  };
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-warning"> List</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col"> </th>
              <th scope="col"> </th>
              <th scope="col">VEHICLE_MAN_YEAR</th>
              <th scope="col">VEHICLE_DESC</th>
              <th scope="col">VEHICLE_CATALOG_ID</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[...state.Vehicle.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.vehicle_reg_no}</th>
                <td>{item.user_id}</td>
                <td>{item.vehicle_color}</td>
                <td>{item.vehicle_man_yr}</td>
                <td>{item.vehicle_desc} </td>
                <td>{item.vehicletype.vehicle_mod_id} </td>
                <td>
                  <input
                    type="button"
                    onClick={() => updateVehicle(item)}
                    value="Edit"
                    className="btn btn-link"
                  />{" "}
                  /
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => deleteVehicle(item, index)}
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
