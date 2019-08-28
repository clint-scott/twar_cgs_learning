import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './ManageAddress.styles'
import {
  Header
} from '../../../components'
export default class ManageAddress extends Component {
  static navigationOptions = { header: <Header title={'Browse'} titleStyle='left' rightButton rightButtonText='Filter' /> }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ManageAddress!</Text>
      </View>
    )
  }
}
