import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import MenuStyle from "../../../res/style/MenuStyle";

export default class ViewSearch extends Component {
    render() {
        return (
            <View style={MenuStyle.viewTop}>
                <View style={MenuStyle.viewSearch}>
                    <Image
                        style={MenuStyle.ic_search}
                        source={require('../../../res/img/ic_search.png')}
                    />
                    <Text style={MenuStyle.text_search}>商品を検索</Text>
                </View>
            </View>
        )
    }
}