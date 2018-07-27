import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Checkbox } from 'semantic-ui-react'
import UserCard from './UserCard';




export default class UserMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='usermenu' vertical>
         <Menu.Menu>
            <Menu.Item name= 'profileCard'>
              <UserCard />
            </Menu.Item>
           
          </Menu.Menu>
        

        <Menu.Item name='playdate' active={activeItem === 'playdate'} onClick={this.handleItemClick}>
          <Icon name='grid layout' />
          <Checkbox  toggle label='Playdate'/>           
        </Menu.Item>
        <Menu.Item name='sitterShare' active={activeItem === 'sitterShare'} onClick={this.handleItemClick}>
          <Icon name='grid layout' />
          <Checkbox  toggle label='Sitter Share'/> 
          
        </Menu.Item>
        <Menu.Item name='exchange' active={activeItem === 'exchange'} onClick={this.handleItemClick}>
          <Checkbox  toggle label='Exchange'/>
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}