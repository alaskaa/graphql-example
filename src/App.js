import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

// Query example
const GET_NAME = gql`
  {
    getLocation(ip: "9.192.115.0") {
      country {
        names {
          en
        }
      }
    }
  }
`;

const App = () => {
  return (
    <Query query={GET_NAME}>
      {({ data, errors }) => (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>This data is fetched with GraphQL</h2>
          <p />
          {console.log(errors)}
        </div>
      )}
    </Query>
  );
};

export default App;
