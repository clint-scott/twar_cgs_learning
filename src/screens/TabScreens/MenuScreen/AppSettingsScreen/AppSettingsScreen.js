import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './AppSettingsScreen.styles'
import { List, Switch, Caption, ProgressBar } from 'react-native-paper'
import {
  Header
} from '../../../../components'
export default class AppSettingsScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='App Settings' backButton />
  })
  state = {
    isSwitchOn: true
  }
  render () {
    const { isSwitchOn } = this.state
    const { navigation } = this.props
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <List.Section theme={{ colors: { text: '#fff' } }} title='VIDEO PLAYBACK'>
          <List.Item
            theme={{ colors: { text: '#fff' } }}
            title='Cellular Data Usage'
            description='Automatic'
            right={props => <List.Icon {...props} color='#999' icon='chevron-right' />}
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => navigation.navigate('CellularDataUsage')}
          />
        </List.Section>
        <List.Section theme={{ colors: { text: '#fff' } }} title='DOWNLOADS'>
          <List.Item
            title='Wi-Fi Only'
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
            title='Video Quality'
            description='Standard'
            right={props => <List.Icon {...props} color='#999' icon='chevron-right' />}
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => navigation.navigate('VideoQuality')}
          />
          <List.Item
            title='Delete All Downloads'
            right={props => <List.Icon {...props} color='#999' icon='delete' />}
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => console.log('Pressed!')}
          />
        </List.Section>
        <View style={styles.storageContainer}>
          <List.Section theme={{ colors: { text: '#fff' } }} title='STORAGE'>
            <View style={styles.storageInsideContainer}>
              <Caption style={styles.caption}>iPhone X</Caption>
              <ProgressBar progress={0.8} color={'#fff'} />
              <View style={styles.storageHintContainer}>
                <View style={styles.storageInsideElementsContainer}>
                  <View style={styles.freeSquare} />
                  <Text style={styles.storageInsideElementsText}>Free</Text>
                </View>
                <View style={styles.storageInsideElementsContainer}>
                  <View style={styles.NeoflixSquare} />
                  <Text style={styles.storageInsideElementsText}>Neoflix</Text>
                </View>
                <View style={styles.storageInsideElementsContainer}>
                  <View style={styles.usedSquare} />
                  <Text style={styles.storageInsideElementsText}>Used</Text>
                </View>
              </View>
            </View>
          </List.Section>

        </View>
      </ScrollView>
    )
  }
}
