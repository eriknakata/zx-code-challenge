import { createApolloFetch } from 'apollo-fetch';

export default () => {
    const uri = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql';
    return createApolloFetch({ uri });
}