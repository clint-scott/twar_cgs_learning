import { StyleSheet, StatusBar, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    backgroundColor: '#101010',
    height: StatusBar.currentHeight + 60,
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  middleContainer: {
    position: 'absolute',
    top: 10,
    width: DEVICE.width,
    height: StatusBar.currentHeight + 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftButtonContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftButtonText: {
    color: '#fff'
  },
  rightButtonContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0
  },
  rightButtonText: {
    color: '#fff'
  },
  buttonInsideContainer: {
    flex: 1,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    color: '#fff',
    flex: 1
  },
  textInputContainer: {
    backgroundColor: '#404040',
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  }
})
