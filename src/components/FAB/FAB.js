import React from 'react'
import { TouchableOpacity, ImageBackground, Text, View } from 'react-native'
import styles from './Card.styles'

const FAB = (props) => {
  return (
    <TouchableOpacity activeOpacity={props.opacity ? props.opacity : 0.7} style={props.index === 0 ? [styles.container, { marginTop: 10 }] : styles.container}>
      <ImageBackground resizeMode={'cover'} source={{ uri: props.background }} style={styles.backgroundContainer} imageStyle={props.imageOpacity ? [styles.backgroundImageContainer, { opacity: props.imageOpacity }] : styles.backgroundImageContainer}>
        <View style={styles.textContainer}>
          {props.tag ? <Text style={styles.tagText}>{props.tag}</Text> : null}
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export { FAB }
