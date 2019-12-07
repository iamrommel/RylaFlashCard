import React, { useEffect, useState } from 'react'
import { StyleProvider, Container } from 'native-base'
import getTheme from './native-base-theme/components'
import commonColor from './native-base-theme/variables/commonColor'
import { StatusBar } from 'react-native'
import { loadAsync } from 'expo-font'
import { logToSentry } from './src/config/sentry'
import AppNavigator from './src/AppNavigator'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    //self invoke for async operation which is legal on react hooks
    ;(async () => {
      try {
        //setup the new font
        await loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        })

        //set the flag the everything is ready
        setReady(true)
      } catch (error) {
        logToSentry(error)
      }
    })()
  }, [])

  return (
    <React.Fragment>
      <StatusBar hidden />
      <StyleProvider style={getTheme(commonColor)}>
        <AppNavigator />
      </StyleProvider>
    </React.Fragment>
  )
}
