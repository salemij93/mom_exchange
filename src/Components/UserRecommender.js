import React, {Component} from 'react';
import ForumChat from './ForumChat';


import { Icon, Item, Segment, Button, Card, Image, Grid} from 'semantic-ui-react';

const UserRecommender = () => (

	<Grid className = 'topGridUser' stackable doubling columns={3}>
	<Grid.Row >

  <Grid.Column >

    <Card centered>
      <Card.Content>
        <Image floated='right' size='tiny' src='' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Segment inverted>
      <Card.Content extra>
         <Grid centered columns={3} >
    	
    		<Grid.Column textAlign='centered' >
    			
    			<Icon inverted circular color='red' name='user' />
    		</Grid.Column>

    		<Grid.Column textAlign='centered' >
    			<Icon inverted circular color='green' name='user' />
    		</Grid.Column>

    		<Grid.Column textAlign='centered' >
    			<Icon inverted circular color='blue' name='user' />
    		</Grid.Column>
    	</Grid>
      </Card.Content>
      </Segment>
    </Card>

      </Grid.Column>

    <Grid.Column >

    <Card>
      <Card.Content centered>
        <Image floated='right' size='tiny' src='' />
        <Card.Header>
          Molly Thomas
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Segment inverted>
      <Card.Content extra>
         <Grid centered columns={3} >
    	
    		<Grid.Column textAlign='centered' >
    			
    			<Icon inverted circular color='red' name='user' />
    		</Grid.Column>

    		<Grid.Column textAlign='centered' >
    			<Icon inverted circular color='green' name='user' />
    		</Grid.Column>

    		<Grid.Column textAlign='centered' >
    			<Icon inverted circular color='blue' name='user' />
    		</Grid.Column>
    	</Grid>
      </Card.Content>
      </Segment>
    </Card>

      </Grid.Column>

    <Grid.Column >

    <Card centered>
      <Card.Content>
        <Image floated='right' size='tiny' src='' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Segment inverted>
      <Card.Content extra>
      
        <Grid centered columns={3} >
    	
    		<Grid.Column textAlign='centered' >
    			
    			<Icon inverted circular color='red' name='user' />
    		</Grid.Column>

    		<Grid.Column textAlign='centered' >
    			<Icon inverted circular color='green' name='user' />
    		</Grid.Column>

    		<Grid.Column textAlign='centered' >
    			<Icon inverted circular color='blue' name='user' />
    		</Grid.Column>
    	</Grid>
           			
        
      </Card.Content>
      </Segment>
    </Card>

  </Grid.Column>

  </Grid.Row>
  
  <Grid.Row stretched centered>


    <div className='forumChat'>
      <ForumChat />
    </div>

  </Grid.Row>





	

  </Grid>
)


export default UserRecommender