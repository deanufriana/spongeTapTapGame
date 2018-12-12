import React, { Component } from 'react'
import { Container, View, Button, Text, Content, Thumbnail, CardItem, Card, Body } from 'native-base';
import { ImageBackground, Image, TouchableOpacity } from 'react-native'

export default class Home extends Component {

  state = {
    number: 0
  }

  combat = () => {
    this.setState({ number: this.state.number + 1 })
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
          <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-between' }}>
            <Button rounded style={{ margin: 12 }} large onPress={this.combat}>
              <Text>Te</Text>
            </Button>
            <Button rounded style={{ margin: 12, alignSelf: 'flex-end' }} danger large onPress={this.combat}>
              <Text>No</Text>
            </Button>
            <Button rounded style={{ margin: 12 }} success large onPress={this.combat}>
              <Text>Ng</Text>
            </Button>
            <Button rounded style={{ margin: 12, alignSelf: 'flex-end' }} info large onPress={this.combat}>
              <Text>et</Text>
            </Button>
          </View>
        </ImageBackground>

      </Container>
    )
  }
}
