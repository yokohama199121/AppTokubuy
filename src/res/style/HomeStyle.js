import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTop: {
        height: '10%',
        backgroundColor: '#f00044',

    },
    icMenu: {
        marginTop: 26,
        height: 25,
        width: 25,
        position: 'absolute',
        left: 0,
        marginLeft: 20,
    },
    buy: {
        alignSelf: 'center',
        width: 75,
        height: 60,
        marginTop: 8
    },
    icMessage: {
        marginTop: 25,
        height: 25,
        width: 25,
        position: 'absolute',
        right: 0,
        marginRight: 20,
    },
    viewIconMid: {
        height: 90,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'white'

    },
    viewTextIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    textSile: {
        fontSize: 14
    },
    textIcon: {
        color: 'black',
        marginTop: 8,
        fontSize: 10,
    }

});