import gql from 'graphql-tag';

export default gql`
    subscription DeletePostSub {
    deletedPost {
        __typename
        id
        title
        author
        version
    }
}`;