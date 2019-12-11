//NOTES *****
//Actions - (add features) & (remove item)

export const ADD_FEATURES = "ADD_FEATURES";

export const addFeatures = feature => {
  console.log(`addFeature from action.js`, feature);

  return {
    type: ADD_FEATURES,
    payload: feature
  };
};

export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const removeItem = feature => {
  console.log(`removeItem from action.js`, feature);

  return {
    type: REMOVE_FEATURES,
    payload: feature
  };
};

// NOTES *****
// Actions in Redux are packets of information that describe events that have occurred in the UI

// In code, an action is simply an object

// actions are dispatched to the reducers, and tell the reducers how to update the state tree

// REDUX DATA FLOW **********
// A. Store sets the state
// B. Event occurs in the UI
// C. An Action that describes the event is dispatched
// D. The reducer updates the state tree in a predictable way
// E. The UI receives the updated state tree
