import { StyleSheet, StatusBar, Dimensions } from 'react-native'
const DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: StatusBar.currentHeight + 100,
    paddingTop: StatusBar.currentHeight
  },
  logo: {
    width: DEVICE.width / 1.2,
    height: 100
  }
})
