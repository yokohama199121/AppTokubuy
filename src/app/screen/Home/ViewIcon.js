import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import HomeStyle from "../../../res/style/HomeStyle";

export default class ViewIcon extends Component {
    render() {
        return (

            <View style={HomeStyle.viewIconMid}>

                <View style={HomeStyle.viewTextIcon}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../../res/img/ic_message.png')}/>
                    <Text style={HomeStyle.textIcon}>カテゴリー</Text>
                </View>

                <View style={HomeStyle.viewTextIcon}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../../res/img/ic_buy.png')}/>
                    <Text style={HomeStyle.textIcon}>1000円BUY</Text>
                </View>

                <View style={HomeStyle.viewTextIcon}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../../res/img/ic_galary.png')}/>
                    <Text style={HomeStyle.textIcon}>レビュー</Text>
                </View>

                <View style={HomeStyle.viewTextIcon}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../../res/img/ic_qa.png')}/>
                    <Text style={HomeStyle.textIcon}>ヘルプ</Text>
                </View>


            </View>
        )
    }
}