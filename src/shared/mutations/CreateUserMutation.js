import {graphql} from 'relay'
import CreateMutation from 'relay/mutation/CreateMutation'

export default class CreateUserMutation extends CreateMutation {
  constructor({email}) {
    super()
    this.data = {email}
  }

  getQuery() {
    return graphql`
      mutation CreateUser {
        createUser(email: ${this.data.email}) {
          id
          email
        }
      }
    `
  }

  getReferences() {
    return [
      this.getResponse().createUser
    ]
  }
}
