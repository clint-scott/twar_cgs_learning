import React, { Component } from 'react'
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './HomeScreen.styles'
import {
  Header
} from '../../../components'
import { TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  })
  state={
    videos: [
      {
        id: 1,
        title: 'Popular on Neoflix',
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
      },
      {
        id: 2,
        title: 'Trending Now',
        videos: [
          {
            id: 1,
            name: '',
            link: '',
            cover_url: 'https://dvdtoile.com/FILMS/11/11854.jpg'
          },
          {
            id: 2,
            name: '',
            link: '',
            cover_url: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/09/stranger-things-5-450x675.jpg'
          },
          {
            id: 3,
            name: '',
            link: '',
            cover_url: 'https://i.pinimg.com/736x/6c/56/ec/6c56ec79b4eacb4e6b8f4625b9413d62.jpg'
          },
          {
            id: 4,
            name: '',
            link: '',
            cover_url: 'https://occ-0-999-1001.1.nflxso.net/art/9289f/78c8e56b22f1c8ae7ce7a580d6b901598c09289f.jpg'
          },
          {
            id: 5,
            name: '',
            link: '',
            cover_url: 'https://screenanarchy.com/assets/2018/08/Maniac%20poster.jpg'
          }
        ]
      },
      {
        id: 3,
        title: 'Trending Now',
        videos: [
          {
            id: 1,
            name: '',
            link: '',
            cover_url: 'https://dvdtoile.com/FILMS/11/11854.jpg'
          },
          {
            id: 2,
            name: '',
            link: '',
            cover_url: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/09/stranger-things-5-450x675.jpg'
          },
          {
            id: 3,
            name: '',
            link: '',
            cover_url: 'https://i.pinimg.com/736x/6c/56/ec/6c56ec79b4eacb4e6b8f4625b9413d62.jpg'
          },
          {
            id: 4,
            name: '',
            link: '',
            cover_url: 'https://occ-0-999-1001.1.nflxso.net/art/9289f/78c8e56b22f1c8ae7ce7a580d6b901598c09289f.jpg'
          },
          {
            id: 5,
            name: '',
            link: '',
            cover_url: 'https://screenanarchy.com/assets/2018/08/Maniac%20poster.jpg'
          }
        ]
      }
    ]
  }
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Header headerStyle='transparent' title='Neoflix' />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.viewContainer}>
          <View style={styles.featuredVideoContainer}>
            <Image style={styles.featuredVideoImage} resizeMode='cover' source={{ uri: 'https://i.pinimg.com/originals/03/3c/f5/033cf57372da057f72de6eb02ced064f.jpg' }} />
            <View style={styles.featuredVideoDetailsContainer}>
              <View style={styles.featuredVideoTagContainer}>
                <Text style={styles.featuredVideoTagText}>Stranger Things • Season 2</Text>
              </View>
              <View style={styles.featuredVideoButtonsContainer}>
                <TouchableRipple
                  onPress={() => console.log('Pressed')}
                  rippleColor='rgba(255, 255, 255, .32)'
                  style={{ marginRight: 10, borderRadius: 5 }}
                >
                  <View style={styles.featuredVideoListButton}>
                    <Icon style={styles.featuredVideoListButtonIcon} name='ios-add' size={26} color='#fff' />
                    <Text style={styles.featuredVideoListButtonText}>My List</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple
                  onPress={() => navigation.navigate('VideoPlayer')}
                  rippleColor='rgba(0, 0, 0, .32)'
                >
                  <View style={styles.featuredVideoPlayButton}>
                    <Icon style={styles.featuredVideoPlayButtonIcon} name='ios-play' size={20} color='#000' />
                    <Text style={styles.featuredVideoPlayButtonText}>Play</Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple
                  onPress={() => navigation.navigate('VideoProfile')}
                  rippleColor='rgba(255, 255, 255, .32)'
                  style={{ marginLeft: 10, borderRadius: 5 }}
                >
                  <View style={styles.featuredVideoInfoButton}>
                    <Icon style={styles.featuredVideoInfoButtonIcon} name='ios-information-circle-outline' size={22} color='#fff' />
                    <Text style={styles.featuredVideoInfoButtonText}>Info</Text>
                  </View>
                </TouchableRipple>
              </View>
            </View>
          </View>
          {this.state.videos.map((data1) => {
            return (
              <View key={data1.id} style={styles.listContainer}>
                <Text style={styles.listContainerHeadingText}>{data1.title}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollviewContainer}>
                  {data1.videos.map((data2) => {
                    return (
                      <TouchableOpacity
                        key={data2.id}
                        onPress={() => navigation.navigate('VideoProfile')}
                        activeOpacity={0.8}
                        style={styles.scrollviewVideoImageContainer}
                      >
                        <Image style={styles.scrollviewVideoImage} resizeMode='stretch' source={{ uri: data2.cover_url }} />
                      </TouchableOpacity>
                    )
                  })}
                </ScrollView>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}
