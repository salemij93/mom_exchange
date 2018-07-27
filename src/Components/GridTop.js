import React from 'react'
import { Grid, Image, Menu, Checkbox, Dropdown, Segment, Label} from 'semantic-ui-react'
import SidebarLeftUncover from './SidebarLeftUncover';
import UserCard from './UserCard';
import CreditCardPopup from './CreditCardPopup';
import UpdateUserProfile from './UpdateUserProfile';
import ChatComponent from './ChatComponent';
import UserRecommender from './UserRecommender';


//import UserMenu from './UserMenu';


const GridTop = () => (
  <Grid className = 'topGrid' stackable doubling columns='equal'>
    <Grid.Column >
      <Menu fluid vertical>
          <Menu.Item className='header' name = 'userinfocard'>
            <UserCard />
          </Menu.Item>
          <Menu.Item name='playdate' >
            <Checkbox id='playdateCheckbox' toggle label='Playdate' />           
          </Menu.Item>
          <Menu.Item name='sitterShare'>
            <Checkbox  toggle label='Sitter Share'/>
          </Menu.Item>
          <Menu.Item name='exchange'>
            <Checkbox  toggle label='Exchange'/>
          </Menu.Item>
          

        <Menu.Item>
          <UpdateUserProfile />
        </Menu.Item>

      </Menu>
    </Grid.Column>

    <Grid.Column width={9}>
     <UserRecommender/>
    </Grid.Column>
    <Grid.Column  className ='chats'>
      <ChatComponent/>
    </Grid.Column>
  </Grid>
)

export default GridTop