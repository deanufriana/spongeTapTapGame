import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import { TouchableWithoutFeedback } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import * as Animatable from 'react-native-animatable'


export default class Cek extends Component {
    playSong() {
        try {
            SoundPlayer.playSoundFile('net', 'mp3')
        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }
    }
    handleViewRef = ref => this.view = ref;

    bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));


    render() {
        return (
            <Container>
                <Button onPress={this.playSong}>
                    <Text>Song</Text>
                    <Animatable.Text animation="bounceIn">Zoom me up, Scotty</Animatable.Text>
                </Button>
                <TouchableWithoutFeedback onPress={this.bounce}>
                    <Animatable.View ref={this.handleViewRef}>
                        <Text>Bounce me!</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            </Container>
        )
    }
}
