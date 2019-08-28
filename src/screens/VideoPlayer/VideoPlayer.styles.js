import { StyleSheet, Dimensions } from 'react-native'
var DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden'
  },
  innerProgressCompleted: {
    height: 10,
    backgroundColor: '#cccccc'
  },
  innerProgressRemaining: {
    height: 10,
    backgroundColor: '#2C2C2C'
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12
  },
  playIconContainer: {
    position: 'absolute',
    width: DEVICE.height,
    height: DEVICE.width,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999
  }
})
