import React, {PropTypes} from 'react'
import childByKey from '../../utils/childByKey'

import './HomePage.css'

export default class HomePage {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const children = childByKey(this.props.children)

    return (
      <div className="HomePage">
        {children('localeButtons')}
        {children('form')}
        {children('users')}
        <div>
          <button onClick={this.props.onUserCreate}>Create new user</button>
          {this.props.errors.onUserCreate && <span>{this.props.errors.onUserCreate.message}</span>}
        </div>
      </div>
    )
  }
}
