import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Icon from 'react-native-vector-icons/FontAwesome'
import IOSIcon from 'react-native-vector-icons/Ionicons'
import styles from './Header.styles'
var DEVICE = Dimensions.get('screen')

class Header extends Component {
  state = {
    selectedSegment: this.props.selectedSegment ? this.props.selectedSegment : 0,
    text: ''
  }
  handleIndexChange (index) {
    this.setState({
      selectedSegment: index
    })
    this.props.navigation.setParams({ selectedSegment: index })
  }
  componentWillMount () {
    if (this.props.segment) {
      this.props.navigation.setParams({ selectedSegment: 0 })
    }
  }
  _goBack () {
    this.props.navigation.goBack()
  }
  render () {
    switch (this.props.headerStyle) {
      case 'big': return (
        <View style={[styles.container, { borderBottomWidth: 0, height: StatusBar.currentHeight + 80 }]}>
          <View style={[styles.middleContainer, { alignItems: 'flex-start', left: 20 }]}>
            <Text style={[styles.titleText, { fontSize: 40, marginTop: 20 }]}>{this.props.title}</Text>
          </View>
          <View style={styles.rightButtonContainer}>
            {this.props.rightButton ? <TouchableOpacity onPress={() => this.props.rightButtonFunc()} style={styles.buttonInsideContainer}>
              <Text style={styles.rightButtonText}>{this.props.rightButtonText}</Text>
            </TouchableOpacity> : null}
          </View>
        </View>
      )
      case 'transparent': return (
        <View style={[styles.container, { borderBottomWidth: 0, height: StatusBar.currentHeight + 80, backgroundColor: 'transparent', position: 'absolute', top: 10, left: 10, zIndex: 9999999 }]}>
          <View style={this.props.title === 'Neoflix' ? [styles.middleContainer, { alignItems: 'flex-start', justifyContent: 'center', left: 0 }] : [styles.middleContainer, { alignItems: 'flex-start', left: -10 }]}>
            {this.props.backButton ? <TouchableOpacity style={styles.buttonInsideContainer} onPress={() => this._goBack()}>
              <Icon size={20} color='#fff' name='chevron-left' />
            </TouchableOpacity> : this.props.title === 'Neoflix' ? <Image resizeMode='contain' style={{ width: 50, height: 50 }} source={require('../../assets/images/small_logo.png')} /> : <Text style={styles.titleText}>{this.props.title}</Text>}
          </View>
          <View style={styles.rightButtonContainer}>
            {this.props.rightButton ? <TouchableOpacity onPress={() => this.props.rightButtonFunc()} style={styles.buttonInsideContainer}>
              <Text style={styles.rightButtonText}>{this.props.rightButtonText}</Text>
            </TouchableOpacity> : null}
          </View>
        </View>
      )
      case 'search': return (
        <View style={[styles.container, { borderBottomWidth: 0, height: StatusBar.currentHeight + 60, paddingHorizontal: 10 }]}>
          <View style={styles.textInputContainer}>
            <IOSIcon name='ios-search' size={20} color='#fff' />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ text })}
              placeholderTextColor='#fff'
              placeholder='Search'
              value={this.state.text}
            />
          </View>
        </View>
      )
      default: return (
        <View style={this.props.style ? [styles.container, this.props.style] : styles.container}>
          <View style={styles.leftButtonContainer}>
            {this.props.leftButton && !this.props.backButton ? <TouchableOpacity onPress={() => this.props.leftButtonFunc()} style={styles.buttonInsideContainer}>
              <Text style={styles.leftButtonText}>{this.props.leftButtonText}</Text>
            </TouchableOpacity> : null}
            {this.props.backButton && !this.props.leftButton ? <TouchableOpacity style={styles.buttonInsideContainer} onPress={() => this._goBack()}>
              <Icon size={20} color={this.props.buttonColor ? this.props.buttonColor : '#fff'} name='chevron-left' />
            </TouchableOpacity> : null}
            {this.props.backButton && this.props.leftButton ? null : null}
          </View>
          <View style={this.props.titleStyle === 'left' ? [styles.middleContainer, { alignItems: 'flex-start', left: 20 }] : styles.middleContainer}>
            { this.props.segment
              ? <SegmentedControlTab
                values={['Register', 'Sign In']}
                activeTabStyle={{ backgroundColor: '#ff3402' }}
                tabStyle={{ borderColor: '#ff3402' }}
                tabsContainerStyle={{ width: DEVICE.width / 2 }}
                tabTextStyle={{ color: '#ff3402', fontWeight: '800' }}
                selectedIndex={this.state.selectedSegment}
                onTabPress={index => this.handleIndexChange(index)}
              />
              : this.props.title === 'Neoflix' ? <Image resizeMode='contain' style={{ width: DEVICE.width / 2, height: 25 }} source={require('../../assets/images/logo.png')} /> : <Text style={styles.titleText}>{this.props.title}</Text>
            }
          </View>
          <View style={styles.rightButtonContainer}>
            {this.props.rightButton ? <TouchableOpacity onPress={() => this.props.rightButtonFunc()} style={styles.buttonInsideContainer}>
              <Text style={styles.rightButtonText}>{this.props.rightButtonText}</Text>
            </TouchableOpacity> : null}
          </View>
        </View>
      )
    }
  }
}

export { Header }
