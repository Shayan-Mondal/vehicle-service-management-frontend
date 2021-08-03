const initState = {
  // employee: {},
  refrequest: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};
const SERVICE_REQUEST_CREATE = "SERVICE_REQUEST_CREATE";
const SERVICE_REQUEST_UPDATE = "SERVICE_REQUEST_UPDATE";
const SERVICE_REQUEST_DELETE = "SERVICE_REQUEST_DELETE";
const SERVICE_REQUEST_GET_ALL = "SERVICE_REQUEST_GET_ALL";
const SERVICE_REQUEST_GET_BY_ID = "SERVICE_REQUEST_GET_BY_ID";

const REF_SERVICE_REQUEST = "REF_SERVICE_REQUEST";

export function createServiceRequestAction(payload) {
  // return { type: ENQUIRY_CREATE, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/servicerequest/";
    const requestBody = { ...payload };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: SERVICE_REQUEST_CREATE, payload: payload });
  };
}
export function updateServiceRequestAction(payload) {
  //return { type: ENQUIRY_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/servicerequest/${payload.service_req_id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefRequest({}));
  };
}
export function deleteServiceRequestAction(payload) {
  //return { type: ENQUIRY_DELETE, payload: payload };
  return async (dispatch) => {
    console.log(payload);
    const url = `http://localhost:8080/api/enquiry/${payload.service_req_id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllServiceRequestAction());
  };
}
export function getAllServiceRequestAction(payload) {
  //return { type: ENQUIRY_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/servicerequest/";
    const response = await fetch(url);
    const serviceRequestList = await response.json();
    dispatch({ type: SERVICE_REQUEST_GET_ALL, payload: serviceRequestList });
  };
}

export function updateRefRequest(payload) {
  return { type: REF_SERVICE_REQUEST, payload: payload };
}
export function ServiceRequestReducer(state = initState, action) {
  switch (action.type) {
    case SERVICE_REQUEST_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case SERVICE_REQUEST_UPDATE:
      return state;
    case SERVICE_REQUEST_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };
    case SERVICE_REQUEST_GET_ALL:
      return { ...state, list: action.payload };
    case SERVICE_REQUEST_GET_BY_ID:
      return state;
    case REF_SERVICE_REQUEST:
      return { ...state, refrequest: action.payload };
    default:
      return state;
  }
}
