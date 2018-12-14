import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import SoundPlayer from 'react-native-sound-player'
import { FlatList, ActivityIndicator, View, TouchableWithoutFeedback, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'


export default class Cek extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        return fetch('http://10.0.2.2:3333/api/asset')
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

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

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
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
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item, key }) => {
                        return <Container key={key}>
                            <Image source={{ uri: item.mainImage }} style={{ width: 66, height: 58 }} ></Image>
                            <Text>{item.mainImage}, {item.setRule}</Text>
                        </Container>
                    }}
                />
            </Container >
        )
    }
}
