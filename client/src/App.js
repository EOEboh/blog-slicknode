import React from 'react';


import { ApolloProvider, gql, useQuery } from '@apollo/client';

// Import client from wherever you created (and exported) it
import client from './client';

 const App = () => (
  // Add the ApolloProvider at the top level of your app
  <ApolloProvider client={client}>
    <header>
      <h1>My Slicknode Project</h1>
    </header>
    <main>
      <Greeting />
    </main>
  </ApolloProvider>
);

const Greeting = () => {
  // Use GraphQL queries to load and mutate data from Slicknode
  const { data, loading } = useQuery(gql`
    query getUser{
      getUserById(id: "VXNlcjox") {
        id
        email
        firstName
    }
  }
  `);
  if (loading) {
    return 'Loading...';
  } else if (data && data.getUser.getUserById) {
    return `Welcome back, ${data.getUser.getUserById.id} ${data.getUser.getUserById.email}`;
  } else {
    return 'Hello stranger';
  }
};



export default App;