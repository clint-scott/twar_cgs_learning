import { StyleSheet, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 34
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  image: {
    flex: 1,
    width: DEVICE.width
  }
})
