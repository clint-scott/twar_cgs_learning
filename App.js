import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { View, StatusBar, Text } from 'react-native'
// import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

// screens
import Splashscreen from './src/screens/Splashscreen/Splashscreen'
import ProfileSetup from './src/screens/ProfileSetup/ProfileSetup'
import UserCreation from './src/screens/UserCreation/UserCreation'
import Login from './src/screens/Login/Login'
import Signup from './src/screens/Signup/Signup'
import VideoPlayer from './src/screens/VideoPlayer/VideoPlayer'
import VideoProfile from './src/screens/VideoProfile/VideoProfile'
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword'
import WhoWatching from './src/screens/WhoWatching/WhoWatching'

// Tabs
import MenuScreen from './src/screens/TabScreens/MenuScreen/MenuScreen'
import HomeScreen from './src/screens/TabScreens/HomeScreen/HomeScreen'
import DownloadScreen from './src/screens/TabScreens/DownloadScreen/DownloadScreen'
import SearchScreen from './src/screens/TabScreens/SearchScreen/SearchScreen'

// Menu Screens
import AccountScreen from './src/screens/TabScreens/MenuScreen/AccountScreen/AccountScreen'
import AppSettingsScreen from './src/screens/TabScreens/MenuScreen/AppSettingsScreen/AppSettingsScreen'
import CellularDataUsageScreen from './src/screens/TabScreens/MenuScreen/AppSettingsScreen/CellularDataUsageScreen/CellularDataUsageScreen'
import VideoQualityScreen from './src/screens/TabScreens/MenuScreen/AppSettingsScreen/VideoQualityScreen/VideoQualityScreen'
import HelpScreen from './src/screens/TabScreens/MenuScreen/HelpScreen/HelpScreen'
import ManageProfilesScreen from './src/screens/TabScreens/MenuScreen/ManageProfilesScreen/ManageProfilesScreen'
import MyListScreen from './src/screens/TabScreens/MenuScreen/MyListScreen/MyListScreen'
import PrivacyScreen from './src/screens/TabScreens/MenuScreen/PrivacyScreen/PrivacyScreen'

const DashboardTabNavigator = createBottomTabNavigator(
  {
    HomeScreen: HomeScreen,
    SearchScreen: SearchScreen,
    DownloadScreen: DownloadScreen,
    MenuScreen: MenuScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'MenuScreen') {
          iconName = `ios-menu`
        } else if (routeName === 'HomeScreen') {
          iconName = `ios-home`
        } else if (routeName === 'DownloadScreen') {
          iconName = `ios-download`
        } else if (routeName === 'SearchScreen') {
          iconName = `ios-search`
        }
        return <Ionicons name={iconName} size={30} color={focused ? '#fff' : 'gray'} />
      },
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let labelName
        if (routeName === 'MenuScreen') {
          labelName = `Menu`
        } else if (routeName === 'HomeScreen') {
          labelName = `Home`
        } else if (routeName === 'DownloadScreen') {
          labelName = `Downloads`
        } else if (routeName === 'SearchScreen') {
          labelName = `Search`
        }
        return <Text style={focused ? { textAlign: 'center', fontSize: 11, color: '#fff', fontWeight: '600', marginTop: -5, marginBottom: 5 } : { textAlign: 'center', fontSize: 11, marginTop: -5, marginBottom: 5, color: 'gray' }}>{labelName}</Text>
      }
    }),
    tabBarOptions: {
      activeTintColor: '#ff3402',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#101010',
        height: 65
      },
      labelStyle: {
        color: '#fff'
      }
    },
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      header: null
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    Splashscreen: Splashscreen,
    UserCreation: UserCreation,
    Login: Login,
    Signup: Signup,
    ProfileSetup: ProfileSetup,
    Dashboard: DashboardTabNavigator,
    Account: AccountScreen,
    AppSettings: AppSettingsScreen,
    VideoQuality: VideoQualityScreen,
    CellularDataUsage: CellularDataUsageScreen,
    Help: HelpScreen,
    ManageProfiles: ManageProfilesScreen,
    MyList: MyListScreen,
    Privacy: PrivacyScreen,
    VideoPlayer: VideoPlayer,
    VideoProfile: VideoProfile,
    ForgotPassword: ForgotPassword,
    WhoWatching: WhoWatching
  },
  {
    initialRouteName: 'Splashscreen',
    navigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      </View>
    )
  }
}
