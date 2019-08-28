import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import styles from './Signup.styles'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import {
  Header,
  Button,
  TextInput
} from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper'
export default class Signup extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='Neoflix' backButton rightButton rightButtonText='Sign In' rightButtonFunc={() => navigation.navigate('Login')} />
  })
  state = {
    index: 0,
    selected: 1,
    checkedOffers: false,
    checkedTerms: false,
    email: '',
    password: '',
    selectedPlan: 3
  }
  _onBack () {
    this._swiper.scrollBy(-1)
  }
  _onChangeEmail (text) {
    this.setState({
      email: text
    })
  }
  _onChangePassword (text) {
    this.setState({
      password: text
    })
  }
  _toggleSecureInput () {
    this.setState({
      passwordHide: !this.state.passwordHide
    })
  }
  render () {
    const { checkedOffers, checkedTerms, selectedPlan } = this.state
    const { navigation } = this.props
    return (
      <Swiper ref={ref => this._swiper = ref} style={styles.container} showsButtons={false} showsPagination={false} loop={false} scrollEnabled={false}>
        <View style={styles.slide}>
          <Icon style={styles.icon} name='ios-checkmark-circle-outline' size={60} color='#db0000' />
          <Text style={styles.pagination}>STEP 1 OF 4</Text>
          <Text style={styles.heading}>Choose your plan.</Text>
          <Text style={styles.description}>Choose from any of our three plans,{'\n'}and you won't be charged until after{'\n'}your free month ends.</Text>
          <Button onPress={() => this._swiper.scrollBy(1)} text='SEE THE PLANS' />
        </View>
        <View style={styles.slideScroll}>
          <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
            <Text style={styles.pagination}>STEP 1 OF 3</Text>
            <Text style={styles.heading}>Choose a plan that's right{'\n'}for you.</Text>
            <Text style={styles.description}>Downgrade or upgrade at any time.</Text>
            <View style={styles.planContainer}>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={selectedPlan === 1 ? [styles.planHeaderContainer, styles.planHeaderSelected] : styles.planHeaderContainer}>
                    <Text style={styles.planHeading}>Basic</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={selectedPlan === 2 ? [styles.planHeaderContainer, styles.planHeaderSelected] : styles.planHeaderContainer}>
                    <Text style={styles.planHeading}>Standard</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={selectedPlan === 3 ? [styles.planHeaderContainer, styles.planHeaderSelected] : styles.planHeaderContainer}>
                    <Text style={styles.planHeading}>Platinum</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>Monthly price after free month ends on 18/2/2019</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planTextContainer}>
                    <Text style={selectedPlan === 1 ? [styles.planText, { color: '#db0000' }] : styles.planText}>$7.99</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planTextContainer}>
                    <Text style={selectedPlan === 2 ? [styles.planText, { color: '#db0000' }] : styles.planText}>$10.99</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planTextContainer}>
                    <Text style={selectedPlan === 3 ? [styles.planText, { color: '#db0000' }] : styles.planText}>$13.99</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>HD available</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planIconContainer}>
                    <Icon name='ios-close' size={60} color={selectedPlan === 1 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 2 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 3 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>Ultra HD available</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planIconContainer}>
                    <Icon name='ios-close' size={60} color={selectedPlan === 1 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planIconContainer}>
                    <Icon name='ios-close' size={60} color={selectedPlan === 2 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 3 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>Screens you can watch on at the same time</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planTextContainer}>
                    <Text style={selectedPlan === 1 ? [styles.planText, { color: '#db0000' }] : styles.planText}>1</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planTextContainer}>
                    <Text style={selectedPlan === 2 ? [styles.planText, { color: '#db0000' }] : styles.planText}>2</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planTextContainer}>
                    <Text style={selectedPlan === 3 ? [styles.planText, { color: '#db0000' }] : styles.planText}>4</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>Watch on your laptop, TV, phone and tablet</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 1 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 2 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 3 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>Unlimited movies and TV shows</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 1 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 2 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 3 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>Cancel anytime</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 1 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 2 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 3 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.topicText}>First month free</Text>
              <View style={styles.planRow}>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 1 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 1 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.plan, { marginRight: 10 }]}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 2 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 2 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                  <TouchableOpacity onPress={() => this.setState({ selectedPlan: 3 })} style={styles.planIconContainer}>
                    <Icon name='ios-checkmark' size={60} color={selectedPlan === 3 ? '#db0000' : '#999'} />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </ScrollView>
          <View style={styles.absoluteBottom}>
            <Button style={{ width: 60, paddingRight: 0 }} buttonStyle={{ backgroundColor: '#b30000' }} onPress={() => this._onBack()}>
              <FAIcon size={20} color='#fff' name='chevron-left' />
            </Button>
            <Button style={{ flex: 1, paddingLeft: 0 }} onPress={() => this._swiper.scrollBy(1)} text='CONTINUE' />
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.flexRow}>
            <Icon style={styles.icon} name='ios-laptop' size={60} color='#db0000' />
            <Icon style={styles.icon} name='ios-desktop' size={60} color='#db0000' />
            <Icon style={styles.icon} name='ios-phone-portrait' size={60} color='#db0000' />
          </View>
          <Text style={styles.pagination}>STEP 2 OF 3</Text>
          <Text style={styles.heading}>Create your account.</Text>
          <Text style={styles.description}>Use your email and create a password{'\n'}to watch Neoflix on any device at any time.</Text>
          <View style={styles.absoluteBottom}>
            <Button style={{ width: 60, paddingRight: 0 }} buttonStyle={{ backgroundColor: '#b30000' }} onPress={() => this._onBack()}>
              <FAIcon size={20} color='#fff' name='chevron-left' />
            </Button>
            <Button style={{ flex: 1, paddingLeft: 0 }} onPress={() => this._swiper.scrollBy(1)} text='CONTINUE' />
          </View>
        </View>
        <View style={styles.slideScroll}>
          <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
            <Text style={styles.pagination}>STEP 2 OF 3</Text>
            <Text style={styles.heading}>Sign up to start your free{'\n'}month.</Text>
            <Text style={styles.description}>Just two more steps and you're{'\n'}finished!{'\n'}We hate paperwork, too.</Text>
            <Text style={styles.heading2}>Create your account.</Text>
            <TextInput onChangeText={(text) => this._onChangeEmail(text)} value={this.state.email} placeholder='Email' />
            <TextInput type='secure' secure={this.state.passwordHide} onChangeText={(text) => this._onChangePassword(text)} value={this.state.email} onPressButton={() => this._toggleSecureInput()} placeholder='Password' />
            <TouchableOpacity onPress={() => { this.setState({ checkedOffers: !checkedOffers }) }} style={styles.bottom}>
              <Checkbox
                color='#db0000'
                status={checkedOffers ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checkedOffers: !checkedOffers }) }}
              />
              <Text style={styles.checkStyle}>Yes, please email me Neoflix speacial{'\n'}offers.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({ checkedTerms: !checkedTerms }) }} style={[styles.bottom, { marginTop: 0, marginBottom: 20 }]}>
              <Checkbox
                color='#db0000'
                status={checkedTerms ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checkedTerms: !checkedTerms }) }}
              />
              <Text style={styles.checkStyle}>I am over 18, and I agree to the Terms{'\n'}of Use and Privacy Statment.</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
              <Button style={{ width: 60, paddingRight: 0 }} buttonStyle={{ backgroundColor: '#b30000' }} onPress={() => this._onBack()}>
                <FAIcon size={20} color='#fff' name='chevron-left' />
              </Button>
              <Button style={{ flex: 1, paddingLeft: 0 }} onPress={() => navigation.navigate('ProfileSetup', { email: this.state.email })} text='SIGNUP' />
            </View>
          </ScrollView>
        </View>
      </Swiper>
    )
  }
}
