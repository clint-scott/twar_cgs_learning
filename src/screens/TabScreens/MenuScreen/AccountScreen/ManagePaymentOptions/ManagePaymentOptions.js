import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './ManagePaymentOptions.styles'
import {
  Header
} from '../../../components'
export default class ManagePaymentOptions extends Component {
  static navigationOptions = { header: <Header title={'Browse'} titleStyle='left' rightButton rightButtonText='Filter' /> }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ManagePaymentOptions!</Text>
      </View>
    )
  }
}
