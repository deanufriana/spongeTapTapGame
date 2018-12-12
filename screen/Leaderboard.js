import React, { Component } from 'react'
import { Container, Text, Button, Icon, View, Card, Thumbnail, List, ListItem, Left, Body, Header } from 'native-base';

export default class Leaderboard extends Component {
    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', marginTop: 10 }}>
                    <Card style={{ width: '80%', alignItems: 'center', paddingVertical: 10 }}>
                        <Text>My Combos: 10</Text>
                        <Thumbnail source={require('../assets/user.png')} style={{ marginVertical: 10 }} />
                        <Button small style={{ alignSelf: 'center' }}>
                            <Text> Connect to claim reward </Text>
                        </Button>
                        <Text> #980 </Text>
                    </Card>
                </View>
                <View style={{ flex: 2, alignItems: 'center', marginTop: 10 }}>
                    <Card style={{ width: '80%' }}>
                        <ListItem avatar style={{ paddingVertical: 10, paddingRight: 10 }}>
                            <Thumbnail small source={require('../assets/user.png')} />
                            <Body>
                                <Text>Kumar Pratik</Text>
                            </Body>
                            <Icon name='trophy' />
                            <Text> #1 </Text>
                        </ListItem>
                    </Card>
                </View>
            </Container>
        )
    }
}
