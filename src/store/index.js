// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// function counterReducer(state = intialState, action) {
//   switch (action.type) {
//     case "increment":
//       // state.counter++;
//       return {
//         ...state,
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case "increase":
//       return {
//         showCounter: state.showCounter,
//         counter: state.counter + action.amount,
//       };
//     case "toogle":
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

// export default store;
// const subscriberFunctions = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(subscriberFunctions);
