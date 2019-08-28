import { StyleSheet, StatusBar } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight
  },
  userProfilesContainer: {
    padding: 10
  },
  userProfile: {
    width: 80,
    height: 100,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeUserProfileText: {
    color: '#fff',
    fontWeight: '600'
  },
  userProfileText: {
    color: '#999',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 2
  },
  userProfileImage1: {
    width: 78,
    height: 78,
    backgroundColor: '#006600'
  },
  userProfileImage2: {
    width: 78,
    height: 78,
    backgroundColor: '#662900'
  },
  userProfileImage3: {
    width: 78,
    height: 78,
    backgroundColor: '#001a66'
  },
  userProfileImage4: {
    width: 78,
    height: 78,
    backgroundColor: '#666600'
  },
  activeProfile: {
    borderWidth: 2,
    borderColor: '#fff'
  },
  userProfileIconContainer: {
    width: 78,
    height: 78,
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
  caption: {
    marginLeft: 15,
    color: '#404040'
  }
})
