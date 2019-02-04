import React, { Component } from "react";

// Initializing Redux store
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./state/reducers";

import Layout from "./components/Layout/Layout";
import "./App.css";

// Create store
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

/**
 * The app itself.
 * This part is being initialized on the content page (in Stash)
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
