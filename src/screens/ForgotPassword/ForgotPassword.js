import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './ForgotPassword.styles'
import {
  Header,
  TextInput,
  Button
} from '../../components'
export default class ForgotPassword extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Forgot Password' backButton />
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
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => this._onChangeEmail(text)} value={this.state.email} placeholder='Email' />
        <Button onPress={() => this._signIn()} text='Recover' />
      </View>
    )
  }
}
