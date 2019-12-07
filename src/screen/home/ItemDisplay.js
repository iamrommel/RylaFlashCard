import React, { useState, useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { Button, StyleSheet, View } from 'react-native'

import variables from '../../../native-base-theme/variables/commonColor'
import old from './old.json'
import rocket from './rocket.json'

// width: variables.deviceWidth - 20,
//   height: variables.deviceHeight - 20,
//{ uri: 'https://assets5.lottiefiles.com/packages/lf20_6TJVIK.json' }
export const ItemDisplay2 = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <LottieView
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#eee',
        }}
        source={old}
      />
    </View>
  )
}

export class ItemDisplay extends React.Component {
  componentDidMount() {
    //this.animation.play()
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset()
    this.animation.play()
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation
          }}
          autoPlay
          autoSize
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          //source={{ uri: 'https://assets1.lottiefiles.com/packages/lf20_lIfLg9.json' }}
          source={rocket}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        <View style={styles.buttonContainer}>
          <Button title="Restart Animation" onPress={this.resetAnimation} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
})
