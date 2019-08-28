import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  caption: {
    color: '#999'
  },
  storageContainer: {
    marginTop: -20
  },
  storageInsideContainer: {
    paddingHorizontal: 20
  },
  storageHintContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  storageInsideElementsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storageInsideElementsText: {
    color: '#999'
  },
  freeSquare: {
    width: 5,
    height: 5,
    backgroundColor: '#fff',
    marginRight: 5
  },
  NeoflixSquare: {
    width: 5,
    height: 5,
    backgroundColor: '#1e88e5',
    marginRight: 5
  },
  usedSquare: {
    width: 5,
    height: 5,
    backgroundColor: '#999',
    marginRight: 5
  }
})
