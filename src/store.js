import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { vehicleReducer } from "./reducers/vehicleReducer";

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    vehicles: vehicleReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
