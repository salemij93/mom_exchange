import React, {Component} from 'react';
import _ from 'lodash';
import { graphql, ApolloProvider, compose } from 'react-apollo';


import AllPosts from "./AllPosts";
import AddPost from "./AddPost";

import NewPostsSubscription from './NewPostsSubscription';
import UpdatePostsSubscription from './UpdatePostsSubscription';
import DeletePostSubscription from './DeletePostSubscription';
import AllPostsQuery from './AllPostsQuery';
import NewPostMutation from './NewPostMutation';
import DeletePostMutation from './DeletePostMutation';
import UpdatePostMutation from './UpdatePostMutation';

import { Icon, Item, Segment, Button, Card, Imservice, Grid, Table} from 'semantic-ui-react';

const AllPostsWithData = compose(
    graphql(AllPostsQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: (props) => ({
            posts: props.data.allPost && props.data.allPost.posts,

            subscribeToNewPosts: params => {
                props.data.subscribeToMore({
                    document: NewPostsSubscription,
                    updateQuery: (prev, { subscriptionData: { data : { newPost } } }) => ({
                        ...prev,
                        allPost: { posts: [newPost, ...prev.allPost.posts.filter(post => post.id !== newPost.id)], __typename: 'PaginatedPosts' }
                    })
                });
            },

             subscribeToNewPosts: params => {
                props.data.subscribeToMore({
                    document: UpdatePostsSubscription,
                    updateQuery: (prev, { subscriptionData: { data : { updatedPost } } }) => ({
                        ...prev,
                        updatedPost: { posts: [updatedPost, ...prev.allPost.posts.filter(post => post.id !== updatedPost.id)], __typename: 'PaginatedPosts' }
                    })
                });
            },

             subscribeToNewPosts: params => {
                props.data.subscribeToMore({
                    document: DeletePostSubscription,
                    updateQuery: (prev, { subscriptionData: { data : { deletedPost } } }) => ({
                        ...prev,
                        deletedPost: { posts: [deletedPost, ...prev.allPost.posts.filter(post => post.id !== deletedPost.id)], __typename: 'PaginatedPosts' }
                    })
                });
            },
        })
    }),
    graphql(DeletePostMutation, {
        props: (props) => ({
            onDelete: (post) => props.mutate({
                variables: { id: post.id, expectedVersion: post.version },
                optimisticResponse: () => ({ deletePost: { ...post, __typename: 'Post' } }),
            })
        }),
        options: {
            refetchQueries: [{ query: AllPostsQuery }],
            update: (proxy, { data: { deletePost: { id } } }) => {
                const query = AllPostsQuery;
                const data = proxy.readQuery({ query });

                data.allPost.posts = data.allPost.posts.filter(post => post.id !== id);

                proxy.writeQuery({ query, data });
            }
        }
    }),
    graphql(UpdatePostMutation, {
        props: (props) => ({
            onEdit: (post) => {
                props.mutate({
                variables: { ...post, expectedVersion: post.version },
                optimisticResponse: () => ({ updatePost: { ...post, __typename: 'Post', version: post.version + 1 } }),
                })
            }
        }),
        options: {
            refetchQueries: [{ query: AllPostsQuery }],
            update: (dataProxy, { data: { updatePost } }) => {
                const query = AllPostsQuery;
                const data = dataProxy.readQuery({ query });

                data.allPost.posts = data.allPost.posts.map(post => post.id !== updatePost.id ? post : { ...updatePost });

                dataProxy.writeQuery({ query, data });
            }
        }
    })
    )(AllPosts);

    const NewPostWithData = graphql(NewPostMutation, {
    props: (props) => ({
        onAdd: post => props.mutate({
            variables: post,
            optimisticResponse: () => ({ addPost: { ...post, __typename: 'Post', version: 1 } }),
        })
    }),
    options: {
        refetchQueries: [{ query: AllPostsQuery }],
        update: (dataProxy, { data: { addPost } }) => {
            const query = AllPostsQuery;
            const data = dataProxy.readQuery({ query });

            data.allPost.posts.push(addPost);

            dataProxy.writeQuery({ query, data });
        }
    }
})(AddPost);

const ForumChat = () => (
        <div className="ForumChat">
            
            <NewPostWithData />
            <AllPostsWithData />
        </div>
        );


export default ForumChat