import {graphql} from 'relay'
import UpdateMutation from 'relay/mutation/UpdateMutation'

export default class SetEmailMutation extends UpdateMutation {
  constructor({id, email}) {
    super()
    this.data = {id, email}
  }

  getQuery() {
    return graphql`
      mutation SetEmail {
        setEmail(userId: ${this.data.id}, email: ${this.data.email}) {
          id
          email
        }
      }
    `
  }

  getOptimisticReferences() {
    return [
      this.data
    ]
  }

  getReferences() {
    return [
      this.getResponse().setEmail
    ]
  }
}
