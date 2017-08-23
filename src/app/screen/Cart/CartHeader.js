import React, {Component} from "react"
import {Image, Text, TouchableOpacity, View} from "react-native"
import CartStyle from "../../../res/style/CartStyle";

export default class CartHeader extends Component {
    render() {
        return (

            <View style={CartStyle.viewTop}>
                <Text style= {{fontSize:20,fontWeight: 'bold',color:'white',marginTop:15}}>カート</Text>
            </View>
        )
    }
}

