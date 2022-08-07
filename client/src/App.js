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
  const { data, loading } = useQuery( gql`
    query {
      getUserById(id: "VXNlcjox") {
        id
        email
        firstName
    }
  }
  `);
  console.log(data);
  
  if (loading) {
    return 'Loading...';
  } else if (data && data.getUserById) {
    return `Welcome back, ${data.getUserById.id} ${data.getUserById.email}`;
  } else {
    return 'Hello stranger';
  }
};



export default App;