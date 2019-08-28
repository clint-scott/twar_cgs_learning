import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styles from './CellularDataUsageScreen.styles'
import { List, Switch } from 'react-native-paper'
import {
  Header
} from '../../../../../components'
export default class CellularDataUsageScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Cellular Data Usage' backButton />
  })
  state = {
    isSwitchOn: true,
    type: 'Wi-Fi Only'
  }
  _changeType (type) {
    this.setState({
      type
    })
  }
  render () {
    const { isSwitchOn } = this.state
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <List.Item
          title='Automatic'
          theme={{ colors: { text: '#fff' } }}
          right={props => <Switch
            value={isSwitchOn}
            tintColor='#999'
            onValueChange={() => { this.setState({ isSwitchOn: !isSwitchOn }) }
            }
          />}
          rippleColor='rgba(255, 255, 255, .32)'
          onPress={() => this.setState({ isSwitchOn: !isSwitchOn })}
        />
        <List.Item
          theme={{ colors: { text: '#fff' } }}
          title='Wi-Fi Only'
          right={props => this.state.type === 'Wi-Fi Only' ? <List.Icon {...props} color='#999' icon='check' /> : null}
          rippleColor='rgba(255, 255, 255, .32)'
          onPress={() => this._changeType('Wi-Fi Only')}
        />
        <List.Item
          theme={{ colors: { text: '#fff' } }}
          title='Save Data'
          right={props => this.state.type === 'Save Data' ? <List.Icon {...props} color='#999' icon='check' /> : null}
          rippleColor='rgba(255, 255, 255, .32)'
          onPress={() => this._changeType('Save Data')}
        />
        <List.Item
          theme={{ colors: { text: '#fff' } }}
          title='Maximum Data'
          right={props => this.state.type === 'Maximum Data' ? <List.Icon {...props} color='#999' icon='check' /> : null}
          rippleColor='rgba(255, 255, 255, .32)'
          onPress={() => this._changeType('Maximum Data')}
        />
      </ScrollView>
    )
  }
}
