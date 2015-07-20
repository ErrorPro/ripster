import React from 'react'
import {render} from 'react-dom'

import Router from 'react-router'
import {history} from 'react-router/lib/BrowserHistory'
import routes from '../shared/routes'

import createStore from '../shared/createStore'
import {Provider} from 'react-redux'

import {Relay, RelayContext} from 'relay'

function initApp() {
  const store = createStore(window.state.store)
  const relay = new Relay(process.env.GRAPHQL_URL || '/_graphql')

  render(
    <RelayContext relay={relay}>
      <Provider store={store}>
        {() => (
          <Router history={history} children={routes} />
        )}
      </Provider>
    </RelayContext>,
    document.getElementById('app')
  )
}

initApp()
