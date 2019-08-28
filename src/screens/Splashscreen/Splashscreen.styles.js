import { StyleSheet, Dimensions } from 'react-native'
var DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  logo: {
    width: DEVICE.width / 2,
    height: 100
  }
})
