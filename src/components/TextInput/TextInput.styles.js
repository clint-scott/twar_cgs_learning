import { StyleSheet } from 'react-native'
// let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 5
  },
  titleText: {
    width: 50,
    textAlign: 'right',
    color: '#fff',
    fontWeight: '600'
  },
  textInput: {
    flex: 2,
    paddingLeft: 10,
    color: '#fff'
  }
})
