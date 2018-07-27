import React, { Component } from 'react'
import { API } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { Header, Container } from 'semantic-ui-react'

class GetEndpoint extends Component {
	constructor(props) {
    super(props);
    this.apiName = 'getBalanace';
    this.path = '';
    this.myInit = '';
    this.state = {
    	apiCalls:[]
    }

  }

   componentDidMount() {
   	API.get(this.apiName, this.path, this.myInit).then(response => {
    	this.setState({
    		apiCalls: response
    	})
	}).catch(error => {
	    console.log(error.response);
	});

  }
render (){
	
	return (
		<Container text>
    <Header as='h2'>{this.state.apiCalls}</Header>
    
  </Container>
		)

	;
}
}
export default GetEndpoint