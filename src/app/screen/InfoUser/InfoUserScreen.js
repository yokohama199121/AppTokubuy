import React, {Component} from "react"
import {View} from "react-native"
import ViewTop from "./ViewTop";
import ViewMid from "./ViewMid";
import ViewBottom from "./ViewBottom";

export default class InfoUserScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ViewTop/>
                <ViewMid/>
                <ViewBottom/>
            </View>
        )
    }
}