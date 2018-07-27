import React, { Component } from "react";
import { Button,Input,Divider,Segment,Form,Container,Header,Menu } from 'semantic-ui-react';

export default class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    static defaultProps = {
        onAdd: () => null
    }

    getInitialState = () => ({
        id: '',
        title: '',
        author: '',
    });

    handleChange = (field, event) => {
        const { target: { value } } = event;

        this.setState({
            [field]: value
        });
    }

    handleAdd = () => {
        const { id, title, author } = this.state;

        this.setState(this.getInitialState(), () => {
            this.props.onAdd({ id, title, author });
        });
    }

    handleCancel = () => {
        this.setState(this.getInitialState());
    }


    render() {

        return (
            
                <Segment.Group vertical compact>

                <Header as='h2' icon textAlign='center'>


                Add new Post
                </Header>
                 
                    <Segment compact > 
                    <Input label={{ color: 'pink', content: 'Post' }} placeholder="Post" value={this.state.id} onChange={this.handleChange.bind(this, 'id')} />

                    <Input label={{ color: 'pink', content: 'Title' }} placeholder="Title" value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />
                  
                
                    <Input label={{ color: 'pink' ,content: 'Author'}} placeholder="Author" value={this.state.author} onChange={this.handleChange.bind(this, 'author')} />
                    </Segment>
                 

                  

                   <Segment>
                    <Button.Group  widths='3' >
                        <Button color='green' onClick={this.handleAdd} >Add new post</Button>
                        <Button.Or color='grey' />
                        <Button color='red' onClick={this.handleCancel} >Cancel</Button>
                       
                         </Button.Group>
                    
                   </Segment>
                
                </Segment.Group>
            
            
        );
    }
}