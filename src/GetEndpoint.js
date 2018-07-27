import React, { Component } from 'react'
import { API } from 'aws-amplify';
import Amplify from 'aws-amplify';

class GetEndpoint extends Component {



	render() {
    return (
    	let apiName = 'getBalanace';
let path = ''; 
let myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return entire response object instead of response.data)
    queryStringParameters: {} // OPTIONAL
}
API.get(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});
);
}
}

export default GetEndpoint