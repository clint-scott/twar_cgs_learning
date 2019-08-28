import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  welcome: {
    fontSize: 20,
    color: '#fff'
  },
  viewContainer: {
    flex: 1
  },
  userImage: {
    width: 35,
    height: 35,
    backgroundColor: '#006600',
    marginLeft: -10
  },
  userDetailContainer: {
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#404040',
    marginHorizontal: 10
  },
  videoImage: {
    width: 80,
    height: 100
  },
  videoStatus: {
    color: 'blue'
  },
  stopButton: {
    backgroundColor: 'red',
    height: 30,
    marginRight: 20,
    marginTop: 35,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stopButtonText: {
    color: '#fff'
  }
})
