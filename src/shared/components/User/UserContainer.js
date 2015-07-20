import {createContainer, graphql} from 'relay'

import User from './User'
import DeleteUserMutation from '../../mutations/DeleteUserMutation'
import SetEmailMutation from '../../mutations/SetEmailMutation'

export default createContainer(User, {
  queries: {
    user: graphql`
      User {
        id
        email
      }
    `
  },

  mutations: {
    onDelete: (args, props) => new DeleteUserMutation({
      id: props.user.id
    }),

    onEmailChange: (args, props) => new SetEmailMutation({
      id: props.user.id,
      email: args.email
    })
  }
})
