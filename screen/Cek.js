import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base';
import SoundPlayer from 'react-native-sound-player'


export default class Cek extends Component {
    playSong() {
        try {
            SoundPlayer.playSoundFile('net', 'mp3')
        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }
    }

    render() {
        return (
            <Container>
                <Button onPress={this.playSong}>
                    <Text>Song</Text>
                </Button>
            </Container>
        )
    }
}
