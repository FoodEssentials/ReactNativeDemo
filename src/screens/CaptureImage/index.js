import React, { Component } from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import { ImagePicker } from 'expo'

import { Button } from '../../components'
import styles from './styles'

export default class CaptureImage extends Component {
  state = {
    image: null
  }

  captureImage() {
    return ImagePicker.launchCameraAsync({
      base64: true,
      exif: true
    })
  }

  onCapture = async () => {
    const { cancelled, ...image } = await this.captureImage()

    if (!cancelled) {
      this.setState({
        image
      })
    }
  }

  render() {
    const { image, product } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          {!!image && (
            <Image
              style={styles.image}
              source={{ uri: `data:image/jpeg;base64,${image.base64}` }}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={styles.footer}>
          <Button title="Capture" onPress={this.onCapture} />
        </View>
      </View>
    )
  }
}
