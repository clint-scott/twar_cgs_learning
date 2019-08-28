import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Linking } from 'react-native'
import styles from './MenuScreen.styles'
import IOSIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import { TouchableRipple, List, Caption } from 'react-native-paper'
// import {
//   Header
// } from '../../../components'
export default class MenuScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  })
  state={
    users: [
      { id: 1, name: 'Brian', active: true },
      { id: 2, name: 'Thomas', active: false },
      { id: 3, name: 'Marc', active: false },
      { id: 4, name: 'Deb', active: false }
    ],
    selected: 1
  }
  _renderUsers () {
    return (
      this.state.users.map((data, index) => {
        switch (index) {
          case 0: return (
            <TouchableRipple key={index} onPress={() => this.setState({ selected: data.id })} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={data.id === this.state.selected ? [styles.userProfileImage1, styles.activeProfile] : styles.userProfileImage1} source={require('../../../assets/images/userProfile.png')} />
                <Text style={data.id === this.state.selected ? [styles.userProfileText, styles.activeUserProfileText] : styles.userProfileText}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 1: return (
            <TouchableRipple key={index} onPress={() => this.setState({ selected: data.id })} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={data.id === this.state.selected ? [styles.userProfileImage2, styles.activeProfile] : styles.userProfileImage2} source={require('../../../assets/images/userProfile.png')} />
                <Text style={data.id === this.state.selected ? [styles.userProfileText, styles.activeUserProfileText] : styles.userProfileText}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 2: return (
            <TouchableRipple key={index} onPress={() => this.setState({ selected: data.id })} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={data.id === this.state.selected ? [styles.userProfileImage3, styles.activeProfile] : styles.userProfileImage3} source={require('../../../assets/images/userProfile.png')} />
                <Text style={data.id === this.state.selected ? [styles.userProfileText, styles.activeUserProfileText] : styles.userProfileText}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 3: return (
            <TouchableRipple key={index} onPress={() => this.setState({ selected: data.id })} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={data.id === this.state.selected ? [styles.userProfileImage4, styles.activeProfile] : styles.userProfileImage4} source={require('../../../assets/images/userProfile.png')} />
                <Text style={data.id === this.state.selected ? [styles.userProfileText, styles.activeUserProfileText] : styles.userProfileText}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
        }
      })
    )
  }
  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.userProfilesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this._renderUsers()}
            {this.state.users ? (this.state.users.length > 0) && (this.state.users.length < 4) ? <TouchableRipple onPress={() => console.log('Pressed')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <View style={styles.userProfileIconContainer}>
                  <IOSIcon style={styles.userProfileIcon} name='ios-add' size={50} color='#fff' />
                </View>
                <Text style={[styles.userProfileText]}>Add Profile</Text>
              </View>
            </TouchableRipple> : null : null}
          </ScrollView>
          <TouchableRipple onPress={() => this.props.navigation.navigate('ManageProfiles')} rippleColor='rgba(255, 255, 255, .32)' style={styles.manageProfileContainer}>
            <View style={{ flexDirection: 'row' }}>
              <FAIcon style={styles.manageProfileIcon} name='pencil-alt' size={16} color='#999' />
              <Text style={styles.manageProfileText}>Manage Profiles</Text>
            </View>
          </TouchableRipple>

        </View>
        <View style={styles.listContainer}>
          <List.Item
            theme={{ colors: { text: '#fff' } }}
            title='My List'
            left={props => <List.Icon {...props} color='#999' icon='check' />}
            right={props => <List.Icon {...props} color='#999' icon='chevron-right' />}
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this.props.navigation.navigate('MyList')}
          />
          <List.Item
            theme={{ colors: { text: '#999' } }}
            title='App Settings'
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this.props.navigation.navigate('AppSettings')}
          />
          <List.Item
            theme={{ colors: { text: '#999' } }}
            title='Account'
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => Linking.openURL('https://www.google.com')}
          />
          <List.Item
            theme={{ colors: { text: '#999' } }}
            title='Privacy'
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this.props.navigation.navigate('Privacy')}
          />
          <List.Item
            theme={{ colors: { text: '#999' } }}
            title='Help'
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this.props.navigation.navigate('Help')}
          />
          <List.Item
            theme={{ colors: { text: '#999' } }}
            title='Signout'
            rippleColor='rgba(255, 255, 255, .32)'
            onPress={() => this.props.navigation.replace('UserCreation')}
          />
          <Caption style={styles.caption}>Version: v1.0 (Build 1)</Caption>
        </View>
      </ScrollView>
    )
  }
}
