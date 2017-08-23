import {
    View, StyleSheet, Text
} from 'react-native';

export default StyleSheet.create({
    Container: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '50%',
        paddingHorizontal:5,
        backgroundColor:'white'

    },
    Image: {
        height: 110,
        width: 150,
        margin:15,
        alignSelf:'center'
    },
    TextName: {
        fontSize: 15,
        color: 'black'
    },
    TextFee: {
        fontSize: 15,
        marginTop: 7,
        color: '#787878'
    },
    TextCharge: {
        right: 0,
        fontSize: 14,
        marginTop: 5,
        position: 'absolute',
        color: '#13B26E'
    },

});