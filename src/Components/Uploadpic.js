import React, { Component } from 'react'
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { Storage } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react';




class Uploadpic extends Component {
constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
    	key:'joe.jpg'
    }
  }
  handleClick(event) {
     event.preventDefault();
     document.getElementById("fileInputHidden").click();
     Auth.currentCredentials()
     .then(result => console.log(result.data.IdentityId))
     .catch(err => console.log(err));

    //  Storage.list('/', {level: 'private'})
    //  .then(result => console.log(result))
    // .catch(err => console.log(err));

  }
  handleChange(event) {
    var x = document.getElementById("fileInputHidden").value;
    var n = x.lastIndexOf("\\");
    console.log(n);
    if (x.length !== 0.0) {
      var filename = x.substr(n+1, x.length);
    console.log(filename);
    document.getElementById("FileUploadbtn").innerHTML = 'Selected file is: ' + filename;
    } else {
       document.getElementById("FileUploadbtn").innerHTML = " Upload File:"
    }
    
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.files[0].name}`
    );
     for (var i = 0; i < this.fileInput.files.length; i++) {
      var file = this.fileInput.files[i]
      Storage.put(file.name, file)
      .then (result => {this.setState({
    		key: result['key']
    	});
  })
      .catch(err => console.log(err));
    }
}


  render() {
    return (
    <div>
    <S3Image level="private" imgKey={this.state.key} />
      <form onSubmit={this.handleSubmit}>
        <label>
          <button className="btn btn-primary" id="FileUploadbtn" type="button" onClick={this.handleClick}> Upload File:</button>
          <input type="file" id="fileInputHidden" ref={input => {this.fileInput = input;}} style={{display: "none"}} onChange={this.handleChange}/>
        </label>
        <br />
        <button className="btn btn-primary" type="submit"><i className="fas fa-cloud-upload-alt fa-lg" /> Submit</button>
      </form>
      </div>
      
    );
  }
}
export default Uploadpic