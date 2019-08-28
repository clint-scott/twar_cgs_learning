import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './AccountScreen.styles'
import {
  Header
} from '../../../../components'
export default class AccountScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Account' backButton />
  })
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Account!</Text>
      </View>
    )
  }
}
