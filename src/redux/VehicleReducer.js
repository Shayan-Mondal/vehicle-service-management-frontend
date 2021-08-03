const initState = {
  // employee: {},
  refvehicle: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};
const VEHICLE_CREATE = "VEHICLE_CREATE";
const VEHICLE_UPDATE = "VEHICLE_UPDATE";
const VEHICLE_DELETE = "VEHICLE_DELETE";
const VEHICLE_GET_ALL = "VEHICLE_GET_ALL";
const VEHICLE_GET_BY_ID = "VEHICLE_GET_BY_ID";

const REF_VEHICLE = "REF_VEHICLE";

export function createVehicleAction(payload) {
  // return { type: ENQUIRY_CREATE, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/vehicle/";
    const requestBody = { ...payload };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: VEHICLE_CREATE, payload: payload });
  };
}
export function updateVehicleAction(payload) {
  //return { type: ENQUIRY_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/vehicle/${payload.vehicle_reg_no}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefVehicle({}));
  };
}
export function deleteVehicleAction(payload) {
  //return { type: ENQUIRY_DELETE, payload: payload };
  return async (dispatch) => {
    console.log(payload);
    const url = `http://localhost:8080/api/vehicle/${payload.vehicle_reg_no}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllVehicleAction());
  };
}
export function getAllVehicleAction(payload) {
  //return { type: ENQUIRY_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/vehicle/";
    const response = await fetch(url);
    const vehicleList = await response.json();
    dispatch({ type: VEHICLE_GET_ALL, payload: vehicleList });
  };
}
export function updateRefVehicle(payload) {
  return { type: REF_VEHICLE, payload: payload };
}
export function VehicleReducer(state = initState, action) {
  switch (action.type) {
    case VEHICLE_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case VEHICLE_UPDATE:
      return state;
    case VEHICLE_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };
    case VEHICLE_GET_ALL:
      return { ...state, list: action.payload };
    case VEHICLE_GET_BY_ID:
      return state;
    case REF_VEHICLE:
      return { ...state, refvehicle: action.payload };
    default:
      return state;
  }
}
