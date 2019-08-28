import { StyleSheet, Dimensions } from 'react-native'
var DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  logo: {
    width: DEVICE.width / 2,
    height: 100
  },
  headVideoContainer: {
    width: DEVICE.width,
    height: 200
  },
  featuredVideoImage: {
    width: DEVICE.width,
    height: 300,
    opacity: 0.6
  },
  headVideoPlayIconContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    left: (DEVICE.width - 80) / 2,
    zIndex: 99999
  },
  videoDetailsContainer: {
    backgroundColor: '#000',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#404040'
  },
  videoNameHeading: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600'
  },
  videoNameDetailsContainer: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  videoNameDetails: {
    color: '#fff',
    marginRight: 10
  },
  green: {
    color: '#5cc173'
  },
  videoNameDescription: {
    color: '#d2d2d2',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10
  },
  videoNameAbout: {
    color: '#929292',
    fontSize: 11
  },
  bold: {
    fontWeight: '600'
  },
  videoButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  addToMyListButton: {
    padding: 8,
    paddingTop: 0,
    width: 80,
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addToMyListButtonIcon: {},
  addToMyListButtonText: {
    color: '#f2f2f2',
    fontSize: 16
  },
  videoRateButton: {
    padding: 8,
    width: 80,
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  videoRateButtonIcon: {},
  videoRateButtonText: {
    color: '#f2f2f2',
    fontSize: 16
  },
  videoShareButton: {
    padding: 8,
    width: 80,
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  videoShareButtonIcon: {},
  videoShareButtonText: {
    color: '#f2f2f2',
    fontSize: 16
  },
  viewContainer: {
    flex: 1
  },
  tabButtonMainContainer: {
    flex: 1,
    height: 60,
    paddingHorizontal: 10
  },
  tabButtonContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  activeTab: {
    borderTopWidth: 5,
    borderTopColor: '#db0000'
  },
  tabButtonText: {
    color: '#fff'
  },
  videoMainContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0
  },
  episodesVideoContainer: {
    flex: 1,
    height: 100,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2
  },
  episodesVideoImageContainer: {
    height: 90,
    width: 110
  },
  episodesVideoImage: {
    flex: 1
  },
  episodesVideoDetailsContainer: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 0
  },
  episodesVideoDetailsHeading: {
    color: '#fff',
    fontWeight: '600'
  },
  episodesVideoDetailsDescription: {
    fontSize: 12,
    color: '#999'
  },
  episodesVideoDetailsTime: {
    fontSize: 12,
    color: '#999'
  },
  trailersVideoContainer: {
    flex: 1,
    height: 100,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2
  },
  trailersVideoImageContainer: {
    height: 90,
    width: 110
  },
  trailersVideoImage: {
    flex: 1
  },
  trailersVideoDetailsContainer: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 0
  },
  trailersVideoDetailsHeading: {
    color: '#fff',
    fontWeight: '600'
  },
  trailersVideoDetailsDescription: {
    fontSize: 12,
    color: '#999'
  },
  trailersVideoDetailsTime: {
    fontSize: 12,
    color: '#999'
  }
})
