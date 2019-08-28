import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './ProfileSetup.styles'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import {
  Header,
  Button,
  TextInput
} from '../../components'
import { Checkbox } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
export default class ProfileSetup extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Neoflix' backButton rightButton rightButtonText='Sign Out' rightButtonFunc={() => navigation.navigate('Login')} />
  })
  state = {
    index: 0,
    selected: 1,
    checkedTerms: false,
    name1: '',
    name2: '',
    name3: '',
    name4: '',
    name5: ''
  }
  _onBack () {
    this._swiper.scrollBy(-1)
  }
  _onChangeName1 (text) {
    this.setState({
      name1: text
    })
  }
  _onChangeName2 (text) {
    this.setState({
      name2: text
    })
  }
  _onChangeName3 (text) {
    this.setState({
      name3: text
    })
  }
  _onChangeName4 (text) {
    this.setState({
      name4: text
    })
  }
  _onChangeName5 (text) {
    this.setState({
      name5: text
    })
  }
  render () {
    const { checkedTerms } = this.state
    const { navigation } = this.props
    return (
      <Swiper ref={ref => this._swiper = ref} style={styles.container} showsButtons={false} showsPagination={false} loop={false} scrollEnabled={false}>
        <View style={[styles.slideScroll, { backgroundColor: '#000', paddingBottom: 60 }]}>
          <View style={styles.viewContainer}>
            <Text style={styles.heading3}>Download and dash</Text>
            <Text style={styles.text}>Save your data, aligator. Watch offline on the{'\n'}tube, train... or tractor</Text>
            <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/userCreation.png')} />
          </View>
          <View style={styles.absoluteBottom}>
            <Button style={{ flex: 1, paddingLeft: 0 }} onPress={() => this._swiper.scrollBy(1)} text='FINISH SIGNUP' />
          </View>
        </View>
        <View style={styles.slide}>
          <Text style={styles.heading}>Your first month is free.</Text>
          <Text style={styles.description}>Confirm your details. We'll email you three{'\n'}days before your trials ends to remind you.</Text>
          <View style={styles.planContainer}>
            <View style={styles.planDetailsContainer}>
              <View style={styles.planDetailsColumnLeft}>
                <Text>Basic Plan</Text>
                <Text style={styles.planDetailsCost}>$7.99/month</Text>
              </View>
              <View style={styles.planDetailsColumnRight}>
                <Text style={styles.link}>Change Plan</Text>
                <Text>Free until</Text>
                <Text>18/2/2019</Text>
              </View>
            </View>
            <View style={styles.userDetailsContainer}>
              <Text style={styles.userDetailsEmail}>{this.props.navigation.getParam('email')}</Text>
              <Text style={styles.link}>Not you?</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => { this.setState({ checkedTerms: !checkedTerms }) }} style={[styles.bottom, { marginTop: 0, marginBottom: 20 }]}>
            <Checkbox
              color='#db0000'
              status={checkedTerms ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checkedTerms: !checkedTerms }) }}
            />
            <Text style={styles.checkStyle}>I am over 18, and I agree to the <Text style={styles.link}>Terms{'\n'}of Use</Text> and <Text style={styles.link}>Privacy Statment.</Text></Text>
          </TouchableOpacity>
          <Button onPress={() => this._swiper.scrollBy(1)} text='SUBSCRIBE WITH ITUNES' />
        </View>
        <ScrollView style={styles.slideScroll}>
          <Text style={styles.heading}>Who will be watching Neoflix?</Text>
          <Text style={styles.description}>Everyone in your home can enjoy suggestions based on their own viewing and tastes. Great for children.</Text>
          <TextInput onChangeText={(text) => this._onChangeName1(text)} value={this.state.name1} placeholder='Name' />
          <TextInput onChangeText={(text) => this._onChangeName2(text)} value={this.state.name2} placeholder='Name' />
          <TextInput onChangeText={(text) => this._onChangeName3(text)} value={this.state.name3} placeholder='Name' />
          <TextInput onChangeText={(text) => this._onChangeName4(text)} value={this.state.name4} placeholder='Name' />
          <TextInput onChangeText={(text) => this._onChangeName5(text)} value={this.state.name5} placeholder='Name' />
          <Button onPress={() => navigation.navigate('WhoWatching')} text='CONTINUE' />
        </ScrollView>
      </Swiper>
    )
  }
}
