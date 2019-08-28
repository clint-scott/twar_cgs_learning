import React, { Component } from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import styles from './Splashscreen.styles'
export default class Splashscreen extends Component {
  static navigationOptions = { header: null }
  componentDidMount () {
    setTimeout(() => {
      this.props.navigation.replace('UserCreation')
    }, 1500)
  }
  state={
    loading: true
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/logo.png')} />
        <ActivityIndicator size={50} color='#db0000' />
      </View>
    )
  }
}
