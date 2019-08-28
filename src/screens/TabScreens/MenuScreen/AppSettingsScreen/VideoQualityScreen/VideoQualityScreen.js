import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styles from './VideoQualityScreen.styles'
import { List } from 'react-native-paper'
import {
  Header
} from '../../../../../components'
export default class VideoQualityScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Video Quality' backButton />
  })
  state = {
    quality: 'Standard'
  }
  _changeVideoQuality (quality) {
    this.setState({
      quality
    })
  }
  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <List.Section theme={{ colors: { text: '#fff' } }} title='VIDEO PLAYBACK'>
          <List.Item
            theme={{ colors: { text: '#fff' } }}
            title='Standard'
            description='Downloads faster and uses less storage'
            right={props => this.state.quality === 'Standard' ? <List.Icon {...props} color='#999' icon='check' /> : null}
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this._changeVideoQuality('Standard')}
          />
          <List.Item
            theme={{ colors: { text: '#fff' } }}
            title='Higher'
            description='Uses more storage'
            right={props => this.state.quality === 'Higher' ? <List.Icon {...props} color='#999' icon='check' /> : null}
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this._changeVideoQuality('Higher')}
          />
        </List.Section>
      </ScrollView>
    )
  }
}
