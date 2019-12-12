import { ADD_FEATURES, REMOVE_FEATURES } from "../actions/actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const Reducer = (state = initialState, action) => {
  console.log(`this is state in our reducer`, state);
  switch (action.type) {
    case ADD_FEATURES:
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price,
          features: [...state.car.features, action.payload]
        },
        store: state.store.filter(item => {
          return item.id !== action.payload.id;
        })
        // if it has the payload id - we do not want it
      };
    case REMOVE_FEATURES:
      return {
        ...state,
        car: {
          ...state,
          price: state.car.price - action.payload.price,
          name: state.car.name,
          image: state.car.image,
          features: state.car.features.filter(item => {
            return item.id !== action.payload.id;
          })
        },
        store: [...state.store, action.payload]
      };

    default:
      return state;
  }
};

// Actions in Redux are packets of information that describe events that have occurred in the UI

// IN code, an action is simply an object

// actions are dispatched to the reducers, and tell the reducers how to update the state tree

//NOTES ****
//This was copied and pasted from App.js in the App function
// const state = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: '2019 Ford Mustang',
//     image:
//       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//     features: []
//   },
//   additionalFeatures: [
//     { id: 1, name: 'V-6 engine', price: 1500 },
//     { id: 2, name: 'Racing detail package', price: 1500 },
//     { id: 3, name: 'Premium sound system', price: 500 },
//     { id: 4, name: 'Rear spoiler', price: 250 }
//   ]
// };
