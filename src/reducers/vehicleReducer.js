import { FETCH_VEHICLES } from "../actions/vehicle";

export const vehicleReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { items: action.payload };
    default:
      return state;
  }
};
