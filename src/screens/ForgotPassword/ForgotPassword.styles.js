import { StyleSheet, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE.width,
    backgroundColor: '#000',
    padding: 10
  },
  continueText: {
    marginBottom: 10,
    color: '#aaa9aa',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 13
  },
  recoverContainer: {
    padding: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 5
  },
  recoverText: {
    color: '#fff'
  }
})
