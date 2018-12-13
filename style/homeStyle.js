import { StyleSheet } from 'react-native'

const homeStyle = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(75, 75, 75, 0.8)',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
    },
    headerContent: {
        marginHorizontal: 11
    },
    footer: {
        flexDirection: 'row', flex: 2, justifyContent: 'space-between'
    },
    cardHeader: {
        width: '50%',
        height: null,
        alignItems: 'center', justifyContent: 'center',

    },
    button: {
        margin: 12, 
        alignSelf: 'flex-end',
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

export default homeStyle