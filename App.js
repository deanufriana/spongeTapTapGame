import React from 'react';
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import introStyle from './style/introStyle'
import Home from './screen/Home'
import slides from './data/introData'
import Leaderboard from './screen/Leaderboard'

class App extends React.Component {
  _renderItem = props => (
    <LinearGradient
      style={[introStyle.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{ x: 0, y: .1 }} end={{ x: .1, y: 1 }}
    >
      <View>
        <Text style={introStyle.title}>{props.title}</Text>
        <Image source={props.image} style={introStyle.image} />
        <Text style={introStyle.title}>{props.secondTitle}</Text>
        <Text style={introStyle.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        onDone={() => this.props.navigation.navigate('Home')}
      />
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    IntroSlide: {
      screen: App,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Lead: {
      screen: Leaderboard,
      navigationOptions: {
        title: 'Leaderboard'
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppNavigator)