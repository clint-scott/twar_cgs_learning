import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    height: 100,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#e6e6e6',
    marginBottom: 10
  },
  backgroundContainer: {
    width: Dimensions.get('screen').width - 20,
    flex: 1
  },
  backgroundImageContainer: {
    borderRadius: 10,
    opacity: 0.7
  },
  titleText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600'
  },
  tagText: {
    color: '#fff',
    fontSize: 10,
    backgroundColor: '#f44336',
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    position: 'absolute',
    top: -15
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    opacity: 1
  }
})
