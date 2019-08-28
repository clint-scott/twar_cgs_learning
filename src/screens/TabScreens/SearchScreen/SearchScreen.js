import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './SearchScreen.styles'
import {
  Header
} from '../../../components'
import { TouchableRipple } from 'react-native-paper'
export default class SearchScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  })
  state={
    suggestions: [
      { text: 'Available to download' },
      { text: 'Neoflix originals' },
      { text: 'TV' },
      { text: 'Action' },
      { text: 'Anime' },
      { text: 'Comedy' },
      { text: 'Crime' },
      { text: 'Drama' },
      { text: 'Horror' }
    ]
  }
  render () {
    return (
      <View style={styles.container}>
        <Header headerStyle='search' title='Neoflix' />
        <ScrollView style={styles.viewContainer}>
          {this.state.suggestions.map((data, index) => {
            return (
              <TouchableRipple
                key={index}
                onPress={() => console.log('Pressed')}
                rippleColor='rgba(255, 255, 255, .32)'
                style={styles.suggestionButtonContainer}
              >
                <Text style={styles.suggestionText}>{data.text}</Text>
              </TouchableRipple>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}
