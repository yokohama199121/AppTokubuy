import React, {Component} from "react"
import {Text,View} from "react-native"
import CountDownStyle from "../../../res/style/CountDownStyle";

export default class CDHeader extends Component {
    render() {
        return (

            <View style={CountDownStyle.viewTop}>
                <Text style= {{fontSize:20,fontWeight: 'bold', color:'white',marginTop:15}}>最新の発表</Text>
            </View>
        )
    }
}

