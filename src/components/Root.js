import React, { Component } from 'react'
import {Container, Header} from 'semantic-ui-react'
class Root extends Component {
  render () {
    return (
      <Container textAlign='center'>
        <Header as='h1'>Hello World</Header>
      </Container>
    )
  }
}

export default Root
