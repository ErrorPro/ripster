import React from 'react'
import {createContainer, graphql} from 'relay'

import {UserContainer} from '../User'
import {LocaleButtonsContainer} from '../LocaleButtons'
import {SignInFormContainer} from '../SignInForm'
import HomePage from './HomePage'

import CreateUserMutation from '../../mutations/CreateUserMutation'

class HomePageContainer {
  render() {
    const {users} = this.props

    return (
      <HomePage {...this.props}>

        <LocaleButtonsContainer key="localeButtons" />

        <SignInFormContainer key="form" />

        <div key="users">
          {users.map(user =>
            <UserContainer key={user.id} user={user} />
          )}
        </div>

      </HomePage>
    )
  }
}

export default createContainer(HomePageContainer, {
  queries: {
    users: graphql`
      {
        users {
          ${UserContainer.getQuery('user')}
        }
      }
    `
  },

  mutations: {
    onUserCreate: () => new CreateUserMutation({
      email: String(Math.random()) + '@example.com'
    })
  }
})
