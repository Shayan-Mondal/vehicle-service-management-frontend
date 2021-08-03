import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  createVehicleAction,
  updateVehicleAction,
} from "../redux/VehicleReducer";
import { getAllVehicleTypeAction } from "../redux/VehicleTypeReducer";

export function Vehicle() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formService = useRef();
  const state = useSelector((state) => state);

  const [vehicle_color, setVehicle_color] = useState(
    state.Vehicle.refvehicle.vehicle_color
  );

  const [vehicle_number, setVehicle_number] = useState(
    state.Vehicle.refvehicle.vehicle_number
  );
  const [vehicle_man_yr, setVehicle_man_yr] = useState(
    state.Vehicle.refvehicle.vehicle_man_yr
  );
  const [vehicle_desc, setVehicle_desc] = useState(
    state.Vehicle.refvehicle.vehicle_desc
  );
  const [vehicletype, setVehicletype] = useState(
    state.Vehicle.refvehicle.vehicletype
  );
  const [unsuccessoperation, setUnSuccessOperation] = useState(false);
  const [successOperation, setSuccessOperation] = useState(false);
  const updateVehicle_color = (e) => {
    setVehicle_color(e.target.value);
  };

  const updateVehicle_man_yr = (e) => setVehicle_man_yr(e.target.value);
  //const updateVehicle_Color = (e) => setVehicle_color(e.target.value);
  const updateVehicle_desc = (e) => setVehicle_desc(e.target.value);
  const updateVehicle_number = (e) => setVehicle_number(e.target.value);
  const updateVehicle_type = (e) => {
    setVehicletype(e.target.value);
  };
  useEffect(() => {
    dispatch(getAllVehicleTypeAction());
  }, []);

  const addVehicle = (e) => {
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
        createVehicleAction({
          userdetails: {
            userId: 1,
          },
          vehicle_color,
          vehicle_man_yr,
          vehicle_number,
          vehicle_desc,
          vehicletype: {
            vehicle_mod_id: vehicletype,
          },
        })
      );

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);

      history.push("/vehiclelist");

      setVehicle_color("");
      setVehicle_man_yr("");
      setVehicle_desc("");
      setVehicletype("");
    }
  };

  const updateVehicle = () => {
    dispatch(
      updateVehicleAction({
        vehicle_reg_no: state.Vehicle.refvehicle.vehicle_reg_no,
        userdetails: {
          userId: 1,
        },
        vehicle_color,
        vehicle_man_yr,
        vehicle_desc,
        vehicle_number,
        vehicletype: {
          vehicle_mod_id: vehicletype,
        },
      })
    );
    setVehicle_color("");
    setVehicle_man_yr("");
    setVehicle_desc("");
    setVehicletype("");
  };
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">Register Vehicle</h3>
        {/*<div className="alert alert-success">Vehicle Details Added</div>*/}
        <form ref={formService} className="needs-validation" noValidate>
          <div className="mb-1">
            <div>
              <h6>Select Vehicle colour:</h6>
            </div>
            <select>
              value={vehicle_color}
              onChange={(e) => updateVehicle_color(e)}
              <option
                selected
                value="RED"
                onChange={(e) => updateVehicle_color(e)}
              >
                Red
              </option>
              <option
                selected
                value="Blue"
                onChange={(e) => updateVehicle_color(e)}
              >
                Blue
              </option>
              <option
                selected
                value="Yellow"
                onChange={(e) => updateVehicle_color(e)}
              >
                Yellow
              </option>
              <option
                selected
                value="White"
                onChange={(e) => updateVehicle_color(e)}
              >
                White
              </option>
            </select>
            {/*<div>
            <h6>Select Vehicle Color</h6>
            <div>
              <h5>Red</h5>
              <input
                type="radio"
                name="vehiclecolor"
                value={vehicle_color}
                onClick={() => updateVehicle_color("RED")}
              />
            </div>
          </div>*/}
          </div>

          {/* <div className="mb-1">
            <input
              type="text"
              value={vehicle_man_yr}
              onChange={(e) => updateVehicle_man_yr(e)}
              className="form-control"
              placeholder="Enter vehicle manufacturing year"
              required
            />
        </div>*/}
          <div className="mb-1">
            <div>
              <h6>Select Vehicle Manufacturing Year: </h6>
            </div>
            <select value={vehicle_man_yr}>
              <option selected value="2021">
                2021
              </option>
              <option selected value="2020">
                2020
              </option>
              <option selected value="2019">
                {" "}
                2019
              </option>
              <option selected value="2018">
                2018
              </option>
              <option selected value="2017">
                2017
              </option>
              <option selected value="2016">
                2016
              </option>
            </select>
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={vehicle_number}
              onChange={(e) => updateVehicle_number(e)}
              className="form-control"
              placeholder="Enter vehicle number"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={vehicle_desc}
              onChange={(e) => updateVehicle_desc(e)}
              className="form-control"
              placeholder="Enter vehicle description"
              required
            />
          </div>
          <select
            className="mb-1"
            //aria-label=".form-select-lg example"
            value={vehicletype}
            onChange={(e) => updateVehicle_type(e)}
            required
          >
            <option selected>Choose your vehicle type</option>
            {[...state.VehicleType.list].map((item, index) => (
              <option value={item.vehicle_mod_id} key={index}>
                {item.vehicle_model_name}
              </option>
            ))}
          </select>

          {/* <div className="mb-1">
          <div>
            <h6>Select Vehicle Model: </h6>
          </div>
          <select>
            <option value="1">Tesla</option>
            <option value="2">Maruti</option>
            <option selected value="3">
              Jaguar
            </option>
            <option value="4">Altroz</option>
          </select>
            </div>*/}
          <div className="mb-1">
            {state.Vehicle.refvehicle.vehicle_reg_no ? (
              <input
                type="button"
                className="btn btn-success w-100"
                value="Update Vehicle"
                onClick={() => updateVehicle()}
              />
            ) : (
              <input
                type="button"
                className="btn btn-success w-100"
                value="Add Vehicle"
                onClick={(e) => addVehicle(e)}
              />
            )}
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
