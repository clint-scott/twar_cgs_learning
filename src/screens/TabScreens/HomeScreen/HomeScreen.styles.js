import { StyleSheet, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  viewContainer: {
    flex: 1
  },
  featuredVideoContainer: {
    height: 300
  },
  featuredVideoImage: {
    width: DEVICE.width,
    height: 300,
    opacity: 0.6
  },
  featuredVideoDetailsContainer: {
    position: 'absolute',
    width: DEVICE.width,
    bottom: 0,
    height: 80
  },
  featuredVideoTagContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  featuredVideoTagText: {
    color: '#fff'
  },
  featuredVideoButtonsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredVideoListButton: {
    padding: 8,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredVideoPlayButton: {
    backgroundColor: '#fff',
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredVideoInfoButton: {
    padding: 8,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredVideoListButtonText: {
    color: '#f2f2f2',
    fontSize: 10
  },
  featuredVideoPlayButtonIcon: {
    marginRight: 10
  },
  featuredVideoPlayButtonText: {
    color: '#000',
    fontWeight: '600'
  },
  featuredVideoInfoButtonText: {
    color: '#f2f2f2',
    fontSize: 10
  },
  listContainer: {
    height: 180,
    paddingVertical: 10,
    marginBottom: 10
  },
  listContainerHeadingText: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 16
  },
  scrollviewContainer: {
    flex: 1,
    paddingLeft: 10
  },
  scrollviewVideoImage: {
    flex: 1
  },
  scrollviewVideoImageContainer: {
    width: 90,
    marginRight: 5
  }
})
