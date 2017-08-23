import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import NewsStyle from "../../../res/style/NewsStyle";

export default class HeaderNews extends Component {
    render() {
        return (
            <View style={NewsStyle.viewTop}>
                <Text style= {NewsStyle.text}>レビュー</Text>
                <Image
                    style={NewsStyle.icAdd}
                    source={require('../../../res/img/ic_add.png')}
                />
            </View>
        )
    }
}