import { StyleSheet, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    width: DEVICE.width - 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d2d2d2'
  },
  titleText: {
    textAlign: 'left',
    color: '#bababa',
    fontWeight: '600',
    height: 30
  },
  textInput: {
    height: 40,
    width: DEVICE.width - 70,
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d2d2d2'
  },
  addressResultContainer: {
    padding: 10,
    width: DEVICE.width - 70
  },
  addressResultHeadingText: {
    color: '#bababa',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10
  },
  addressResultText: {
    marginTop: 5
  }
})
