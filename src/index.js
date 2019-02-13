import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");

const client = new ApolloClient({
  uri: "api.graphloc.com"
});

console.log(client);

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
