/* eslint-disable no-console */

import 'source-map-support/register'
import app from '../webserver'

const port = process.env.PORT || '3000'
const ip = process.env.IP || '0.0.0.0'

app.listen(port, ip, () => {
  console.log(`Web server listening port ${port}`)
})
