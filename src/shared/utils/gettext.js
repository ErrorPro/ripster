import Jed from 'jed'

/* eslint-disable camelcase */
function prepareMesages({domain, locale_data: {messages}}) {
  return {
    domain,
    locale_data: {
      messages: Object.keys(messages)
        .reduce((acc, key) => (
          acc[key] = Array.isArray(messages[key])
            ? messages[key].slice(1)
            : messages[key],
          acc
        ), {})
    }
  }
}
/* eslint-enable camelcase */

export function gettext(messages) {
  const jed = new Jed(prepareMesages(messages))

  return (message, ...args) => jed.translate(message).fetch(...args)
}
