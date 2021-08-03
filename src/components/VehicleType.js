import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createVehicleTypeAction } from "../redux/VehicleTypeReducer";

export function VehicleType() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formService = useRef();
  const state = useSelector((state) => state);

  const [vehicle_model_name, setVehicle_model_name] = useState(
    state.VehicleType.reftype.vehicle_model_name
  );
  const [unsuccessoperation, setUnSuccessOperation] = useState(false);
  const [successOperation, setSuccessOperation] = useState(false);
  const updateVehicle_model_name = (e) => setVehicle_model_name(e.target.value);
  const addVehicleModel = (e) => {
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
        createVehicleTypeAction({
          vehicle_model_name,
        })
      );

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);

      //history.push("/enquirylist");

      //setUserid("");
      setVehicle_model_name("");
    }
  };

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">Vehicle Type</h3>
        {successOperation && (
          <div className="alert alert-success">Vehicle Type Added</div>
        )}
        <form ref={formService} className="needs-validation" noValidate>
          <div className="mb-1">
            <input
              type="text"
              value={vehicle_model_name}
              onChange={(e) => updateVehicle_model_name(e)}
              className="form-control"
              placeholder="Enter vehicle Model"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="button"
              className="btn btn-success w-100"
              value="Add Vehicle Type"
              onClick={(e) => addVehicleModel(e)}
            />
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
