import {graphql} from 'relay'
import DeleteMutation from 'relay/mutation/DeleteMutation'

export default class DeleteUserMutation extends DeleteMutation {
  constructor({id}) {
    super()
    this.data = {id}
  }

  getQuery() {
    return graphql`
      mutation DeleteUser {
        deleteUser(id: ${this.data.id})
      }
    `
  }

  getOptimisticReferences() {
    return [
      this.data.id
    ]
  }

  getReferences() {
    return [
      this.data.id
    ]
  }
}
