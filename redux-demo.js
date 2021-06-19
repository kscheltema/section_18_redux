const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
    if (action.type === "decrement") {
      return {
        counter: state.counter - 1,
      };
    }
  }
  return state;
}; //no side effects within this function should be pure

const store = redux.createStore(counterReducer);
console.log(store.getState()); //initial state

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(store.getState()); //latest updated state
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
