import React from 'react'
import { Card, Icon, Dropdown, Image, Menu } from 'semantic-ui-react'

const extra = (
  <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
        
  
)

const userpic =(
  <Image src='' size='medium' centered/>
)

const UserCard = () => (
  <Card fluid
    image = {userpic}
    header='Your Name'
    meta='Chicago'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with her cat.'
    extra={extra}
  />
)

export default UserCard