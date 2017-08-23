import React, {Component} from "react"
import {View} from "react-native"
import MenuHeader from "./MenuHeader";
import ViewSearch from "./ViewSearch";
import Body from "./Body";

export default class MenuScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <MenuHeader {...this.props}/>
                <ViewSearch/>
                <Body/>
                <View style={{
                    backgroundColor: '#efeff4',
                    flex: 1}}/>
            </View>
        )
    }
}