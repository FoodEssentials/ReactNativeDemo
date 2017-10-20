import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { getProductByUPC } from '../../api'
import Button from '../../components/Button'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff'
  },
  textInput: {
    height: 40,
    margin: 10,
    paddingLeft: 5,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#444'
  },
  jsonBlob: {
    fontFamily: 'monospace'
  }
})

export default class Lookup extends Component {
  state = {
    product: null,
    text: ''
  }

  onChangeText = text => {
    this.setState({ text })
  }

  submit = async () => {
    const product = await getProductByUPC(this.state.text)

    if (product) {
      this.setState({ product })
    }
  }

  render() {
    const { product, text } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.submit}
          underlineColorAndroid="transparent"
        />

        <Button title="Submit" onPress={this.submit} />

        {product && (
          <ScrollView>
            <Text style={styles.jsonBlob}>{JSON.stringify(product, null, 2)}</Text>
          </ScrollView>
        )}
      </View>
    )
  }
}
