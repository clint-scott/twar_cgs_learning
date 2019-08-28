import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Login.styles'
import {
  Header,
  TextInput,
  Button
} from '../../components'
import { TouchableRipple } from 'react-native-paper'
export default class Login extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Neoflix' backButton />
  })
  state = {
    text: '',
    email: '',
    password: '',
    passwordHide: true
  }
  _signIn () {
    console.log('Signing In')
    this.props.navigation.navigate('Dashboard')
  }
  _onChangeEmail (text) {
    this.setState({
      email: text
    })
  }
  _onChangePassword (text) {
    this.setState({
      password: text
    })
  }
  _toggleSecureInput () {
    this.setState({
      passwordHide: !this.state.passwordHide
    })
  }
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => this._onChangeEmail(text)} value={this.state.email} placeholder='Email' />
        <TextInput type='secure' secure={this.state.passwordHide} onChangeText={(text) => this._onChangePassword(text)} value={this.state.email} onPressButton={() => this._toggleSecureInput()} placeholder='Password' />
        <Button onPress={() => this._signIn()} text='Sign In' />
        <TouchableRipple style={styles.recoverContainer} rippleColor='rgba(255, 255, 255, .32)' onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.recoverText}>Recover Password</Text>
        </TouchableRipple>
      </View>
    )
  }
}
