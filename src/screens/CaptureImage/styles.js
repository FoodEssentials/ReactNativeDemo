import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  header: {
    flex: 0
  },
  heading: {
    fontSize: 40,
    textAlign: 'center'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  image: {
    width: 400,
    height: 400
  },
  footer: {
    flex: 0
  }
})
