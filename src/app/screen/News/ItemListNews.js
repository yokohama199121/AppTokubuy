import React, {Component} from "react"
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native"
import {DataNews} from "../../model/DataNews";
import {connect} from "react-redux";
import {_UpComment, _UpLike} from "../../action/ItemListNewAction";

class ItemListNews extends Component {

    render() {
        // noinspection JSAnnotator
        const dataNews: DataNews = this.props.dataNews;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={dataNews.avatar}/>

                <View style={{flex: 1}}>

                    <View style={styles.viewTop}>
                        <Text style={styles.name}>{dataNews.name}</Text>
                        <Text style={styles.textClock}>{dataNews.clock}</Text>
                    </View>

                    <View style={styles.viewBetween}>

                        <Text>{dataNews.title}</Text>
                        <Text style={styles.textContent}>{dataNews.text}</Text>
                        <Image
                            style={styles.imgMid}
                            source={dataNews.image}/>

                    </View>

                    <View style={styles.viewBottom}>
                        <View style={{flexDirection: 'row',}}>

                            <TouchableOpacity onPress={() => {
                                this.props._UpLike(dataNews.id)
                            }}>
                                <Image
                                    style={styles.ic}
                                    source={require('../../../res/img/ic_like.png')}/>
                            </TouchableOpacity>

                            <Text style={{color: '#8b8b8b', marginLeft: 5}}>いいね</Text>
                            <Text style={{color: '#8b8b8b', marginLeft: 1}}>({dataNews.like})</Text>

                        </View>

                        <View style={{flexDirection: 'row'}}>

                            <TouchableOpacity onPress={() => {
                                this.props._UpComment(dataNews.id)
                            }}>
                                <Image
                                    style={styles.ic}
                                    source={require('../../../res/img/ic_comment.png')}/>
                            </TouchableOpacity>

                            <Text style={{color: '#8b8b8b', marginLeft: 5}}>いいね</Text>
                            <Text style={{color: '#8b8b8b', marginLeft: 1}}>({dataNews.comment})</Text>


                        </View>


                        <Text style={{color: '#ee000c', marginLeft: 5}}>運試し> </Text>


                    </View>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginLeft: 10,
        marginTop: 10, flexDirection: 'row',
        borderBottomColor: '#d6d6d6', borderBottomWidth: 1.5,
        backgroundColor: 'white'
    },
    avatar: {
        width: 50, height: 50, borderRadius: 25
    },
    viewTop: {
        flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 10
    },
    name: {
        color: '#2ab9ff', fontSize: 18
    },
    textClock: {
        position: 'absolute',
        right: 0,
        marginRight: 15,
        color: '#8b8c8d'
    },
    viewBetween: {
        flex: 1,
        marginLeft: 5,
        marginTop: 10,
        marginRight: 15,
        paddingTop: 10,
        paddingLeft: 8,
        backgroundColor: '#e9e9e9'
    },
    textContent:
        {
            color: '#4b4b4b',
            marginTop: 8
        },
    imgMid: {
        width: 80, height: 80, marginTop: 10, marginBottom: 10
    },
    viewBottom: {
        flexDirection: 'row', backgroundColor: '#d6d6d6', marginLeft: 5,
        marginTop: 5,
        marginRight: 15,
        marginBottom: 10,
        justifyContent: 'space-between',
        padding: 8
    },
    ic: {
        width: 15, height: 15
    }
});

export default connect(null,{_UpLike,_UpComment})(ItemListNews)