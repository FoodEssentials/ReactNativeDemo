import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default ({ onPress, title }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)
