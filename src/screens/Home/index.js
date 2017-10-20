import React from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '../../components/Button'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  link: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button onPress={() => navigation.navigate('CaptureImage')} title="Capture Image" />
    <Button onPress={() => navigation.navigate('Lookup')} title="Lookup UPC" />
  </View>
)

Home.navigationOptions = {
  title: 'Home'
}

export default Home
