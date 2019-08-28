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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20
  },
  slideScroll: {
    flex: 1,
    padding: 20,
    paddingBottom: 0
  },
  scrollview: {
    paddingBottom: 100
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
    fontSize: 17,
    marginBottom: 20
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
    width: DEVICE.width - 40,
    minHeight: 140,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    paddingBottom: 0
  },
  planDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  userDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40
  },
  userDetailsEmail: {
    color: '#4d4d4d',
    fontSize: 16
  },
  link: {
    color: '#1d7fe9',
    fontWeight: '600',
    fontSize: 16
  },
  planDetailsColumnLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  planDetailsColumnRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  planDetailsCost: {
    color: '#000',
    fontSize: 21,
    fontWeight: 'bold'
  },
  formView: {
  }
})
