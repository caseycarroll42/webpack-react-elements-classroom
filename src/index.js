import React from 'react';
import {render} from 'react-dom';
import indexHtml from './index.html';
import CustomElWrapper from './custom-el-wrapper'
import ShadowComponent from './shadow-component'

class App extends React.Component {
  render () {
    return (
      <div>
        <CustomElWrapper />
        <ShadowComponent />
        <h1>I'm just a normal h1 living in the DOM</h1>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));