const initState = {
  // employee: {},
  refenq: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};
const ENQUIRY_CREATE = "ENQUIRY_CREATE";
const ENQUIRY_UPDATE = "ENQUIRY_UPDATE";
const ENQUIRY_DELETE = "ENQUIRY_DELETE";
const ENQUIRY_GET_ALL = "ENQUIRY_GET_ALL";
const ENQUIRY_GET_BY_ID = "ENQUIRY_GET_BY_ID";

const REF_ENQUIRY = "REF_ENQUIRY";

export function createEnquiryAction(payload) {
  // return { type: ENQUIRY_CREATE, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/enquiry/";
    const requestBody = { ...payload };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: ENQUIRY_CREATE, payload: payload });
  };
}
export function updateEnquiryAction(payload) {
  //return { type: ENQUIRY_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/enquiry/${payload.enquiry_id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefEnquiry({}));
  };
}
export function deleteEnquiryAction(payload) {
  //return { type: ENQUIRY_DELETE, payload: payload };
  return async (dispatch) => {
    console.log(payload);
    const url = `http://localhost:8080/api/enquiry/${payload.enquiry_id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllEnquiryAction());
  };
}
export function getAllEnquiryAction(payload) {
  //return { type: ENQUIRY_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/enquiry/";
    const response = await fetch(url);
    const enquiryList = await response.json();
    dispatch({ type: ENQUIRY_GET_ALL, payload: enquiryList });
  };
}
export function getByIdEnquiryAction(payload) {
  return { type: ENQUIRY_GET_BY_ID, payload: payload };
}
export function updateRefEnquiry(payload) {
  return { type: REF_ENQUIRY, payload: payload };
}
export function EnquiryReducer(state = initState, action) {
  switch (action.type) {
    case ENQUIRY_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case ENQUIRY_UPDATE:
      return state;
    case ENQUIRY_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };
    case ENQUIRY_GET_ALL:
      return { ...state, list: action.payload };
    case ENQUIRY_GET_BY_ID:
      return state;
    case REF_ENQUIRY:
      return { ...state, refenq: action.payload };
    default:
      return state;
  }
}
