import { StyleSheet } from 'react-native'

const introStyle = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',

    },
    image: {
        width: null,
        height: 250,
        alignItems: 'stretch'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: 'black',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    }
});

export default introStyle