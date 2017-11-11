import React from 'react';
import {render} from 'react-dom';
import indexHtml from './index.html';
import CustomElWrapper from './custom-el-wrapper'

class App extends React.Component {
  render () {
    return (
      <CustomElWrapper />
    )
  }
}

render(<App/>, document.getElementById('app'));