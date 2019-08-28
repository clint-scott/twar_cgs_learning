import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './WhoWatching.styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Header
} from '../../components'
import { TouchableRipple } from 'react-native-paper'
export default class WhoWatching extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Neoflix' backButton />
  })
  state={
    users: [
      { name: 'Brian', active: true },
      { name: 'Thomas', active: false },
      { name: 'Marc', active: false },
      { name: 'Deb', active: false }
    ]
  }
  _renderUsers () {
    return (
      this.state.users.map((data, index) => {
        switch (index) {
          case 0: return (
            <TouchableRipple key={index} onPress={() => this.props.navigation.navigate('Dashboard')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={styles.userProfileImage1} source={require('../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 1: return (
            <TouchableRipple key={index} onPress={() => this.props.navigation.navigate('Dashboard')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={styles.userProfileImage2} source={require('../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 2: return (
            <TouchableRipple key={index} onPress={() => this.props.navigation.navigate('Dashboard')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={styles.userProfileImage3} source={require('../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 3: return (
            <TouchableRipple key={index} onPress={() => this.props.navigation.navigate('Dashboard')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <Image style={styles.userProfileImage4} source={require('../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
        }
      })
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Who's watching?</Text>
        <View style={styles.insideContainer}>
          {this._renderUsers()}
          <TouchableRipple onPress={() => this.props.navigation.navigate('Dashboard')} rippleColor='rgba(255, 255, 255, .32)' style={[styles.userProfile, { backgroundColor: '#404040', paddingBottom: 20, borderRadius: 10, height: 100, paddingTop: 10 }]}>
            <View>
              <View style={styles.addIconContainer}>
                <Icon name='ios-add-circle' color='#fff' size={60} />
              </View>

              <Text style={[styles.userProfileText, styles.activeUserProfileText]}>Add Profile</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
    )
  }
}
