import { Platform } from 'react-native'
import app from '../../app.json'
import * as GoogleSignIn from 'expo-google-sign-in'
import Constants from 'expo-constants'

export const setupGoogleSignIn = async () => {
  //check if expo client to allow login in client
  const isInClient = Constants.appOwnership === 'expo'
  if (isInClient) {
    GoogleSignIn.allowInClient()
  }

  const clientIdForUseInTheExpoClient = Platform.select({
    android: app.settings.android.expo_auth_client_id,
    ios: app.settings.ios.expo_auth_client_id,
  })
  const clientIdForUseInStandalone = Platform.select({
    android: app.settings.android.auth_client_id,
    ios: app.settings.ios.auth_client_id,
  })

  const clientId = isInClient ? clientIdForUseInTheExpoClient : clientIdForUseInStandalone

  await GoogleSignIn.initAsync({
    isOfflineEnabled: false,
    isPromptEnabled: true,
    clientId,
  })
}
