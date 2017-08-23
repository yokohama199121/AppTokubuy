import React, {Component} from "react"
import {Image, Text, TouchableOpacity, View} from "react-native"
import MenuStyle from "../../../res/style/MenuStyle";

export default class MenuHeader extends Component {
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={MenuStyle.header}>
                <View style={{flex:20}}>
                    {goBack &&
                    <TouchableOpacity onPress={()=> goBack()}>
                        <Image
                            style={MenuStyle.ic_back}
                            source={require('../../../res/img/ic_back.png')}/>
                    </TouchableOpacity>
                    }
                </View>
                <View style={{flex:60,alignItems:'center'}}>
                    <Text style={MenuStyle.text_header}>カテゴリー</Text>
                </View>
                <View style={{backgroundColor:"#f00044", flex:20}}>
                </View>

            </View>
        )
    }


}