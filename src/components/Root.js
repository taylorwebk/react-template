import React, { Component } from 'react'
import {Container, Header, Icon} from 'semantic-ui-react'
class Root extends Component {
  render () {
    return (
      <Container textAlign='center'>
        <Header color='teal' as='h1' icon>
          <Icon name='heart' color='red' />
          <Header.Content>
            I love {'<React />'}....!!!
          </Header.Content>
        </Header>
      </Container>
    )
  }
}

export default Root
