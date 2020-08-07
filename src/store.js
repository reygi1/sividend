import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dashnavReducer from "./reducers/dashnavReducer";
import stockReducer from "./reducers/stockReducer";
import chartReducer from "./reducers/chartReducer";
import dataReducer from "./reducers/dataReducer";
import sentimentReducer from "./reducers/sentimentReducer";

const reducer = combineReducers({
  dashnav: dashnavReducer,
  stock: stockReducer,
  chart: chartReducer,
  data: dataReducer,
  sentiment: sentimentReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
