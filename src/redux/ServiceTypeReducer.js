const initState = {
  // employee: {},
  refservice: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};
const SERVICE_TYPE_CREATE = "SERVICE_TYPE_CREATE";
const SERVICE_TYPE_UPDATE = "SERVICE_TYPE_UPDATE";
const SERVICE_TYPE_DELETE = "SERVICE_TYPE_DELETE";
const SERVICE_TYPE_GET_ALL = "SERVICE_TYPE_GET_ALL";
const SERVICE_TYPE_GET_BY_ID = "SERVICE_TYPE_GET_BY_ID";

const REF_SERVICE_TYPE = "REF_SERVICE_TYPE";

export function createServiceTypeAction(payload) {
  // return { type: ENQUIRY_CREATE, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/servicetype/";
    const requestBody = { ...payload };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: SERVICE_TYPE_CREATE, payload: payload });
  };
}

export function getAllServiceTypeAction(payload) {
  //return { type: ENQUIRY_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/servicetype/";
    const response = await fetch(url);
    const serviceList = await response.json();
    dispatch({ type: SERVICE_TYPE_GET_ALL, payload: serviceList });
  };
}
export function ServiceTypeReducer(state = initState, action) {
  switch (action.type) {
    case SERVICE_TYPE_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case SERVICE_TYPE_UPDATE:
      return state;
    case SERVICE_TYPE_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };
    case SERVICE_TYPE_GET_ALL:
      return { ...state, list: action.payload };
    case SERVICE_TYPE_GET_BY_ID:
      return state;
    case REF_SERVICE_TYPE:
      return { ...state, refservice: action.payload };
    default:
      return state;
  }
}
