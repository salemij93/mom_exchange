import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import "semantic-ui-css/semantic.min.css";
import 'react-datepicker/dist/react-datepicker.css';
import { Storage } from 'aws-amplify';
import { API } from 'aws-amplify';

import AppSync from "./AppSync";
import { graphql, ApolloProvider, compose } from 'react-apollo';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import './App.css';
import AllEvents from './Components/AllEvents';
import NewEvent from './Components/NewEvent';
import ViewEvent from './Components/ViewEvent';
import SidebarLeftUncover from './Components/SidebarLeftUncover';
import SidebarRightOverlay from './Components/SidebarRightOverlay';
import GridTop from './Components/GridTop';
import GetEndpoint from './Components/GetEndpoint';
import {  withAuthenticator } from 'aws-amplify-react';
import {StripeProvider} from 'react-stripe-elements';
import CreditCardInfo from './Components/CreditCardInfo';
import ImageViewer from './Components/ImageViewer';

import AllPhotos from "./Components/AllPhotos";
import AddPhoto from "./Components/AddPhoto";


Amplify.configure({
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: '', 
    // REQUIRED - Amazon Cognito Region    
        region: 'us-east-2', 
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '', 
    // OPTIONAL - Amazon Cognito App Client ID
        userPoolWebClientId: '', // 26-char alphanumeric string 
    },
     Storage: {
        bucket: 'joe-salemi-file-uploads', //REQUIRED -  Amazon S3 bucket
        region: 'us-east-2', //OPTIONAL -  Amazon service region
        identityPoolId: ''
    },
    API : {
        endpoints: [
            {
                name: "getBalanace",
                endpoint: ""
            }
        ]
    }
  });

Storage.configure({ level: 'private' });






  


const Home = () => (
  <div className="ui fluid container">
    <GridTop />

    <h1 className="ui header">All Events</h1>
    <AllEvents />
    <ImageViewer />
    <GetEndpoint />
    
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/event/:id" component={ViewEvent} />
      <Route path="/newEvent" component={NewEvent} />
    </div>
  </Router>
);


class WithProvider extends React.Component {

  render() {
    if (this.props.authState !== 'signedIn') {
      return null;
    } else {
      this.client = new AWSAppSyncClient({
        url: AppSync.graphqlEndpoint,
        region: AppSync.region,
        auth: {
        type: AppSync.authenticationType,
        jwtToken:  async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
        }
      });
        let session = Auth.currentSession();
        console.log(session);

        
    
  
      return (
        <ApolloProvider client={this.client}>
        <Rehydrated>    
          <App authData={this.props.authData} />
        </Rehydrated>
        </ApolloProvider>
      );  
    }
  }
}
export default withAuthenticator(WithProvider, { includeGreetings: true });