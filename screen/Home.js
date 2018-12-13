import React, { Component } from 'react'
import { Container, View, Button, Text, Content, Thumbnail, CardItem, Card, Body } from 'native-base';
import { ImageBackground, Image, TouchableOpacity } from 'react-native'
import ruleMusic from '../data/ruleMusic'
import PlaySound from 'react-native-sound-player'

export default class Home extends Component {

  constructor() {
    super()
    this.combat = this.combat.bind(this);

    this.state = {
      counter: 0,
      number: 0
    }
  }

  combat = (value, song) => () => {
    PlaySound.playSoundFile(song, 'mp3')
    if (ruleMusic.setRule[this.state.counter] === value) {
      if ((this.state.counter + 1) === ruleMusic.setRule.length) {
        this.setState({
          number: this.state.number + 1,
          counter: 0
        })
      } else {
        this.setState({
          counter: this.state.counter + 1,
        })
      }
    } else {
      this.setState({
        ...this.state,
        counter: 0
      })
      alert('Salah')
    }



  }

  render() {
    return (
      <Container>
        <ImageBackground source={require('../assets/bakcground.jpg')} style={{ flex: 1, width: null }}>
          <View style={{ backgroundColor: 'rgba(75, 75, 75, 0.8)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-between' }}>
              <Thumbnail small source={require('../assets/trophy.png')} />
              <View style={{ marginHorizontal: 11 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Lead')}>
                  <Text style={{ color: 'white', fontSize: 12 }}> Sponge Shark </Text>
                  <Button onPress={() => this.props.navigation.navigate('Lead')} small style={{ height: 15, backgroundColor: '#FD9300' }}>
                    <Text style={{ fontSize: 12 }}>LeaderBoard</Text>
                  </Button>
                </TouchableOpacity>
              </View>

              <View style={{ marginHorizontal: 11 }}>
                <Text style={{ color: 'white', textAlign: 'right', fontSize: 12 }}>DeviAdi</Text>
                <Button small style={{ height: 15 }}>
                  <Text style={{ fontSize: 12 }}>Connect</Text>
                </Button>
              </View>
              <Thumbnail small source={require('../assets/user.png')} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Card style={{ width: '50%', height: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 50 }}> {this.state.number} </Text>
              <Text> Combat </Text>
            </Card>
            <Thumbnail large square source={require('../assets/buble.png')} style={{ width: 320, height: 270 }} />
          </View>
          <Button transparent>
            <Text> Play Music {ruleMusic.setRule[this.state.counter]} </Text>
          </Button>
          <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-between' }}>
            <Button rounded style={{ margin: 12 }} large onPress={this.combat(1, 'te')}>
              <Text>Te</Text>
            </Button>
            <Button rounded style={{ margin: 12, alignSelf: 'flex-end' }} danger large onPress={this.combat(2, 'ng')}>
              <Text>Ou</Text>
            </Button>
            <Button rounded style={{ margin: 12 }} success large onPress={this.combat(3, 'net')}>
              <Text>Net</Text>
            </Button>
            <Button rounded style={{ margin: 12, alignSelf: 'flex-end' }} info large onPress={this.combat(4, 'enge')}>
              <Text>Ng</Text>
            </Button>
          </View>
        </ImageBackground>

      </Container>
    )
  }
}
