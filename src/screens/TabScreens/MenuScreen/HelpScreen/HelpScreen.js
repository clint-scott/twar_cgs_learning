import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import styles from './HelpScreen.styles'
import { List, Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Header,
  Button
} from '../../../../components'
export default class HelpScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header style={{ backgroundColor: '#fff' }} buttonColor='#101010' navigation={navigation} title='Neoflix' backButton />
  })
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.heading}>Find help online!</Text>
          <List.Item
            theme={{ colors: { text: '#1570d1' } }}
            title='Help Center'
            style={{ height: 40 }}
            left={props => <List.Icon {...props} icon='exit-to-app' />}
          />
          <List.Item
            theme={{ colors: { text: '#1570d1' } }}
            title='Update payment method'
            style={{ height: 40 }}
            left={props => <List.Icon {...props} icon='credit-card' />}
          />
          <List.Item
            theme={{ colors: { text: '#1570d1' } }}
            title='Request a title'
            style={{ height: 40 }}
            left={props => <List.Icon {...props} icon='assignment' />}
          />
          <List.Item
            theme={{ colors: { text: '#1570d1' } }}
            style={{ height: 40 }}
            title='Update a password'
            left={props => <List.Icon {...props} icon='https' />}
          />
          <List.Item
            theme={{ colors: { text: '#1570d1' } }}
            title='Cancel account'
            style={{ height: 40 }}
            left={props => <List.Icon {...props} icon='block' />}
          />
          <List.Item
            theme={{ colors: { text: '#1570d1' } }}
            title='Fix a connection problem'
            style={{ height: 40 }}
            left={props => <List.Icon {...props} icon='build' />}
          />
          <View style={styles.customerContactContainer}>
            <Text style={styles.contactHeading}>Contact</Text>
            <Text style={styles.contactHeading}>Neoflix Customer Services</Text>
            <Text style={styles.contactDescription}>We'll connect the call for free using your internet{'\n'}connection.</Text>
            <Button onPress={() => console.log('Contact Pressed!')} buttonStyle={{ flexDirection: 'row', backgroundColor: '#000', flex: 0, width: 130 }} text='CALL'>
              <Icon name='ios-call' size={20} color='#fff' />
            </Button>
          </View>
        </View>
        <StatusBar barStyle='dark-content' />
      </View>
    )
  }
}
