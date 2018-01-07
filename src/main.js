import React from 'react'
import {render} from 'react-dom'
import {Container, Header, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Hello = () => (
  <Container textAlign='center'>
    <Header as='h1' icon>
      <Icon name='heart' color='red' />
      Hola mundo desde React
      <Header.Subheader>
        Plantilla para iniciar tus proyectos con React JS
      </Header.Subheader>
    </Header>
  </Container>
)
render(
  <Hello />,
  document.getElementById('app')
)
