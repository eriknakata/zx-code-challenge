import { createApolloFetch } from 'apollo-fetch';
const uri = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql';

export default createApolloFetch({ uri })