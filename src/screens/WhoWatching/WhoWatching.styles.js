import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 40
  },
  insideContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  userProfile: {
    width: 100,
    height: 120,
    marginRight: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeUserProfileText: {
    color: '#fff'
  },
  userProfileText: {
    color: '#999',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 2
  },
  userProfileImage1: {
    width: 98,
    height: 98,
    backgroundColor: '#006600'
  },
  userProfileImage2: {
    width: 98,
    height: 98,
    backgroundColor: '#662900'
  },
  userProfileImage3: {
    width: 98,
    height: 98,
    backgroundColor: '#001a66'
  },
  userProfileImage4: {
    width: 98,
    height: 98,
    backgroundColor: '#666600'
  },
  activeProfile: {
    borderWidth: 2,
    borderColor: '#fff'
  },
  userProfileIconContainer: {
    width: 98,
    height: 98,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#101010'
  },
  manageProfileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    flexDirection: 'row',
    marginTop: 10
  },
  manageProfileIcon: {
    marginRight: 10
  },
  manageProfileText: {
    color: '#999'
  },
  userProfileEditIconContainer: {
    position: 'absolute',
    zIndex: 999,
    left: 24,
    top: 24,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 40
  },
  addIconContainer: {
    width: 98,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
