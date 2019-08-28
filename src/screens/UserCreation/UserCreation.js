import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './UserCreation.styles'
import {
  Header,
  Button
} from '../../components'
export default class UserCreation extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Neoflix' rightButton rightButtonText='Sign In' rightButtonFunc={() => navigation.navigate('Login')} />
  })
  state = {
    tab: this.props.navigation.getParam('selectedSegment')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.heading}>Download and dash</Text>
          <Text style={styles.text}>Save your data, aligator. Watch offline on the{'\n'}tube, train... or tractor</Text>
          <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/userCreation.png')} />
        </View>
        <Button onPress={() => this.props.navigation.navigate('Signup')} text='JOIN FREE FOR A MONTH' />
      </View>
    )
  }
}
