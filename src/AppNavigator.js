import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { NavKeys } from './config/NavKeys'

import Home from './screen/home'

const stackNavigatorDefaultOptions = { headerMode: 'none' }

const AppMainNavigator = createStackNavigator(
  {
    [NavKeys.Home]: Home,
  },
  stackNavigatorDefaultOptions
)

export default createAppContainer(AppMainNavigator)
