import React from 'react'
import { View, TextInput as InputText } from 'react-native'
import styles from './TextInput.styles'

const TextInput = (props) => {
  return (
    <View style={styles.container}>
      <InputText
        style={styles.textInput}
        onChangeText={(text) => props.onChangeText(text)}
        value={props.text}
        placeholder={props.placeholder ? props.placeholder : ''}
        placeholderTextColor='#fff'
      />
    </View>
  )
}

export { TextInput }
