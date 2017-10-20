import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import CaptureImage from '../index'

describe('Main', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CaptureImage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
