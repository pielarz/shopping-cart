export const FETCH_VEHICLES = "FETCH_VEHICLES";

export const fetchVehicles = () => async (dispatch) => {
  const res = await fetch("/api/vehicles");
  dispatch({
    type: FETCH_VEHICLES,
    payload: res.data,
  });
};
