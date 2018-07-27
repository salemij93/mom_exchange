import React, { Component } from 'react'
import Uploadpic from './Uploadpic';
import CreditCardInfo from './CreditCardInfo';


import { Popup, Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class UpdateUserProfile extends Component {
state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      
        
      <div>
      <Button onClick={this.show('blurring')}>Edit Profile</Button>
        <Modal dimmer={dimmer} className="scrolling" open={open} size='large' onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content >
            <Uploadpic />
            <CreditCardInfo />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>

      </div>
      
    )
  }
}

export default UpdateUserProfile
