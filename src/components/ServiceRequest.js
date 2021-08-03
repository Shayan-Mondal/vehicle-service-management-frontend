import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createServiceRequestAction,
  getAllServiceRequestAction,
  updateServiceRequestAction,
} from "../redux/ServiceRequestReducer";
import { getAllServiceTypeAction } from "../redux/ServiceTypeReducer";
import { getAllVehicleAction } from "../redux/VehicleReducer";

export function ServiceRequest() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [vehicle, setVehicle] = useState(
    state.ServiceRequest.refrequest.vehicle
  );
  const [servicetype, setServicetype] = useState(
    state.ServiceRequest.refrequest.servicetype
  );

  const [status, setStatus] = useState(state.ServiceRequest.refrequest.status);
  const [mechanics, setMechanicsId] = useState(
    state.ServiceRequest.refrequest.mechanicsId
  );

  const [successOperation, setSuccessOperation] = useState(false);

  const updateStatus = (e) => setStatus(e.target.value);
  const updateMechanics = (e) => setMechanicsId(e.target.value);
  const updateVehicle = (e) => setVehicle(e.target.value);
  const updateService_type = (e) => {
    setServicetype(e.target.value);
  };
  useEffect(() => {
    dispatch(getAllServiceTypeAction());
  }, []);

  useEffect(() => {
    dispatch(getAllVehicleAction());
  }, []);

  const addRequest = (e) => {
    dispatch(
      createServiceRequestAction({
        vehicle: {
          vehicle_reg_no: vehicle,
        },

        serviceCatalog: {
          service_catalog_id: 11,
        },
        servicetype: {
          service_id: servicetype,
        },
      })
    );

    history.push("/servicerequestlist");

    //setUserid("");
    setVehicle("");
    setServicetype("");
  };
  const updateRequest = () => {
    dispatch(
      updateServiceRequestAction({
        sevice_req_id: state.ServiceRequest.refrequest.service_req_id,
        vehicle: {
          vehicle_reg_no: vehicle,
        },
        status,
        mechanics: {
          mechanicsId: mechanics,
        },
        serviceCatalog: {
          service_catalog_id: 11,
        },
        servicetype: {
          service_id: servicetype,
        },
      })
    );
    setVehicle("");
    setServicetype("");
    setStatus("");
    setMechanicsId("");
  };

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">Service Request</h3>
        {/*<div className="alert alert-success">Request Registered</div>
        <div className="mb-1">
          <input
            type="text"
            value={vehicle}
            onChange={(e) => updateVehicle(e)}
            className="form-control"
            placeholder="Enter vehicle registration id"
          />
    </div>*/}
        {/*<select
          className="mb-1"
          //aria-label=".form-select-lg example"
          value={vehicle}
          onChange={(e) => updateVehicle(e)}
          required
        >
          <option selected>Choose your Vehicle</option>
          {[...state.Vehicle.list].map((item, index) => (
            <option value={item.vehicle_reg_no} key={index}>
              {item.vehicle_model_name}
            </option>
          ))}
          </select>*/}
        {/*  <div className="mb-1">
          <input
            type="text"
            //value={lastName}
            // onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter price"
          />
        </div>
        <div>
            <h6>Select Vehicle Color</h6>
            <div>
              <h5>Red</h5>
              <input
                type="checkbox"
                name="vehiclecolor"
                value={vehicle_color}
                onClick={() => updateVehicle_color("")}
              />
            </div>
          </div>
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={userName}
            //onChange={(e) => updateUserName(e)}
            className="form-control"
            placeholder="Enter mechanics id"
          />
        </div>
        <div className="mb-1">
          <input
            type="number"
            value={password}
            //onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter service catalog id"
          />
        </div>*/}
        <div>
          <select
            className="mb-1"
            //aria-label=".form-select-lg example"
            value={vehicle}
            onChange={(e) => updateVehicle(e)}
            required
          >
            <option selected>Choose your Vehicle</option>
            {[...state.Vehicle.list].map((item, index) => (
              <option value={item.vehicle_reg_no} key={index}>
                {item.vehicle_number}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="mb-1"
            //aria-label=".form-select-lg example"
            value={servicetype}
            onChange={(e) => updateService_type(e)}
            required
          >
            <option selected>Choose your Service type</option>
            {[...state.ServiceType.list].map((item, index) => (
              <option value={item.service_id} key={index}>
                {item.service_desc}
              </option>
            ))}
          </select>
        </div>
        {/*<div className="mb-1">
          <input
            type="text"
            //value={email}
            //onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter status"
          />
          </div>*/}
        <div className="mb-1">
          {state.ServiceRequest.refrequest.service_req_id ? (
            <input
              type="text"
              value={status}
              onChange={(e) => updateStatus(e)}
              className="form-control"
              placeholder="Enter status"
              required
            />
          ) : (
            " "
          )}
        </div>
        <div className="mb-1">
          {state.ServiceRequest.refrequest.service_req_id ? (
            <input
              type="text"
              value={mechanics}
              onChange={(e) => updateMechanics(e)}
              className="form-control"
              placeholder="Enter mechanic"
              required
            />
          ) : (
            " "
          )}
        </div>
        <div className="mb-1">
          {state.ServiceRequest.refrequest.service_req_id ? (
            <input
              type="button"
              className="btn btn-success w-100"
              value="Update request"
              onClick={() => updateRequest()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-success w-100"
              value="Submit Request"
              onClick={(e) => addRequest(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
