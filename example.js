console.clear();
// People dropping of a form (Action Creator)
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const claimPolicy = (name, moneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      moneyToCollect: moneyToCollect,
    },
  };
};

// Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if ((action.type = "CREATE_CLAIM")) {
    return bagOfMoney - action.payload.moneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE+POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.naem);
  }
  return listOfPolicies;
};

// store
const { createStore, comnbineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accou8nting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = createStore(ourDepartments);
const action = createPolicy("Alex", 20);
store.dispatch(action);
console.log(store.getState());
