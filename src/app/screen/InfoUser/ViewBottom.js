import React, {Component} from "react"
import {Text, View} from "react-native"

export default class ViewBottom extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#efeff4',
                flex: 1,
                alignItems: 'center',
                borderTopWidth: 1,
                borderColor: '#b6b6b6'
            }}>

                <Text style={{
                    marginTop: 15,
                    color: '#a1a1a2',
                    fontWeight: '500',
                    fontSize: 14
                }}>全ての計算イベントはApple.Incと無関係です。</Text>

            </View>
        )
    }
}