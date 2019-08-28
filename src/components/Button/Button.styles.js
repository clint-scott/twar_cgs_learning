import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  button: {
    flex: 1,
    backgroundColor: '#db0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  facebookButton: {
    flex: 1,
    backgroundColor: '#3B5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row'
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10
  }
})
