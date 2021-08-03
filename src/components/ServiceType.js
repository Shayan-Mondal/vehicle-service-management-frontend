import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createServiceTypeAction } from "../redux/ServiceTypeReducer";
//import { createVehicleTypeAction } from "../redux/VehicleTypeReducer";

export function ServiceType() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formService = useRef();
  const state = useSelector((state) => state);

  const [service_desc, setService_desc] = useState(
    state.ServiceType.refservice.service_desc
  );

  const [service_price, setService_price] = useState(
    state.ServiceType.refservice.service_price
  );

  const [unsuccessoperation, setUnSuccessOperation] = useState(false);
  const [successOperation, setSuccessOperation] = useState(false);
  const updateService_desc = (e) => setService_desc(e.target.value);
  const updateService_price = (e) => setService_price(e.target.value);
  const addService = (e) => {
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
        createServiceTypeAction({
          service_desc,
          service_price,
        })
      );

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);

      //history.push("/enquirylist");

      //setUserid("");
      setService_desc("");
    }
  };

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">Service Type</h3>
        {successOperation && (
          <div className="alert alert-success">Service Type Added</div>
        )}
        <form ref={formService} className="needs-validation" noValidate>
          <div className="mb-1">
            <input
              type="text"
              value={service_desc}
              onChange={(e) => updateService_desc(e)}
              className="form-control"
              placeholder="Enter Service Type"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={service_price}
              onChange={(e) => updateService_price(e)}
              className="form-control"
              placeholder="Enter Service Price"
            />
          </div>
          <div className="mb-1">
            <input
              type="button"
              className="btn btn-success w-100"
              value="Add Service Type"
              onClick={(e) => addService(e)}
            />
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
