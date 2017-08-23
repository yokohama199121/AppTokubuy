import React, {Component} from "react"
import {Image, TouchableOpacity, View} from "react-native"
import HomeStyle from "../../../res/style/HomeStyle"

export default class Header extends Component {
    render() {
        return (

            <View style={HomeStyle.viewTop}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Details');
                    }}
                >
                    <Image
                        style={HomeStyle.icMenu}
                        source={require('../../../res/img/ic_menu.png')}
                    />
                </TouchableOpacity>
                <Image
                    style={HomeStyle.buy}
                    source={require('../../../res/img/buy.png')}
                />

                <Image
                    style={HomeStyle.icMessage}
                    source={require('../../../res/img/ic_mes_header.png')}
                />
            </View>
        )
    }
}

