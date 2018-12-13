import React, { Component } from 'react'
import { Container, View, Button, Text, Content, Thumbnail, CardItem, Card, Body } from 'native-base';
import { ImageBackground, Image, TouchableOpacity } from 'react-native'
import ruleMusic from '../data/ruleMusic'
import PlaySound from 'react-native-sound-player'
import * as Animatable from 'react-native-animatable'
import homeStyle from '../style/homeStyle'

export default class Home extends Component {

  constructor() {
    super()
    this.combat = this.combat.bind(this);

    this.state = {
      counter: 0,
      number: 0,
      image: require('../assets/buble.png')
    }
  }

  // Handle Ref Untuk Animasi
  handleViewRef = (view) => ref => this[view] = ref

  // Cek Jika Valuenya Sama
  checkViewName = (value) => {
    switch (value) {
      case 1:
        return 'view'
      case 2:
        return 'view1'
      case 3:
        return 'view2';
      case 4:
        return 'view3'
      default:
        break;
    }
  }

  border = (value) => ruleMusic.setRule[this.state.counter] === value ? true : false

  bounceIn = (value) => this[this.checkViewName(value)].bounceIn(500)

  combat = (value, song) => () => {

    PlaySound.playSoundFile(song, 'mp3')
    this.bounceIn(value)
    if (ruleMusic.setRule[this.state.counter] === value) {
      if ((this.state.counter + 1) === ruleMusic.setRule.length) {
        this.setState({
          number: this.state.number + 1,
          counter: 0,
        })
      } else {
        this.setState({
          counter: this.state.counter + 1,
          image: require('../assets/buble.png')
        })
      }
    } else {
      this.setState({
        ...this.state,
        counter: 0,
        image: require('../assets/fail.png')
      })
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground source={require('../assets/bakcground.jpg')} style={{ flex: 1, width: null }}>
          <View style={homeStyle.mainContent}>
            <View style={homeStyle.header}>
              <Thumbnail small source={require('../assets/trophy.png')} />
              <View style={homeStyle.headerContent}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Lead')}>
                  <Text style={{ color: 'white', fontSize: 12 }}> Sponge Shark </Text>
                  <Button onPress={() => this.props.navigation.navigate('Lead')} small style={{ height: 15, backgroundColor: '#FD9300' }}>
                    <Text style={{ fontSize: 12 }}>LeaderBoard</Text>
                  </Button>
                </TouchableOpacity>
              </View>
              <View style={homeStyle.headerContent}>
                <Text style={{ color: 'white', textAlign: 'right', fontSize: 12 }}>DeviAdi</Text>
                <Button small style={{ height: 15 }}>
                  <Text style={{ fontSize: 12 }}>Connect</Text>
                </Button>
              </View>
              <Thumbnail small source={require('../assets/user.png')} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Card style={homeStyle.cardHeader}>
              <Text style={{ fontSize: 50 }}> {this.state.number} </Text>
              <Text> Combat </Text>
            </Card>
            <Image source={this.state.image} />
          </View>
          <Button transparent>
            <Text> Tap When Button Transparent </Text>
          </Button>
          <View style={homeStyle.footer}>

            <Animatable.View ref={this.handleViewRef('view')}>
              <Button bordered={this.border(1)} rounded style={{ margin: 12 }} large onPress={this.combat(1, 'te')}>
                <Text>Te</Text>
              </Button>
            </Animatable.View>

            <Animatable.View ref={this.handleViewRef('view1')} style={homeStyle.button}>
              <Button rounded bordered={this.border(2)} danger large onPress={this.combat(2, 'ng')}>
                <Text>Ou</Text>
              </Button>
            </Animatable.View>

            <Animatable.View ref={this.handleViewRef('view2')}>
              <Button rounded style={{ margin: 12 }} bordered={this.border(3)} success large onPress={this.combat(3, 'net')}>
                <Text>Nt</Text>
              </Button>
            </Animatable.View>

            <Animatable.View ref={this.handleViewRef('view3')} style={homeStyle.button}>
              <Button rounded info large onPress={this.combat(4, 'enge')} bordered={this.border(4)}>
                <Text>Ng</Text>
              </Button>
            </Animatable.View>

          </View>
        </ImageBackground>

      </Container>
    )
  }
}
