import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Image, View } from 'react-native'
import styles from './MyListScreen.styles'
import {
  Header
} from '../../../../components'
export default class MyListScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} title='My List' backButton />
  })
  state = {
    videos: [
      {
        id: 1,
        name: '',
        link: '',
        cover_url: 'https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg'
      },
      {
        id: 2,
        name: '',
        link: '',
        cover_url: 'https://www.indiewire.com/wp-content/uploads/2017/09/crouching-tiger-hidden-dragon-sword-of-destiny-2016.jpg'
      },
      {
        id: 3,
        name: '',
        link: '',
        cover_url: 'https://i.pinimg.com/originals/bb/c5/4e/bbc54e343d240f80471ebb1b65714285.jpg'
      },
      {
        id: 4,
        name: '',
        link: '',
        cover_url: 'https://nexter.org/wp-content/uploads/2017/11/Sense8-netflix-poster-series-pics.jpg'
      },
      {
        id: 5,
        name: '',
        link: '',
        cover_url: 'http://cdn.pastemagazine.com/www/articles/breatheposter.jpg'
      },
      {
        id: 6,
        name: '',
        link: '',
        cover_url: 'https://i.pinimg.com/originals/3c/59/69/3c596935aa77d97ecb845200ec0b231a.jpg'
      }
    ]
  }
  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
        <View style={styles.container}>
          {this.state.videos.map((data1) => {
            return (
              <TouchableOpacity
                key={data1.id}
                onPress={() => console.log('Pressed')}
                activeOpacity={0.8}
                style={styles.scrollviewVideoImageContainer}
              >
                <Image style={styles.scrollviewVideoImage} resizeMode='stretch' source={{ uri: data1.cover_url }} />
              </TouchableOpacity>
            )
          })}
        </View>

      </ScrollView>
    )
  }
}
