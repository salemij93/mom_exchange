import gql from 'graphql-tag';

export default gql`
    subscription UpdatePostSub {
    updatedPost {
        __typename
        id
        title
        author
        version
    }
}`;