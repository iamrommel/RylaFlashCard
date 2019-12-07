let sentryInstance
export const setupSentry = async () => {
  // Sentry.enableInExpoDevelopment = true
  // sentryInstance = await Sentry.config(app.settings.sentry.publicDsn).install()
}

export const logToSentry = ({ message, options, error, extra }) => {
  console.info(error, 'error from sentry')
  // sentryInstance = sentryInstance || Sentry
  // if (error)
  //   sentryInstance.captureException(error, { extra })
  // else
  //   sentryInstance.captureMessage(message, options)
}
