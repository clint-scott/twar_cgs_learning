import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './ManageProfilesScreen.styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  Header
} from '../../../../components'
import { TouchableRipple } from 'react-native-paper'
export default class ManageProfilesScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Manage Profiles' leftButton leftButtonText='Done' leftButtonFunc={() => navigation.goBack()} />
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
            <TouchableRipple key={index} onPress={() => console.log('Pressed')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <View style={styles.userProfileEditIconContainer}>
                  <Icon name='pencil-alt' size={30} color='#fff' style={styles.userProfileEditIcon} />
                </View>
                <Image style={styles.userProfileImage1} source={require('../../../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 1: return (
            <TouchableRipple key={index} onPress={() => console.log('Pressed')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <View style={styles.userProfileEditIconContainer}>
                  <Icon name='pencil-alt' size={30} color='#fff' style={styles.userProfileEditIcon} />
                </View>
                <Image style={styles.userProfileImage2} source={require('../../../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 2: return (
            <TouchableRipple key={index} onPress={() => console.log('Pressed')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <View style={styles.userProfileEditIconContainer}>
                  <Icon name='pencil-alt' size={30} color='#fff' style={styles.userProfileEditIcon} />
                </View>
                <Image style={styles.userProfileImage3} source={require('../../../../assets/images/userProfile.png')} />
                <Text style={[styles.userProfileText, styles.activeUserProfileText]}>{data.name}</Text>
              </View>
            </TouchableRipple>
          )
          case 3: return (
            <TouchableRipple key={index} onPress={() => console.log('Pressed')} rippleColor='rgba(255, 255, 255, .32)' style={styles.userProfile}>
              <View>
                <View style={styles.userProfileEditIconContainer}>
                  <Icon name='pencil-alt' size={30} color='#fff' style={styles.userProfileEditIcon} />
                </View>
                <Image style={styles.userProfileImage4} source={require('../../../../assets/images/userProfile.png')} />
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
        <View style={styles.insideContainer}>
          {this._renderUsers()}
        </View>
      </View>
    )
  }
}
