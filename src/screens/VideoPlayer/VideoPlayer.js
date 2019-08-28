import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import styles from './VideoPlayer.styles'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import {
//   Header
// } from '../../components'
export default class VideoPlayer extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  })
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: false
  }

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration })
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime })
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage () {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
    }
    return 0
  };

  renderRateControl (rate) {
    const isSelected = (this.state.rate === rate)

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl (resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode)

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl (volume) {
    const isSelected = (this.state.volume === volume)

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  componentDidMount () {
    // this locks the view to Portrait Mode
    Orientation.lockToLandscapeLeft()
  }

  componentWillUnmount () {
    Orientation.lockToPortrait()
  }

  render () {
    const flexCompleted = this.getCurrentTimePercentage() * 100
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          <View style={styles.playIconContainer}>
            {this.state.paused ? <Icon style={styles.playIcon} color='#fff' name='play-circle' size={40} /> : null}
          </View>
          <Video
            ref={(ref: Video) => { this.video = ref }}
            /* For ExoPlayer */
            source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }}
            // source={require('./broadchurch.mp4')}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
          </View>
        </View>
        <StatusBar hidden />
      </View>
    )
  }
}
