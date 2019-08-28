import React from 'react'
import { TouchableOpacity, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import styles from './Button.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
var DEVICE = Dimensions.get('screen')
const Button = (props) => {
  switch (props.type) {
    case 'facebook' : return (
      <View style={[styles.buttonContainer, { height: props.containerHeight ? props.containerHeight : 60 }, props.style]}>
        <TouchableOpacity activeOpacity={props.opacity ? props.opacity : 0.7} onPress={() => this.props.onPress} style={styles.facebookButton}>
          <Icon name='facebook-square' size={20} color='#fff' />
          <Text style={styles.facebookButtonText}>{props.text}</Text>
        </TouchableOpacity>
      </View>

    )
    case 'absolute' : return (
      <View style={[styles.buttonContainer, { position: 'absolute', bottom: 0, width: DEVICE.width }, props.style]}>
        <TouchableOpacity activeOpacity={props.opacity ? props.opacity : 0.7} onPress={() => props.onPress()} style={styles.button}>
          {props.loading ? <ActivityIndicator size='small' color='#fff' />
            : props.text ? <Text style={styles.buttonText}>{props.text}</Text> : null}
          {props.children}
        </TouchableOpacity>
      </View>
    )
    default : return (
      <View style={[styles.buttonContainer, { height: props.containerHeight ? props.containerHeight : 60 }, props.style]}>
        <TouchableOpacity activeOpacity={props.opacity ? props.opacity : 0.7} onPress={() => props.onPress()} style={props.buttonStyle ? [styles.button, props.buttonStyle] : styles.button}>
          {props.loading ? <ActivityIndicator size='small' color='#fff' />
            : props.text ? <Text style={styles.buttonText}>{props.text}</Text> : null}
          {props.children}
        </TouchableOpacity>
      </View>
    )
  }
}

export { Button }
