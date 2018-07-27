import React, { Component } from 'react';
import { Storage } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react';
import {  Image  } from 'semantic-ui-react'

class ImageViewer extends Component {
constructor(props) {
    super(props);
    this.state = {
      userpic: '',
    }
  }


  handleUpload(event) {
    const file = event.target.files[0];
    const path = file.name;
    Storage.put(path, file).then(() => this.setState({ path }) );
  }

  componentDidMount() {
   Storage.get('matt.jpg', {level: 'private'})
    .then(result => this.setState({ userpic:result }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>Pick a file</p>
        <input type="file" onChange={this.handleUpload.bind(this)} />
        { this.state && <S3Image level="private" path={this.state.path} /> }
        <Image src={this.state.userpic} />
      </div>
    );
  }
}

export default ImageViewer;