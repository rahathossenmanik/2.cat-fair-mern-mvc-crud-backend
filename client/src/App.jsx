import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Container, Menu, Segment } from 'semantic-ui-react'

import Home from './pages/Home'
import Authors from './pages/authors'
import Books from './pages/books'

const App = () => {
  return (
    <Container>
      <Router>
        <Segment inverted>
          <Menu as='nav' inverted pointing secondary>
            <Menu.Item as={NavLink} to='/' exact name='inicio' />
            <Menu.Item as={NavLink} to='/authors' name='authors' />
            <Menu.Item as={NavLink} to='/books' name='books' />
          </Menu>
        </Segment>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/authors' component={Authors} />
          <Route path='/books' component={Books} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
