import React, { Component } from 'react'
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IOSIcon from 'react-native-vector-icons/Ionicons'
import styles from './VideoProfile.styles'
import {
  Header
} from '../../components'
import { TouchableRipple } from 'react-native-paper'
export default class VideoProfile extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <Header navigation={navigation} headerStyle='transparent' backButton />
  })
  state = {
    tab: 0,
    episodes: [
      {
        name: 'Chapter One: The Vanishing Of Will Byers',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        cover: 'https://occ-0-2483-2704.1.nflxso.net/art/79c2b/a5a049c7060c6b586cd5b9a16369f745d8c79c2b.webp',
        duration: 40
      },
      {
        name: 'Chapter Two: The Weirdo on Maple Street',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        cover: 'https://occ-0-2483-2704.1.nflxso.net/art/ea7d8/04b93ca22da330847cd87a713042b54ef0dea7d8.webp',
        duration: 44
      },
      {
        name: 'Chapter Three: Holly, Jolly',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        cover: 'https://occ-0-2483-2704.1.nflxso.net/art/f98c9/3d96cac3aba7c042ecb56657fa0d9657215f98c9.webp',
        duration: 55
      },
      {
        name: 'Chapter Four: The Body',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        cover: 'https://occ-0-2483-2704.1.nflxso.net/art/9ae44/cb985ba05e2ca4d5404eef2ed5509ba6d679ae44.webp',
        duration: 48
      }
    ],
    trailers: [
      {
        name: 'Spotlight: Noah',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        cover: 'https://occ-0-2483-2704.1.nflxso.net/art/e8528/0c2e6c1f5699422c65264232dfa255ea65de8528.webp',
        duration: 48
      },
      { name: 'Spotlight: Millie',
        description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
        cover: 'https://occ-0-2483-2704.1.nflxso.net/art/4bb2e/6f77978c4b41675f8ba9a8bef8b0eec291c4bb2e.webp',
        duration: 48
      }
    ]
  }

  _renderEpisodes () {
    return (
      this.state.episodes.map((data, index) => {
        return (
          <TouchableRipple key={index} onPress={() => this.props.navigation.navigate('VideoPlayer')} rippleColor='rgba(255,255,255,0.32)' style={styles.episodesVideoContainer}>
            <View style={styles.episodesVideoContainer}>
              <View style={styles.episodesVideoImageContainer}>
                <Image resizeMode='cover' style={styles.episodesVideoImage} source={{ uri: data.cover }} />
              </View>
              <View style={styles.episodesVideoDetailsContainer}>
                <Text style={styles.episodesVideoDetailsHeading}>{data.name}</Text>
                <Text style={styles.episodesVideoDetailsTime}>{data.duration}m</Text>
                <Text numberOfLines={3} style={styles.episodesVideoDetailsDescription}>{data.description}</Text>
              </View>
            </View>
          </TouchableRipple>
        )
      })
    )
  }

  _renderTrailers () {
    return (
      this.state.trailers.map((data, index) => {
        return (
          <TouchableRipple key={index} onPress={() => this.props.navigation.navigate('VideoPlayer')} rippleColor='rgba(255,255,255,0.32)'>
            <View style={styles.trailersVideoContainer}>
              <View style={styles.trailersVideoImageContainer}>
                <Image resizeMode='contain' style={styles.trailersVideoImage} source={{ uri: data.cover }} />
              </View>
              <View style={styles.trailersVideoDetailsContainer}>
                <Text style={styles.trailersVideoDetailsHeading}>{data.name}</Text>
                <Text style={styles.trailersVideoDetailsTime}>{data.duration}m</Text>
                <Text numberOfLines={3} style={styles.trailersVideoDetailsDescription}>{data.description}</Text>
              </View>
            </View>
          </TouchableRipple>
        )
      })
    )
  }

  render () {
    const { navigation } = this.props
    const { tab } = this.state
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('VideoPlayer')} style={styles.headVideoContainer}>
          <View style={styles.headVideoPlayIconContainer}>
            <Icon style={styles.headVideoPlayIcon} name='play-circle' size={60} color='#fff' />
          </View>
          <Image style={styles.featuredVideoImage} resizeMode='cover' source={{ uri: 'https://i.pinimg.com/originals/03/3c/f5/033cf57372da057f72de6eb02ced064f.jpg' }} />
        </TouchableOpacity>
        <View style={styles.videoDetailsContainer}>
          <Text style={styles.videoNameHeading}>Stranger Things</Text>
          <View style={styles.videoNameDetailsContainer}>
            <Text style={[styles.videoNameDetails, styles.green]}>93% Match</Text>
            <Text style={styles.videoNameDetails}>2017</Text>
            <Text style={styles.videoNameDetails}>2 Seasons</Text>
          </View>
          <Text style={styles.videoNameDescription}>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</Text>
          <Text style={styles.videoNameAbout}><Text style={styles.bold}>Starring:</Text> Winona Ryder, David Harbour, Finn Wolfhard</Text>
          <Text style={styles.videoNameAbout}><Text style={styles.bold}>Creator:</Text> The Duffer Brothers</Text>
          <View style={styles.videoButtonContainer}>
            <TouchableRipple
              onPress={() => console.log('Pressed')}
              rippleColor='rgba(255,255,255,0.32)'
            >
              <View style={styles.addToMyListButton}>
                <IOSIcon style={styles.addToMyListButtonIcon} name='ios-add' size={50} color='#fff' />
                <Text style={styles.addToMyListButtonText}>My List</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log('Pressed')}
              rippleColor='rgba(255,255,255,0.32)'
            >
              <View style={styles.videoRateButton}>
                <IOSIcon style={styles.videoRateButtonIcon} name='ios-thumbs-up' size={30} color='#fff' />
                <Text style={styles.videoRateButtonText}>Rate</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log('Pressed')}
              rippleColor='rgba(255,255,255,0.32)'
            >
              <View style={styles.videoShareButton}>
                <IOSIcon style={styles.videoShareButtonIcon} name='md-share' size={30} color='#fff' />
                <Text style={styles.videoShareButtonText}>Share</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
        <View style={styles.viewContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabButtonMainContainer}>
            <TouchableRipple onPress={() => this.setState({ tab: 0 })} rippleColor='rgba(255,255,255,0.32)' style={this.state.tab === 0 ? [styles.tabButtonContainer, styles.activeTab] : styles.tabButtonContainer}>
              <Text style={styles.tabButtonText}>EPISODES</Text>
            </TouchableRipple>
            <TouchableRipple onPress={() => this.setState({ tab: 1 })} rippleColor='rgba(255,255,255,0.32)' style={this.state.tab === 1 ? [styles.tabButtonContainer, styles.activeTab] : styles.tabButtonContainer}>
              <Text style={styles.tabButtonText}>TRAILERS & MORE</Text>
            </TouchableRipple>
          </ScrollView>
          <View style={styles.videoMainContainer}>
            { tab === 0 ? this._renderEpisodes() : this._renderTrailers() }
          </View>
        </View>
      </ScrollView>
    )
  }
}
