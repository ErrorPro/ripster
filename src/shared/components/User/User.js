import React from 'react'

export default class User extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)

    this.state = {
      email: props.user.email
    }
  }

  handleEmailChange(event) {
    this.setState({
      email: event.nativeEvent.target.value
    })
  }

  handleSaveClick() {
    this.props.onEmailChange({
      email: this.state.email
    })
  }

  render() {
    return (
      <div>
        {this.props.user.email}
        <input
          value={this.state.email}
          onChange={::this.handleEmailChange}
        />
        <button onClick={::this.handleSaveClick}>Save</button>
        <button onClick={this.props.onDelete}>Delete</button>
        {this.props.errors.onDelete && <span>{this.props.errors.onDelete.message}</span>}
        {this.props.errors.onEmailChange && <span>{this.props.errors.onEmailChange.message}</span>}
      </div>
    )
  }
}
