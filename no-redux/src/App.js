import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import "./App.css";

/**
 * The app itself.
 * This part is being initialized on the content page (in Stash)
 */
export default class App extends Component {
  render() {
    return <Layout />;
  }
}
