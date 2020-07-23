import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from './icon'
import './style'

ReactDOM.render(<div>
  <Icon name="wechat" className="test"/>
  <Icon name="qq"/>
  <Icon name="alipay"/>
  </div>, document.getElementById('root'))