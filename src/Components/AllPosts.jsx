import React, { Component } from "react";
import { Button, Icon, Table } from 'semantic-ui-react';



export default class AllPosts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: {}
        }
    }

    static defaultProps = {
        posts: [],
        onDelete: () => null,
        onEdit: () => null,
    }
    componentWillMount(){
    this.props.subscribeToNewPosts();
}

    handleDelete = (post) => {
        if (window.confirm('Are you sure')) {
            this.props.onDelete(post);
        }
    }

    handleEdit = (post) => {
        const { editing } = this.state;

        this.setState({ editing: { ...editing, [post.id]: { ...post } } });
    }

    handleEditCancel = (id) => {
        const { editing } = this.state;
        const { [id]: curr, ...others } = editing;

        this.setState({ editing: { ...others } });
    }

    handleFieldEdit = (id, field, event) => {
        const { target: { value } } = event;
        const { editing } = this.state;
        const editData = { ...editing[id] };

        editData[field] = value;

        this.setState({
            editing: { ...editing, ...{ [id]: editData } }
        });
    }

    handleEditSave = (id) => {
        const { editing } = this.state;
        const { [id]: editedPost, ...others } = editing;

        this.props.onEdit({ ...editedPost });
        this.setState({
            editing: { ...others }
        });
    }

    renderOrEditPost = (post) => {
        const { editing } = this.state;

        const editData = editing[post.id];
        const isEditing = !!editData;

        return (
            !isEditing ?
                (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                       
                        <td>

                            <Button.Group>
                            <Button onClick={this.handleEdit.bind(this, post)}>Edit</Button>
                            <Button.Or/>
              
                            <Button onClick={this.handleDelete.bind(this, post)}>Delete</Button>
    
                            </Button.Group>
                           
                        </td>
                    </tr>
                ) : (
                    <tr key={post.id}>
                        <td>
                            {post.id}
                        </td>
                        <td>
                            <input type="text" value={editData.title} onChange={this.handleFieldEdit.bind(this, post.id, 'title')} />
                        </td>
                        <td>
                            <input type="text" value={editData.author} onChange={this.handleFieldEdit.bind(this, post.id, 'author')} />
                        </td>
                        <td>
                            <Button.Group>
                                <Button color='teal' onClick={this.handleEditSave.bind(this, post.id)}>Save</Button>
                                <Button.Or/>
                                <Button onClick={this.handleEditCancel.bind(this, post.id)}>Cancel</Button>
                            </Button.Group>
                            
                            
                        </td>
                    </tr>
                )
        );
    }

    render() {
        const { posts } = this.props;

        return (
        <div className='tablediv'>
            <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Post</Table.HeaderCell>
                    <Table.HeaderCell>title</Table.HeaderCell>
                    <Table.HeaderCell>author</Table.HeaderCell>
                    <Table.HeaderCell>action</Table.HeaderCell>
                   
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {[].concat(posts).sort((a, b) => b.id - a.id).map(this.renderOrEditPost)}
            </Table.Body>
        </Table>
        </div>);
    }
}