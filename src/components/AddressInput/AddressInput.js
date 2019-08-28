import React from 'react'
import { View, Text, TextInput as InputText } from 'react-native'
import styles from './AddressInput.styles'

const AddressInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <InputText
        style={styles.textInput}
        onChangeText={(text) => props.onChangeText(text)}
        value={props.text}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
    </View>
  )
}

export { AddressInput }
