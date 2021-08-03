const initState = {
  // employee: {},
  reftype: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};
const VEHICLE_TYPE_CREATE = "VEHICLE_TYPE_CREATE";
const VEHICLE_TYPE_UPDATE = "VEHICLE_TYPE_UPDATE";
const VEHICLE_TYPE_DELETE = "VEHICLE_TYPE_DELETE";
const VEHICLE_TYPE_GET_ALL = "VEHICLE_TYPE_GET_ALL";
const VEHICLE_TYPE_GET_BY_ID = "VEHICLE_TYPE_GET_BY_ID";

const REF_VEHICLE_TYPE = "REF_VEHICLE_TYPE";

export function createVehicleTypeAction(payload) {
  // return { type: ENQUIRY_CREATE, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/vehicletype/";
    const requestBody = { ...payload };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: VEHICLE_TYPE_CREATE, payload: payload });
  };
}

export function getAllVehicleTypeAction(payload) {
  //return { type: ENQUIRY_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/vehicletype/";
    const response = await fetch(url);
    const vehicleList = await response.json();
    dispatch({ type: VEHICLE_TYPE_GET_ALL, payload: vehicleList });
  };
}
export function VehicleTypeReducer(state = initState, action) {
  switch (action.type) {
    case VEHICLE_TYPE_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case VEHICLE_TYPE_UPDATE:
      return state;
    case VEHICLE_TYPE_DELETE:
    //const oldList = state.list;
    //oldList.splice(action.payload, 1);
    //console.log("OL", oldList);
    //return { ...state, list: [...oldList] };
    case VEHICLE_TYPE_GET_ALL:
      return { ...state, list: action.payload };
    case VEHICLE_TYPE_GET_BY_ID:
      return state;
    case REF_VEHICLE_TYPE:
      return { ...state, refenq: action.payload };
    default:
      return state;
  }
}
