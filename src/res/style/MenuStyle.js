import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        height: '10%',
        width: "100%",
        backgroundColor: '#f00044',
        flexDirection:"row",
        alignItems:"center",
        paddingTop: 10,
    },
    text_header: {
        fontSize: 20, fontWeight: 'bold', color: 'white'
    },
    ic_back: {
        height: 25,
        width: 25,
        marginLeft: 10,
    },
    viewTop: {
        height: 55,
        backgroundColor: '#efeff4',

    },
    viewSearch: {
        flex: 1,
        backgroundColor: 'white',
        margin: 7,
        justifyContent: 'center',
        borderRadius: 5
    },
    ic_search: {
        width: 22, height: 22,
        position: 'absolute',
        left: 0,
        marginLeft: 15,
        padding: 5
    },
    text_search: {
        position: 'absolute',
        marginLeft: 50,
        fontSize: 18,
        color: '#929292'
    },
    viewRow: {
        flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc'
    },
    viewItem: {
        flex: 1, borderRightWidth: 1, borderColor: '#ccc', flexDirection: 'row'
    },
    imgItem:{
        width: 55, height: 55, margin: 10
    },
    textItem:{
        alignSelf: 'center', marginHorizontal: 10, fontSize: 15
    }
});