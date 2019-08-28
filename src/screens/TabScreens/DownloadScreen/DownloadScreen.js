import React, { Component } from 'react'
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './DownloadScreen.styles'
import {
  Header
} from '../../../components'
import { List } from 'react-native-paper'
export default class DownloadScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  })
  state={
    edit: false,
    downloads: [
      { id: 1, name: 'Stranger Things', description: 'Season 2 • Episode 5', status: 'Completed', cover_url: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/09/stranger-things-5-450x675.jpg' },
      { id: 2, name: 'F.R.I.E.N.D.S', description: 'Season 7 • Episode 19', status: 'Downloading', cover_url: 'https://screenanarchy.com/assets/2018/08/Maniac%20poster.jpg' }
    ]
  }
  render () {
    return (
      <View style={styles.container}>
        <Header title='My Downloads' rightButton rightButtonText={this.state.edit ? 'Done' : 'Edit'} rightButtonFunc={() => this.state.edit ? this.setState({ edit: false }) : this.setState({ edit: true })} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.viewContainer}>
          {/* <View style={styles.userDetailContainer}>
            <List.Item
              theme={{ colors: { text: '#fff' } }}
              title='Mac'
              left={props => <Image style={styles.userImage} source={require('../../../assets/images/userProfile.png')} />}
              rippleColor='rgba(255, 255, 255, .32)'
              onPress={() => console.log('Pressed!')}
            />
          </View> */}
          {this.state.downloads.map((data) => {
            return (
              <List.Item
                key={data.id}
                theme={{ colors: { text: '#fff' } }}
                title={data.name}
                description={`${data.description}${'\n'}${data.status === 'Completed' ? 'Completed' : 'Downloading...4%'}`}
                left={props => <Image {...props} style={styles.videoImage} resizeMode='stretch' source={{ uri: data.cover_url }} />}
                right={props => data.status === 'Completed' ? <List.Icon {...props} color='#999' style={{ marginTop: 30 }} icon={this.state.edit ? 'close' : 'chevron-right'} /> : <TouchableOpacity style={styles.stopButton}><Text style={styles.stopButtonText}>Stop</Text></TouchableOpacity>}
                rippleColor='rgba(255, 255, 255, .32)'
                onPress={() => console.log('Pressed!')}
              />
            )
          })}
        </ScrollView>
      </View>
    )
  }
}
