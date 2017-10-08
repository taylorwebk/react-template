import React, { Component } from 'react'
import img1 from './fuck.jpg'
import './styles.css'
class Root extends Component {
  render () {
    return (
      <div>
        <img src={img1} />
        <h1>HELLO FUCKING WORLD...!!</h1>
        <p>Mirenme todo estoy usando React con webpack + ES6 + JSX...!!</p>
        <p>Felicidades, ahora puedes ir a por una cerveza.</p>
      </div>
    )
  }
}

export default Root
