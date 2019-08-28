import { StyleSheet, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#000'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  scrollviewVideoImage: {
    width: DEVICE.width / 3,
    height: 150
  },
  scrollviewVideoImageContainer: {
  }
})
