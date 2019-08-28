import React from 'react'
import { View, Image } from 'react-native'
import styles from './IntroHeader.styles'

const IntroHeader = (props) => {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' source={{ uri: props.logo }} style={styles.logo} />
    </View>
  )
}

export { IntroHeader }
