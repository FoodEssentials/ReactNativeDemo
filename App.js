import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './src/screens/Home'
import CaptureImage from './src/screens/CaptureImage'
import Lookup from './src/screens/Lookup'

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
    },
    CaptureImage: {
      screen: CaptureImage,
      navigationOptions: {
        title: 'Capture Image'
      }
    },
    Lookup: {
      screen: Lookup,
      navigationOptions: {
        title: 'Lookup UPC'
      }
    }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      backgroundColor: '#fff'
    }
  }
)
