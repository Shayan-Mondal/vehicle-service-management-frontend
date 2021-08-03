import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { AdminLoginReducer } from "./AdminLoginReducer";
import { EnquiryReducer } from "./EnquiryReducer";
import { MechanicReducer } from "./MechanicReducer";
import { ServiceRequestReducer } from "./ServiceRequestReducer";
import { ServiceTypeReducer } from "./ServiceTypeReducer";
import { UserLoginReducer } from "./UserLoginReducer";
import { UserReducer } from "./UserReducer";
import { VehicleReducer } from "./VehicleReducer";
import { VehicleTypeReducer } from "./VehicleTypeReducer";

const rootReducer = combineReducers({
  enquiry: EnquiryReducer,
  VehicleType: VehicleTypeReducer,
  Vehicle: VehicleReducer,
  ServiceType: ServiceTypeReducer,
  ServiceRequest: ServiceRequestReducer,
  mechanic: MechanicReducer,
  user: UserReducer,
  UserLogin: UserLoginReducer,
  AdminLogin: AdminLoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
