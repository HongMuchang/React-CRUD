import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.scss";
import reducer from "./reducers";
import Events_Index from "./components/events_index";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Events_Index />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
