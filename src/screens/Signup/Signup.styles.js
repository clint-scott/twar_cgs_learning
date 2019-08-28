import { StyleSheet, Dimensions } from 'react-native'
let DEVICE = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  continueText: {
    marginBottom: 10,
    color: '#aaa9aa',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 13
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20
  },
  slideScroll: {
    flex: 1,
    padding: 20,
    paddingBottom: 0
  },
  scrollview: {
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  heading: {
    color: '#000',
    fontSize: 27,
    fontWeight: 'bold'
  },
  heading2: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10
  },
  heading3: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 34
  },
  description: {
    color: '#404040',
    fontSize: 17
  },
  icon: {
    marginBottom: 20,
    marginRight: 10
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: -10
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    height: 60
  },
  absoluteBottom: {
    position: 'absolute',
    bottom: 0,
    zIndex: 99999,
    width: DEVICE.width,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bottom: {
    flexDirection: 'row',
    marginVertical: 10
  },
  checkStyle: {
    color: '#000',
    fontSize: 16,
    marginTop: 5
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  image: {
    flex: 1
  },
  planContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70
  },
  plan: {
    flex: 1
  },
  planRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  planHeading: {
    color: '#fff',
    fontSize: 18
  },
  planHeaderContainer: {
    backgroundColor: '#f08d93',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70
  },
  planHeaderSelected: {
    backgroundColor: '#db0000'
  },
  planTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  planText: {
    color: '#999',
    fontSize: 14
  },
  planIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  topicText: {
    color: '#000',
    marginBottom: 10,
    fontSize: 12
  }
})
